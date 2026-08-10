/**
 * GET /api/llm/models — returns the combined model list across every
 * configured provider (plus a virtual "auto" entry).
 *
 * Explicit route file (as opposed to a catch-all) because Vercel's
 * [...slug].ts catch-all was 404'ing multi-segment paths at the edge.
 */
import { buildModelsList } from '../../lib/llm-router/router'

export const config = { runtime: 'edge' }

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return new Response(
      JSON.stringify({
        error: { message: 'Method not allowed on /models — use GET.', type: 'client_error' },
      }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    )
  }
  return new Response(JSON.stringify(buildModelsList()), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
