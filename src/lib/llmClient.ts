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

export class FreeLLMError extends Error {
  status?: number
  detail?: unknown
  constructor(message: string, status?: number, detail?: unknown) {
    super(message)
    this.name = 'FreeLLMError'
    this.status = status
    this.detail = detail
  }
}

/** Health-check the endpoint. Returns true if /models responds 200. */
export async function ping(cfg: Pick<ClientConfig, 'baseUrl' | 'apiKey'>): Promise<boolean> {
  try {
    const res = await fetch(`${cfg.baseUrl}/models`, {
      headers: authHeaders(cfg.apiKey),
    })
    return res.ok
  } catch {
    return false
  }
}

/** List available models. */
export async function listModels(cfg: Pick<ClientConfig, 'baseUrl' | 'apiKey'>): Promise<string[]> {
  const res = await fetch(`${cfg.baseUrl}/models`, {
    headers: authHeaders(cfg.apiKey),
  })
  if (!res.ok) {
    throw new FreeLLMError(`Failed to list models (${res.status})`, res.status)
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

  const res = await fetch(`${cfg.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      ...authHeaders(cfg.apiKey),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })

  if (!res.ok) {
    let detail: unknown
    try {
      detail = await res.json()
    } catch {
      detail = await res.text().catch(() => '')
    }
    throw new FreeLLMError(
      `Chat request failed (${res.status})`,
      res.status,
      detail
    )
  }

  const body = (await res.json()) as ChatCompletionResponse
  const content = body.choices?.[0]?.message?.content
  if (!content) throw new FreeLLMError('Empty response from model', 200, body)
  // FreeLLMAPI echoes the resolved provider model; fall back to the request
  // value if the server didn't set one (some OpenAI-compat servers omit it).
  const model = body.model || req.model
  return { content, model }
}

function authHeaders(apiKey: string): Record<string, string> {
  return apiKey ? { Authorization: `Bearer ${apiKey}` } : {}
}
