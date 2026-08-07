import { useCallback, useEffect, useState } from 'react'
import { chatCompletion, FreeLLMError, ping } from '../lib/llmClient'
import type { ChatMessage } from '../lib/llmClient'
import type { AISettings } from './useAISettings'
import { formatUserTurn } from '../lib/aiContext'

/**
 * Global-ish chat state for the AI panel.
 *
 * Module-level singleton (mirrors the pattern in useProgress) so the
 * selection bubble and the chat panel share the same "isOpen" flag and
 * message history without prop-drilling. Messages persist to localStorage
 * so Aakash's conversation survives a page reload.
 */

const STORAGE_KEY = 'aakash-ibdp-llm-chat-v1'
const MAX_HISTORY = 40 // sliding window — keep last N turns

export type UIMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  /** Text Aakash had selected when he sent this turn. */
  selection?: string
  /**
   * For assistant messages: the model that served this reply, as reported
   * by FreeLLMAPI. Undefined for user turns and for old messages saved
   * before this field was tracked.
   */
  model?: string
  createdAt: number
}

type ChatState = {
  isOpen: boolean
  messages: UIMessage[]
  pending: boolean
  /** Selection captured at the moment the panel was opened. */
  seedSelection?: string
  /** Last error, if any. Reset on next send. */
  error?: string
  /** Reachability of the FreeLLMAPI endpoint. */
  reachable: 'unknown' | 'yes' | 'no'
}

function loadMessages(): UIMessage[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as UIMessage[]
    if (!Array.isArray(parsed)) return []
    return parsed.slice(-MAX_HISTORY)
  } catch {
    return []
  }
}

function saveMessages(messages: UIMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_HISTORY)))
  } catch {
    /* ignore quota errors */
  }
}

let state: ChatState = {
  isOpen: false,
  messages: loadMessages(),
  pending: false,
  reachable: 'unknown',
}

const listeners = new Set<(s: ChatState) => void>()

function setState(next: ChatState) {
  state = next
  saveMessages(next.messages)
  listeners.forEach((fn) => fn(next))
}

function randId() {
  // Not cryptographic — just needs to be unique per session for React keys.
  return `${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`
}

export function useAIChat() {
  const [local, setLocal] = useState<ChatState>(state)

  useEffect(() => {
    listeners.add(setLocal)
    return () => {
      listeners.delete(setLocal)
    }
  }, [])

  const open = useCallback((seedSelection?: string) => {
    setState({ ...state, isOpen: true, seedSelection })
  }, [])

  const close = useCallback(() => {
    setState({ ...state, isOpen: false, seedSelection: undefined })
  }, [])

  const clearHistory = useCallback(() => {
    setState({ ...state, messages: [], error: undefined })
  }, [])

  const clearSeed = useCallback(() => {
    setState({ ...state, seedSelection: undefined })
  }, [])

  const checkReachable = useCallback(async (settings: AISettings) => {
    if (!settings.apiKey) {
      setState({ ...state, reachable: 'unknown' })
      return
    }
    const ok = await ping({ baseUrl: settings.baseUrl, apiKey: settings.apiKey })
    setState({ ...state, reachable: ok ? 'yes' : 'no' })
  }, [])

  const send = useCallback(
    async (
      settings: AISettings,
      systemPrompt: string,
      userInput: string,
      selection?: string
    ) => {
      if (state.pending) return

      // Snapshot the PRIOR conversation before we mutate the state — this
      // is what gets sent to the model along with the new user turn.
      const priorHistory: ChatMessage[] = state.messages.map((m) => ({
        role: m.role,
        content:
          m.role === 'user' ? formatUserTurn(m.content, m.selection) : m.content,
      }))

      const userMsg: UIMessage = {
        id: randId(),
        role: 'user',
        content: userInput,
        selection,
        createdAt: Date.now(),
      }

      // Optimistic UI: show the user's message immediately.
      setState({
        ...state,
        messages: [...state.messages, userMsg],
        pending: true,
        error: undefined,
        seedSelection: undefined,
      })

      const outgoing: ChatMessage[] = [
        { role: 'system', content: systemPrompt },
        ...priorHistory,
        { role: 'user', content: formatUserTurn(userInput, selection) },
      ]

      try {
        const reply = await chatCompletion(
          {
            baseUrl: settings.baseUrl,
            apiKey: settings.apiKey,
            model: settings.model,
            temperature: settings.temperature,
          },
          outgoing
        )
        const assistantMsg: UIMessage = {
          id: randId(),
          role: 'assistant',
          content: reply.content,
          model: reply.model,
          createdAt: Date.now(),
        }
        setState({
          ...state,
          messages: [...state.messages, assistantMsg],
          pending: false,
          reachable: 'yes',
        })
      } catch (err) {
        const msg =
          err instanceof FreeLLMError
            ? `${err.message}${err.status ? ` [${err.status}]` : ''}`
            : err instanceof Error
              ? err.message
              : 'Unknown error'
        setState({
          ...state,
          pending: false,
          error: msg,
          reachable:
            err instanceof FreeLLMError && err.status ? 'yes' : 'no',
        })
      }
    },
    []
  )

  return {
    ...local,
    open,
    close,
    send,
    clearHistory,
    clearSeed,
    checkReachable,
  }
}
