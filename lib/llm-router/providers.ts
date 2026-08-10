/**
 * Provider configuration for the in-repo LLM router.
 *
 * Each provider entry defines:
 *  - id: internal identifier (used as the env-var suffix)
 *  - label: human-friendly display name (surfaces in the chat's model label)
 *  - baseUrl: OpenAI-compatible endpoint (chat/completions + models)
 *  - keysEnv: env-var name containing comma-separated API keys
 *  - priority: lower = preferred when "auto" is requested; providers are
 *    tried in this order for automatic fallback
 *  - defaultModel: the model used when the client requests "auto"
 *  - models: models we advertise to the client for this provider
 *  - authHeader / authPrefix: how the API key is passed (default: Bearer)
 *  - extraHeaders: optional per-request headers
 *  - urlTemplate: optional function to build the baseUrl at request time
 *    (used by Cloudflare, which needs an account_id in the URL)
 *
 * Add or remove providers by editing this file. Empty PROVIDER_*_KEYS env
 * vars are silently skipped, so it costs nothing to have entries here for
 * providers you haven't set up yet.
 */

export type Provider = {
  id: string
  label: string
  baseUrl: string
  keysEnv: string
  priority: number
  defaultModel: string
  models: string[]
  authHeader?: string
  authPrefix?: string
  extraHeaders?: Record<string, string>
  /** Called at request time to compute the effective base URL if it depends on env vars. */
  resolveBaseUrl?: () => string | null
}

