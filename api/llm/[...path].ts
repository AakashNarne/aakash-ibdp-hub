/**
 * Server-side proxy for FreeLLMAPI, running as a Vercel Edge Function.
 *
 * Why this exists:
 *   Browsers block cross-origin fetches from https://aakash-ibdp-hub.vercel.app
 *   to Aakash's Cloudflare-tunnelled FreeLLMAPI unless the tunnelled server
 *   sends CORS headers — which FreeLLMAPI does not. By fetching /api/llm/*
 *   (same origin as the site), the browser is happy, and this function
 *   forwards the request server-to-server to the real FreeLLMAPI URL.
 *
 * How it's configured:
 *   Set FREELLMAPI_URL in Vercel's Project → Settings → Environment Variables
 *   to whatever cloudflared prints, WITH the /v1 suffix:
 *     https://<random>.trycloudflare.com/v1
 *   Update it when cloudflared restarts and the URL changes, then redeploy
 *   (or use "Redeploy" from the Vercel dashboard — no code push needed).
 *
 * The bearer key still travels with each request from the browser (via the
 * Authorization header, which we pass through unchanged); the key never
 * lives in Vercel env vars, so rotating it needs no redeploy.
 */
export const config = { runtime: 'edge' }

// Headers that shouldn't be forwarded (they describe the browser→Vercel hop,
// not the Vercel→FreeLLMAPI hop).
const DROP_HEADERS = new Set([
  'host',
  'connection',
  'x-forwarded-for',
  'x-forwarded-host',
  'x-forwarded-proto',
  'x-real-ip',
  'x-vercel-id',
  'x-vercel-deployment-url',
  'x-vercel-forwarded-for',
  'x-vercel-ip-city',
  'x-vercel-ip-country',
  'x-vercel-ip-country-region',
  'x-vercel-ip-latitude',
  'x-vercel-ip-longitude',
  'x-vercel-ip-timezone',
  'x-vercel-proxied-for',
  'x-vercel-proxy-signature',
  'x-vercel-proxy-signature-ts',
])

export default async function handler(req: Request): Promise<Response> {
  const upstreamBase = process.env.FREELLMAPI_URL
  if (!upstreamBase) {
    return new Response(
      JSON.stringify({
        error: {
          message:
            'FREELLMAPI_URL env var is not set on Vercel. Add it in Project Settings → Environment Variables, then redeploy.',
        },
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // /api/llm/chat/completions  →  <upstream>/chat/completions
  const url = new URL(req.url)
  const suffix = url.pathname.replace(/^\/api\/llm/, '')
  const target =
    upstreamBase.replace(/\/+$/, '') + suffix + (url.search || '')

  // Forward the request headers except host/proxy ones.
  const fwdHeaders = new Headers()
  req.headers.forEach((value, key) => {
    if (!DROP_HEADERS.has(key.toLowerCase())) fwdHeaders.set(key, value)
  })

  const init: RequestInit = {
    method: req.method,
    headers: fwdHeaders,
    // Only include a body for methods that carry one.
    body:
      req.method === 'GET' || req.method === 'HEAD'
        ? undefined
        : await req.arrayBuffer(),
    // Don't follow redirects on the upstream — pass them back verbatim.
    redirect: 'manual',
  }

  let upstreamRes: Response
  try {
    upstreamRes = await fetch(target, init)
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: {
          message: `Failed to reach FreeLLMAPI upstream at ${target}: ${
            err instanceof Error ? err.message : String(err)
          }`,
        },
      }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Mirror the response verbatim.
  const respHeaders = new Headers()
  upstreamRes.headers.forEach((value, key) => {
    respHeaders.set(key, value)
  })
  return new Response(upstreamRes.body, {
    status: upstreamRes.status,
    statusText: upstreamRes.statusText,
    headers: respHeaders,
  })
}
