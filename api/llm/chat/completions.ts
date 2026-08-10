/**
 * POST /api/llm/chat/completions — OpenAI-compatible chat endpoint that
 * dispatches to the multi-provider router (see ../../../lib/llm-router).
 *
 * Explicit route file (as opposed to a catch-all) because Vercel's
 * [...slug].ts catch-all was 404'ing multi-segment paths at the edge.
 */
import {
  buildFailureResponse,
  routeChatCompletion,
} from '../../../lib/llm-router/router'

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
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({
        error: { message: 'Method not allowed on /chat/completions — use POST.', type: 'client_error' },
      }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return new Response(
      JSON.stringify({ error: { message: 'Invalid JSON body', type: 'client_error' } }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const passthrough: Record<string, string> = {}
  req.headers.forEach((v, k) => {
    if (!DROP_HEADERS.has(k.toLowerCase())) passthrough[k] = v
  })

  const result = await routeChatCompletion({
    body,
    suffix: '/chat/completions',
    passthroughHeaders: passthrough,
  })

  if (!result.ok) return buildFailureResponse(result.attempts)

  // Success — mirror the upstream response but tag the `model` field with
  // the provider id so the client's little label reflects the actual
  // backend (e.g. "groq:llama-3.3-70b-versatile").
  const upstreamHeaders = new Headers()
  result.response.headers.forEach((v, k) => {
    const lk = k.toLowerCase()
    if (lk === 'content-encoding' || lk === 'content-length' || lk === 'transfer-encoding') return
    upstreamHeaders.set(k, v)
  })

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
      /* fall through and stream verbatim */
    }
  }

  return new Response(result.response.body, {
    status: result.response.status,
    headers: upstreamHeaders,
  })
}
