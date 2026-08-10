/**
 * Minimal OpenAI-compatible client for FreeLLMAPI.
 *
 * FreeLLMAPI (github.com/tashfeenahmed/freellmapi) exposes the standard
 * OpenAI /v1/chat/completions and /v1/models endpoints. In dev we hit the
 * Vite proxy at /api/llm/*; in prod (Vercel) the same path 404s — the chat
 * hook detects that and surfaces a friendly "not reachable" state.
 */

export type ChatRole = 'system' | 'user' | 'assistant'

export type ChatMessage = {
  role: ChatRole
  content: string
}

export type ChatCompletionRequest = {
  model: string
  messages: ChatMessage[]
  temperature?: number
  stream?: false // streaming not implemented yet — keep the code simple
}

export type ChatCompletionResponse = {
  id: string
  object: string
  created: number
  model: string
  choices: Array<{
    index: number
    message: { role: ChatRole; content: string }
    finish_reason: string | null
  }>
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export type ModelListResponse = {
  data: Array<{ id: string; object?: string; created?: number; owned_by?: string }>
}

export type ClientConfig = {
  baseUrl: string // e.g. "/api/llm" in dev, or a full URL in prod
  apiKey: string
  model: string // default "auto"
  temperature?: number
}

/**
 * Categorises where an error came from so the UI can react correctly:
 *  - 'endpoint-error' — FreeLLMAPI responded, but with a 4xx/5xx (bad key,
 *    rate limit, provider outage). Server is reachable; problem is in the
 *    request or the upstream provider.
 *  - 'not-endpoint'   — Something responded at the URL, but it wasn't
 *    FreeLLMAPI (e.g., Vercel's SPA fallback serving index.html, a stray
 *    proxy, wrong port). The endpoint is effectively unreachable.
 *  - 'network'        — fetch itself threw (DNS, connection refused, CORS).
 */
export type ErrorKind = 'endpoint-error' | 'not-endpoint' | 'network'

export class FreeLLMError extends Error {
  status?: number
  detail?: unknown
  kind: ErrorKind
  constructor(
    message: string,
    opts: { status?: number; detail?: unknown; kind?: ErrorKind } = {}
  ) {
    super(message)
    this.name = 'FreeLLMError'
    this.status = opts.status
    this.detail = opts.detail
    this.kind = opts.kind ?? 'endpoint-error'
  }
}

/**
 * Health-check the endpoint. Strictly verifies the response looks like a
 * FreeLLMAPI /v1/models payload — a JSON object with a `data` array. This
 * matters because Vercel's SPA fallback returns 200 + HTML for any GET,
 * which would otherwise fool a naive `res.ok` check.
 */
export async function ping(
  cfg: Pick<ClientConfig, 'baseUrl' | 'apiKey'>
): Promise<boolean> {
  try {
    const res = await fetch(`${cfg.baseUrl}/models`, {
      headers: authHeaders(cfg.apiKey),
    })
    if (!res.ok) return false
    const ct = (res.headers.get('content-type') || '').toLowerCase()
    if (!ct.includes('application/json')) return false
    const body = (await res.json()) as { data?: unknown }
    return Array.isArray(body?.data)
  } catch {
    return false
  }
}

/** List available models. */
export async function listModels(
  cfg: Pick<ClientConfig, 'baseUrl' | 'apiKey'>
): Promise<string[]> {
  const res = await fetch(`${cfg.baseUrl}/models`, {
    headers: authHeaders(cfg.apiKey),
  })
  if (!res.ok) {
    throw new FreeLLMError(`Failed to list models (${res.status})`, {
      status: res.status,
    })
  }
  const body = (await res.json()) as ModelListResponse
  return (body.data ?? []).map((m) => m.id).sort()
}

export type ChatCompletionResult = {
  /** The assistant's reply text. */
  content: string
  /**
   * The model that actually served the request, as reported by the API.
   * For FreeLLMAPI in "auto" mode this is the underlying provider model
   * the router selected (e.g. "gemini-2.5-flash"), not the request's
   * "model" field.
   */
  model: string
}

/** Send a chat completion request. Returns content + resolved model name. */
export async function chatCompletion(
  cfg: ClientConfig,
  messages: ChatMessage[]
): Promise<ChatCompletionResult> {
  const req: ChatCompletionRequest = {
    model: cfg.model || 'auto',
    messages,
    temperature: cfg.temperature ?? 0.4,
  }

  let res: Response
  try {
    res = await fetch(`${cfg.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        ...authHeaders(cfg.apiKey),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    })
  } catch (netErr) {
    throw new FreeLLMError(
      `Can't reach FreeLLMAPI at ${cfg.baseUrl}`,
      { kind: 'network', detail: String(netErr) }
    )
  }

  if (!res.ok) {
    const ct = (res.headers.get('content-type') || '').toLowerCase()
    const isJson = ct.includes('application/json')
    // If the error response isn't JSON, it's almost certainly not from
    // FreeLLMAPI (e.g., Vercel's SPA fallback 405/text or an nginx page).
    // Categorise as 'not-endpoint' so the UI shows the reachability banner.
    if (!isJson) {
      const bodySnippet = await res.text().catch(() => '')
      throw new FreeLLMError(
        `FreeLLMAPI endpoint not reachable (server returned ${res.status} but not a FreeLLMAPI response — you may be on the deployed URL instead of localhost)`,
        { status: res.status, detail: bodySnippet.slice(0, 400), kind: 'not-endpoint' }
      )
    }
    let detail: unknown
    try {
      detail = await res.json()
    } catch {
      detail = ''
    }
    // Use the router's error message when it provides one — it typically
    // has a per-provider breakdown (e.g. "All providers exhausted…") that's
    // much more useful than a bare status code.
    const upstreamMessage =
      detail && typeof detail === 'object' && 'error' in detail
        ? typeof (detail as { error?: { message?: unknown } }).error?.message === 'string'
          ? (detail as { error: { message: string } }).error.message
          : `Chat request failed (${res.status})`
        : `Chat request failed (${res.status})`
    throw new FreeLLMError(upstreamMessage, {
      status: res.status,
      detail,
      kind: 'endpoint-error',
    })
  }

  const body = (await res.json()) as ChatCompletionResponse
  const content = body.choices?.[0]?.message?.content
  if (!content) {
    throw new FreeLLMError('Empty response from model', {
      status: 200,
      detail: body,
    })
  }
  // FreeLLMAPI echoes the resolved provider model; fall back to the request
  // value if the server didn't set one (some OpenAI-compat servers omit it).
  const model = body.model || req.model
  return { content, model }
}

function authHeaders(apiKey: string): Record<string, string> {
  return apiKey ? { Authorization: `Bearer ${apiKey}` } : {}
}