export const PROVIDERS: Provider[] = [
  {
    id: 'groq',
    label: 'Groq',
    baseUrl: 'https://api.groq.com/openai/v1',
    keysEnv: 'PROVIDER_GROQ_KEYS',
    priority: 10,
    defaultModel: 'llama-3.3-70b-versatile',
    models: [
      'llama-3.3-70b-versatile',
      'llama-3.1-8b-instant',
      'llama3-groq-70b-8192-tool-use-preview',
      'mixtral-8x7b-32768',
      'gemma2-9b-it',
      'deepseek-r1-distill-llama-70b',
    ],
  },
  {
    id: 'cerebras',
    label: 'Cerebras',
    baseUrl: 'https://api.cerebras.ai/v1',
    keysEnv: 'PROVIDER_CEREBRAS_KEYS',
    priority: 20,
    defaultModel: 'llama-3.3-70b',
    models: ['llama-3.3-70b', 'llama3.1-8b', 'llama-4-scout-17b-16e-instruct'],
  },
  {
    id: 'gemini',
    label: 'Google AI Studio',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
    keysEnv: 'PROVIDER_GEMINI_KEYS',
    priority: 30,
    defaultModel: 'gemini-2.5-flash',
    models: [
      'gemini-2.5-flash',
      'gemini-2.5-pro',
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite',
    ],
  },
  {
    id: 'github',
    label: 'GitHub Models',
    baseUrl: 'https://models.github.ai/inference',
    keysEnv: 'PROVIDER_GITHUB_KEYS',
    priority: 40,
    defaultModel: 'openai/gpt-4o',
    models: [
      'openai/gpt-4o',
      'openai/gpt-4o-mini',
      'meta/Meta-Llama-3.1-70B-Instruct',
      'mistral-ai/Mistral-large-2411',
    ],
  },
  {
    id: 'nvidia',
    label: 'NVIDIA NIM',
    baseUrl: 'https://integrate.api.nvidia.com/v1',
    keysEnv: 'PROVIDER_NVIDIA_KEYS',
    priority: 50,
    defaultModel: 'meta/llama-3.3-70b-instruct',
    models: [
      'meta/llama-3.3-70b-instruct',
      'meta/llama-3.1-405b-instruct',
      'nvidia/nemotron-4-340b-instruct',
      'mistralai/mixtral-8x22b-instruct-v0.1',
    ],
  },
  {
    id: 'mistral',
    label: 'Mistral',
    baseUrl: 'https://api.mistral.ai/v1',
    keysEnv: 'PROVIDER_MISTRAL_KEYS',
    priority: 60,
    defaultModel: 'mistral-large-latest',
    models: [
      'mistral-large-latest',
      'mistral-medium-latest',
      'mistral-small-latest',
      'codestral-latest',
    ],
  },
  {
    id: 'cohere',
    label: 'Cohere',
    baseUrl: 'https://api.cohere.com/compatibility/v1',
    keysEnv: 'PROVIDER_COHERE_KEYS',
    priority: 65,
    defaultModel: 'command-r-plus-08-2024',
    models: [
      'command-r-plus-08-2024',
      'command-r-08-2024',
      'command-r7b-12-2024',
    ],
  },
  {
    id: 'zhipu',
    label: 'Zhipu AI',
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
    keysEnv: 'PROVIDER_ZHIPU_KEYS',
    priority: 70,
    defaultModel: 'glm-4-plus',
    models: ['glm-4-plus', 'glm-4-air', 'glm-4-flash', 'glm-4v'],
  },
  {
    id: 'ollama',
    label: 'Ollama Cloud',
    baseUrl: 'https://ollama.com/api/v1',
    keysEnv: 'PROVIDER_OLLAMA_KEYS',
    priority: 75,
    defaultModel: 'llama3.3:70b',
    models: ['llama3.3:70b', 'qwen2.5:72b', 'mistral-large'],
  },
  {
    id: 'reka',
    label: 'Reka',
    baseUrl: 'https://api.reka.ai/v1',
    keysEnv: 'PROVIDER_REKA_KEYS',
    priority: 78,
    defaultModel: 'reka-core',
    models: ['reka-core', 'reka-flash', 'reka-edge'],
  },
  {
    id: 'openrouter',
    label: 'OpenRouter',
    baseUrl: 'https://openrouter.ai/api/v1',
    keysEnv: 'PROVIDER_OPENROUTER_KEYS',
    priority: 80,
    defaultModel: 'meta-llama/llama-3.3-70b-instruct:free',
    models: [
      'meta-llama/llama-3.3-70b-instruct:free',
      'deepseek/deepseek-chat-v3.1:free',
      'google/gemini-2.0-flash-exp:free',
      'qwen/qwen-2.5-72b-instruct:free',
    ],
    extraHeaders: {
      'HTTP-Referer': 'https://aakash-ibdp-hub.vercel.app',
      'X-Title': 'Aakash IBDP Hub',
    },
  },
  {
    id: 'llm7',
    label: 'LLM7',
    baseUrl: 'https://api.llm7.io/v1',
    keysEnv: 'PROVIDER_LLM7_KEYS',
    priority: 85,
    defaultModel: 'gpt-4o-mini',
    models: ['gpt-4o-mini', 'gpt-4o', 'claude-3-5-sonnet'],
  },
  {
    id: 'opencodezen',
    label: 'OpenCode Zen',
    baseUrl: 'https://api.opencode.zen/v1',
    keysEnv: 'PROVIDER_OPENCODEZEN_KEYS',
    priority: 88,
    defaultModel: 'code-supernova',
    models: ['code-supernova', 'code-flash'],
  },
  {
    id: 'cloudflare',
    label: 'Cloudflare Workers AI',
    // Placeholder — real URL is built at request time from CLOUDFLARE_ACCOUNT_ID.
    baseUrl: 'https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/v1',
    keysEnv: 'PROVIDER_CLOUDFLARE_KEYS',
    priority: 90,
    defaultModel: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
    models: [
      '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      '@cf/meta/llama-3.1-70b-instruct',
      '@cf/mistralai/mistral-small-3.1-24b-instruct',
    ],
    resolveBaseUrl: () => {
      const acc = (process.env.CLOUDFLARE_ACCOUNT_ID || '').trim()
      if (!acc) return null // no account id → skip provider
      return `https://api.cloudflare.com/client/v4/accounts/${acc}/ai/v1`
    },
  },
  {
    id: 'custom',
    label: 'Custom',
    // Placeholder — real URL comes from PROVIDER_CUSTOM_URL at request time.
    baseUrl: '',
    keysEnv: 'PROVIDER_CUSTOM_KEYS',
    priority: 100,
    defaultModel: 'auto',
    models: [],
    resolveBaseUrl: () => {
      const u = (process.env.PROVIDER_CUSTOM_URL || '').trim()
      return u || null
    },
  },
]

/**
 * Read + parse keys from a provider's env var. Handles comma-separated
 * lists, trims whitespace, and drops empties.
 */
export function getKeys(p: Provider): string[] {
  const raw = process.env[p.keysEnv] || ''
  return raw
    .split(',')
    .map((k) => k.trim())
    .filter((k) => k.length > 0)
}

/**
 * Resolves a provider's effective base URL. For most providers this is the
 * static `baseUrl`; for Cloudflare and Custom it depends on env vars.
 * Returns null if the provider can't be used (missing config).
 */
export function getBaseUrl(p: Provider): string | null {
  if (p.resolveBaseUrl) return p.resolveBaseUrl()
  return p.baseUrl
}

/**
 * All providers that currently have at least one key AND a resolvable base
 * URL, sorted by priority.
 */
export function activeProviders(): Provider[] {
  return PROVIDERS.filter((p) => getKeys(p).length > 0 && getBaseUrl(p))
    .sort((a, b) => a.priority - b.priority)
}

/** Find a provider that advertises the given model. */
export function providerForModel(model: string): Provider | undefined {
  return activeProviders().find((p) => p.models.includes(model))
}
