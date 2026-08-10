import { useCallback, useEffect, useState } from 'react'

/**
 * Persistent settings for the AI chat panel.
 * Stored in localStorage so Aakash sets them once per device.
 *
 * The API key is NEVER committed to git — it lives only in the browser.
 * FreeLLMAPI is localhost-only, so even if the key leaked it would be
 * useless without access to Aakash's machine.
 */

const STORAGE_KEY = 'aakash-ibdp-llm-settings-v1'

export type AISettings = {
  /** Base URL for the OpenAI-compatible endpoint. `/api/llm` = Vite dev proxy. */
  baseUrl: string
  /** Bearer token from the FreeLLMAPI dashboard Keys page. */
  apiKey: string
  /** Model id — "auto" lets FreeLLMAPI's router pick. */
  model: string
  /** 0.0 (deterministic) → 1.0 (creative). Default 0.4. */
  temperature: number
}

const DEFAULTS: AISettings = {
  baseUrl: '/api/llm',
  apiKey: '',
  model: 'auto',
  temperature: 0.4,
}

function load(): AISettings {
  if (typeof window === 'undefined') return DEFAULTS
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULTS
    const parsed = JSON.parse(raw) as Partial<AISettings>
    return { ...DEFAULTS, ...parsed }
  } catch {
    return DEFAULTS
  }
}

function save(s: AISettings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
  } catch {
    /* ignore quota errors */
  }
}

const listeners = new Set<(s: AISettings) => void>()
let state: AISettings = load()

function setState(next: AISettings) {
  state = next
  save(next)
  listeners.forEach((fn) => fn(next))
}

export function useAISettings() {
  const [local, setLocal] = useState<AISettings>(state)

  useEffect(() => {
    listeners.add(setLocal)
    return () => {
      listeners.delete(setLocal)
    }
  }, [])

  const update = useCallback((patch: Partial<AISettings>) => {
    setState({ ...state, ...patch })
  }, [])

  // The router handles auth server-side via Vercel env vars, so the client
  // just needs a baseUrl to know where to send requests. The apiKey field
  // is kept in the type for backwards compatibility but no longer required.
  const isConfigured = Boolean(local.baseUrl)

  return { settings: local, update, isConfigured }
}
