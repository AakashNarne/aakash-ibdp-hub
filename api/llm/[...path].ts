/**
 * Vercel Edge Function that dispatches /api/llm/* to the in-repo router.
 *
 * Replaces the earlier one-URL proxy. Now instead of forwarding to a
 * single FREELLMAPI_URL, we rotate across many providers × many keys
 * ourselves (see ../../lib/llm-router/router.ts).
 *
 * Env vars each provider reads are documented in providers.ts. Add keys
 * for a provider to switch it on; leave the env var unset to skip.
 */

import {
  buildFailureResponse,
  buildModelsList,
  routeChatCompletion,
} from '../../lib/llm-router/router'

export const config = { runtime: 'edge' }

const DROP_HEADERS = new Set([
  'host',
  'connection',
  'authorization', // The router substitutes its own per-provider key.
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
  'content-length',
  'content-type', // Set by the router per upstream.
  'accept-encoding',
])

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url)
  const suffix = url.pathname.replace(/^\/api\/llm/, '')

  // GET /api/llm/models — return combined model list.
  if (req.method === 'GET' && suffix === '/models') {
    return new Response(JSON.stringify(buildModelsList()), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // POST /api/llm/chat/completions — route to a real provider.
  if (req.method === 'POST' && suffix === '/chat/completions') {
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return new Response(
        JSON.stringify({ error: { message: 'Invalid JSON body', type: 'client_error' } }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Collect passthrough headers (drop hop-scoped and Vercel-specific ones).
    const passthrough: Record<string, string> = {}
    req.headers.forEach((v, k) => {
      if (!DROP_HEADERS.has(k.toLowerCase())) passthrough[k] = v
    })

    const result = await routeChatCompletion({ body, suffix, passthroughHeaders: passthrough })

    if (!result.ok) return buildFailureResponse(result.attempts)

    // Success — pass the upstream body through, but override the `model`
    // field in the JSON response so the client's little label reflects the
    // actual provider+model combo (e.g. "groq:llama-3.3-70b-versatile").
    const upstreamHeaders = new Headers()
    result.response.headers.forEach((v, k) => {
      // Drop content-encoding/content-length — Vercel re-encodes.
      if (
        k.toLowerCase() !== 'content-encoding' &&
        k.toLowerCase() !== 'content-length' &&
        k.toLowerCase() !== 'transfer-encoding'
      ) {
        upstreamHeaders.set(k, v)
      }
    })

    // Rewrite the body's `model` field to include the provider label.
    // Only bother if the upstream is JSON (which it will be for chat/completions).
    const ct = (result.response.headers.get('content-type') || '').toLowerCase()
    if (ct.includes('application/json')) {
      try {
        const upstreamBody = (await result.response.json()) as { model?: string }
        upstreamBody.model = `${result.provider.id}:${upstreamBody.model || result.model}`
        return new Response(JSON.stringify(upstreamBody), {
          status: result.response.status,
          headers: upstreamHeaders,
        })
      } catch {
        // Fall through and stream verbatim if we can't parse.
      }
    }

    return new Response(result.response.body, {
      status: result.response.status,
      headers: upstreamHeaders,
    })
  }

  return new Response(
    JSON.stringify({
      error: {
        message: `Unsupported route: ${req.method} ${suffix}. This router only implements /chat/completions and /models.`,
        type: 'client_error',
      },
    }),
    { status: 404, headers: { 'Content-Type': 'application/json' } }
  )
}
