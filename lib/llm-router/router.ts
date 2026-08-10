/**
 * Routing engine — turns an OpenAI-format request into a real upstream call.
 *
 * Strategy: try providers in priority order (or a specific provider if the
 * request pins a model to one). For each provider, shuffle its keys and
 * try them one by one. Skip on 401/403 (bad key), 429 (rate-limited), and
 * 5xx (upstream down). Return the first successful response. If every
 * provider exhausts, return a synthesised 502 with a breakdown of what
 * happened, so the client shows something diagnosable.
 *
 * No persistent state — key rotation is per-request only. If a key was
 * 429'd on the previous invocation, we'll try it again on this one; that
 * key might have recovered by now anyway.
 */

import {
  activeProviders,
  getBaseUrl,
  getKeys,
  providerForModel,
  type Provider,
} from './providers'

type RouteInput = {
  /** POST body from the browser — expected to be OpenAI chat.completions shape. */
  body: unknown
  /** Path suffix after /api/llm, e.g. "/chat/completions". */
  suffix: string
  /** Any extra headers to pass through (except auth/host). */
  passthroughHeaders: Record<string, string>
}

type RouteAttempt = {
  provider: string
  keyPrefix: string
  status?: number
  error?: string
}

type RouteResult =
  | {
      ok: true
      response: Response
      provider: Provider
      model: string
    }
  | {
      ok: false
      attempts: RouteAttempt[]
    }

/** Shuffle a copy of an array in place (Fisher–Yates) using Web Crypto. */
function shuffled<T>(arr: T[]): T[] {
  const out = arr.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Compact fingerprint for logging (never full key). */
function keyFingerprint(key: string): string {
  if (key.length <= 8) return key.slice(0, 3) + '…'
  return key.slice(0, 6) + '…'
}

/**
 * Pick which provider list to try. If the client pinned a specific model
 * that only one provider supports, use just that provider. Otherwise use
 * all active providers in priority order (which is the "auto" case).
 */
function pickProviders(model: string): Provider[] {
  const all = activeProviders()
  if (all.length === 0) return []
  if (!model || model === 'auto') return all
  const owner = providerForModel(model)
  if (owner) return [owner, ...all.filter((p) => p.id !== owner.id)]
  return all
}

/**
 * Rewrite the incoming OpenAI-format body for a specific provider. Mostly
 * this means substituting a real model id when the client asked for "auto".
 */
function rewriteBody(body: unknown, provider: Provider): { body: unknown; model: string } {
  const obj = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>
  const requested = typeof obj.model === 'string' ? obj.model : ''
  const model =
    !requested || requested === 'auto'
      ? provider.defaultModel
      : provider.models.includes(requested)
        ? requested
        : provider.defaultModel
  return { body: { ...obj, model }, model }
}

/**
 * Perform the actual routed fetch and return the final Response (or an
 * error breakdown for the caller to surface).
 */
export async function routeChatCompletion(
  input: RouteInput
): Promise<RouteResult> {
  const requestedModel =
    typeof (input.body as { model?: string })?.model === 'string'
      ? (input.body as { model?: string }).model || 'auto'
      : 'auto'
  const providers = pickProviders(requestedModel)
  const attempts: RouteAttempt[] = []

  for (const provider of providers) {
    const keys = shuffled(getKeys(provider))
    if (keys.length === 0) continue

    const { body: rewritten, model } = rewriteBody(input.body, provider)
    const bodyJson = JSON.stringify(rewritten)

    for (const key of keys) {
      const authHeaderName = provider.authHeader || 'Authorization'
      const authValue = (provider.authPrefix ?? 'Bearer ') + key

      const headers: Record<string, string> = {
        ...input.passthroughHeaders,
        ...(provider.extraHeaders || {}),
        [authHeaderName]: authValue,
        'Content-Type': 'application/json',
      }
      // Never forward the client's Authorization to upstream — our own key
      // replaces it. Same for anything hop-scoped.
      delete headers['authorization']
      delete headers['Authorization']
      headers[authHeaderName] = authValue

      const baseUrl = getBaseUrl(provider)
      if (!baseUrl) break // provider not resolvable — skip its remaining keys

      let res: Response
      try {
        res = await fetch(`${baseUrl}${input.suffix}`, {
          method: 'POST',
          headers,
          body: bodyJson,
        })
      } catch (err) {
        attempts.push({
          provider: provider.id,
          keyPrefix: keyFingerprint(key),
          error: err instanceof Error ? err.message : String(err),
        })
        continue
      }

      // Success path — return this response.
      if (res.ok) {
        return { ok: true, response: res, provider, model }
      }

      // Anything non-2xx: record and try the next key. Once this provider's
      // keys are exhausted, the outer loop moves to the next provider. We
      // retry on 4xx too (401/403 bad key, 404/410 model gone, 429 rate
      // limit) because those are provider-specific — a different provider
      // might handle the same request just fine. Only after every provider
      // × every key has failed do we surface an error to the caller.
      attempts.push({
        provider: provider.id,
        keyPrefix: keyFingerprint(key),
        status: res.status,
      })
    }
  }

  return { ok: false, attempts }
}

/**
 * Build the /models response by combining every active provider's model
 * list into one OpenAI-shaped list. Always prepends a virtual "auto" model.
 */
export function buildModelsList(): {
  object: 'list'
  data: Array<{
    id: string
    object: 'model'
    owned_by: string
    provider: string
  }>
} {
  const providers = activeProviders()
  const data: Array<{ id: string; object: 'model'; owned_by: string; provider: string }> = []
  data.push({ id: 'auto', object: 'model', owned_by: 'router', provider: 'router' })
  for (const p of providers) {
    for (const m of p.models) {
      data.push({
        id: m,
        object: 'model',
        owned_by: p.id,
        provider: p.label,
      })
    }
  }
  return { object: 'list', data }
}

/** Compact JSON error body when every provider fails. */
export function buildFailureResponse(attempts: RouteAttempt[]): Response {
  const summary = attempts
    .map(
      (a) =>
        `${a.provider}[${a.keyPrefix}] → ${a.status ? `HTTP ${a.status}` : a.error || 'error'}`
    )
    .join('; ')
  return new Response(
    JSON.stringify({
      error: {
        message: attempts.length
          ? `All providers exhausted. Attempts: ${summary}`
          : 'No active providers configured. Add at least one PROVIDER_*_KEYS env var on Vercel.',
        type: 'router_error',
        attempts,
      },
    }),
    { status: 502, headers: { 'Content-Type': 'application/json' } }
  )
}
