import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useAIChat } from '../hooks/useAIChat'
import { useAISettings } from '../hooks/useAISettings'
import { useProgress } from '../hooks/useProgress'
import { getChapter, getSubject } from '../content'
import { buildSystemPrompt, type RouteContext } from '../lib/aiContext'
import Icon from './Icon'

/**
 * Slide-in chat panel. Opens from the right. Automatically builds the AI's
 * system prompt from the current route (home / subject / chapter) plus the
 * user's progress.
 */
export default function AIChatPanel() {
  const chat = useAIChat()
  const { settings, isConfigured } = useAISettings()
  const [showSettings, setShowSettings] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const routeCtx = useRouteContext()

  const systemPrompt = useMemo(() => buildSystemPrompt(routeCtx), [routeCtx])

  // Ping the endpoint whenever the panel opens or settings change.
  useEffect(() => {
    if (chat.isOpen && isConfigured) {
      chat.checkReachable(settings)
    }
  }, [chat.isOpen, isConfigured, settings.baseUrl, settings.apiKey])

  // Autoscroll to the bottom on new messages.
  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [chat.messages, chat.pending])

  // Focus the input on open.
  useEffect(() => {
    if (chat.isOpen) {
      // Small delay for the slide-in transition.
      const t = window.setTimeout(() => inputRef.current?.focus(), 220)
      return () => window.clearTimeout(t)
    }
  }, [chat.isOpen])

  const handleSend = () => {
    const text = input.trim()
    if (!text || chat.pending || !isConfigured) return
    setInput('')
    chat.send(settings, systemPrompt, text, chat.seedSelection)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Backdrop — subtle, mostly for mobile */}
      {chat.isOpen && (
        <div
          className="fixed inset-0 bg-ink-900/30 backdrop-blur-[2px] z-40 sm:hidden"
          onClick={chat.close}
        />
      )}

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[26rem] bg-cream-50 dark:bg-ink-900 border-l border-ink-100 dark:border-ink-700 shadow-2xl z-50 flex flex-col transition-transform duration-200 ease-out
          ${chat.isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-hidden={!chat.isOpen}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-ink-100 dark:border-ink-700">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-accent-500 text-cream-50 flex items-center justify-center">
              <Icon name="Sparkles" size={14} />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-sm font-semibold text-ink-900 dark:text-cream-50">
                Study Chat
              </div>
              <div className="text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-300">
                {contextLabel(routeCtx)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <IconButton
              label="Clear conversation"
              onClick={() => {
                if (chat.messages.length === 0) return
                if (confirm('Clear this conversation?')) chat.clearHistory()
              }}
              icon="RotateCcw"
              disabled={chat.messages.length === 0}
            />
            <IconButton
              label="Settings"
              onClick={() => setShowSettings((v) => !v)}
              icon="Settings"
              active={showSettings}
            />
            <IconButton label="Close" onClick={chat.close} icon="X" />
          </div>
        </header>

        {/* Settings drawer */}
        {showSettings && <SettingsDrawer onClose={() => setShowSettings(false)} />}

        {/* Reachability banner */}
        {isConfigured && chat.reachable === 'no' && (
          <div className="px-4 py-2 text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 border-b border-amber-200 dark:border-amber-800">
            Can't reach FreeLLMAPI. Make sure the container is running (
            <code className="font-mono">docker compose up -d</code> in your
            <code className="font-mono"> ~/freellmapi</code> folder) and that you
            opened the site via <code className="font-mono">npm run dev</code>.
          </div>
        )}
        {!isConfigured && (
          <div className="px-4 py-2 text-xs bg-accent-50 dark:bg-accent-900/20 text-accent-800 dark:text-accent-200 border-b border-accent-200 dark:border-accent-800">
            First time? Open{' '}
            <button
              className="underline font-medium"
              onClick={() => setShowSettings(true)}
            >
              settings
            </button>{' '}
            and paste your FreeLLMAPI unified key.
          </div>
        )}

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
        >
          {chat.messages.length === 0 && !chat.pending && (
            <EmptyState routeCtx={routeCtx} />
          )}
          {chat.messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
          {chat.pending && <TypingIndicator />}
          {chat.error && (
            <div className="text-xs text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-lg p-2.5">
              <div className="font-medium mb-1">Something went wrong</div>
              <div className="font-mono text-[11px] break-words">{chat.error}</div>
            </div>
          )}
        </div>

        {/* Selection chip */}
        {chat.seedSelection && (
          <div className="px-4 pt-2">
            <div className="flex items-start gap-2 text-xs bg-cream-100 dark:bg-ink-800 border border-ink-100 dark:border-ink-700 rounded-lg p-2">
              <Icon name="FileText" size={13} className="mt-0.5 flex-shrink-0 text-ink-400" />
              <div className="flex-1 leading-snug text-ink-600 dark:text-ink-200 line-clamp-3 italic">
                "{chat.seedSelection}"
              </div>
              <button
                onClick={chat.clearSeed}
                aria-label="Remove selection"
                className="p-0.5 rounded hover:bg-cream-200 dark:hover:bg-ink-700 text-ink-400"
              >
                <Icon name="X" size={12} />
              </button>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-ink-100 dark:border-ink-700 p-3">
          <div className="flex items-end gap-2 bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 rounded-xl px-3 py-2 focus-within:border-accent-500">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                chat.seedSelection
                  ? 'Ask about the selection…'
                  : isConfigured
                  ? 'Ask anything about your notes…'
                  : 'Set your API key in settings first'
              }
              disabled={!isConfigured || chat.pending}
              rows={1}
              className="flex-1 bg-transparent text-sm text-ink-900 dark:text-cream-50 placeholder:text-ink-300 resize-none max-h-40 outline-none disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || chat.pending || !isConfigured}
              aria-label="Send"
              className="p-1.5 rounded-lg bg-accent-500 hover:bg-accent-600 text-cream-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <Icon name="Send" size={14} />
            </button>
          </div>
          <div className="text-[10px] text-ink-400 mt-1.5 px-1 flex justify-between">
            <span>Enter to send · Shift+Enter for newline</span>
            <span className="font-mono">{settings.model}</span>
          </div>
        </div>
      </aside>
    </>
  )
}

function IconButton({
  label,
  onClick,
  icon,
  active,
  disabled,
}: {
  label: string
  onClick: () => void
  icon: string
  active?: boolean
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      disabled={disabled}
      className={`p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed
        ${
          active
            ? 'bg-cream-200 dark:bg-ink-800 text-ink-900 dark:text-cream-50'
            : 'text-ink-500 dark:text-ink-300 hover:bg-cream-200 dark:hover:bg-ink-800'
        }
      `}
    >
      <Icon name={icon} size={14} />
    </button>
  )
}

function MessageBubble({
  message,
}: {
  message: {
    role: 'user' | 'assistant'
    content: string
    selection?: string
    model?: string
  }
}) {
  const isUser = message.role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[92%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-2xl px-3.5 py-2.5 text-sm
            ${
              isUser
                ? 'bg-accent-500 text-cream-50 rounded-br-md'
                : 'bg-white dark:bg-ink-800 text-ink-800 dark:text-cream-100 border border-ink-100 dark:border-ink-700 rounded-bl-md'
            }
          `}
        >
          {message.selection && (
            <div className="text-[11px] italic mb-1.5 line-clamp-2 border-l-2 border-current pl-2 opacity-70">
              "{message.selection}"
            </div>
          )}
          {isUser ? (
            <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
          ) : (
            <div className="prose-chat">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
            </div>
          )}
        </div>
        {!isUser && message.model && (
          <div className="text-[10px] font-mono text-ink-400 dark:text-ink-500 mt-1 px-1">
            {message.model}
          </div>
        )}
      </div>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 rounded-2xl rounded-bl-md px-3.5 py-3">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-ink-300 dark:bg-ink-500 animate-pulse [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink-300 dark:bg-ink-500 animate-pulse [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink-300 dark:bg-ink-500 animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}

function EmptyState({ routeCtx }: { routeCtx: RouteContext }) {
  const suggestions = getSuggestions(routeCtx)
  return (
    <div className="flex flex-col items-center text-center py-6 px-2 text-ink-500 dark:text-ink-300">
      <div className="w-12 h-12 rounded-2xl bg-accent-100 dark:bg-accent-900/40 text-accent-600 dark:text-accent-300 flex items-center justify-center mb-3">
        <Icon name="Sparkles" size={22} />
      </div>
      <div className="font-serif text-base text-ink-800 dark:text-cream-100 mb-1">
        Ask about anything you're studying
      </div>
      <div className="text-xs mb-4 max-w-[16rem]">
        Highlight a passage in the notes for a "Ask AI" bubble, or type a
        question below. The AI already has your chapter and progress loaded.
      </div>
      {suggestions.length > 0 && (
        <div className="w-full space-y-1.5">
          {suggestions.map((s) => (
            <SuggestionChip key={s} text={s} />
          ))}
        </div>
      )}
    </div>
  )
}

function SuggestionChip({ text }: { text: string }) {
  const { send } = useAIChat()
  const { settings, isConfigured } = useAISettings()
  const routeCtx = useRouteContext()
  const systemPrompt = useMemo(() => buildSystemPrompt(routeCtx), [routeCtx])
  return (
    <button
      disabled={!isConfigured}
      onClick={() => send(settings, systemPrompt, text)}
      className="w-full text-left text-xs px-3 py-2 rounded-lg bg-cream-100 dark:bg-ink-800 hover:bg-cream-200 dark:hover:bg-ink-700 text-ink-700 dark:text-cream-100 border border-ink-100 dark:border-ink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {text}
    </button>
  )
}

function SettingsDrawer({ onClose }: { onClose: () => void }) {
  const { settings, update } = useAISettings()
  const [showKey, setShowKey] = useState(false)
  return (
    <div className="border-b border-ink-100 dark:border-ink-700 bg-cream-100/60 dark:bg-ink-800/60 px-4 py-3 space-y-3">
      <div>
        <label className="text-[11px] uppercase tracking-widest text-ink-400 dark:text-ink-300 mb-1 block">
          FreeLLMAPI base URL
        </label>
        <input
          type="text"
          value={settings.baseUrl}
          onChange={(e) => update({ baseUrl: e.target.value })}
          className="w-full font-mono text-xs px-2.5 py-1.5 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-md text-ink-900 dark:text-cream-50 focus:outline-none focus:border-accent-500"
        />
        <div className="text-[10px] text-ink-400 mt-1">
          Default <code className="font-mono">/api/llm</code> goes through the
          Vite dev proxy to <code className="font-mono">localhost:3001/v1</code>.
        </div>
      </div>

      <div>
        <label className="text-[11px] uppercase tracking-widest text-ink-400 dark:text-ink-300 mb-1 block">
          Unified API key
        </label>
        <div className="flex gap-1">
          <input
            type={showKey ? 'text' : 'password'}
            value={settings.apiKey}
            onChange={(e) => update({ apiKey: e.target.value })}
            placeholder="freellmapi-…"
            className="flex-1 font-mono text-xs px-2.5 py-1.5 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-md text-ink-900 dark:text-cream-50 focus:outline-none focus:border-accent-500"
          />
          <button
            onClick={() => setShowKey((v) => !v)}
            className="text-xs px-2 py-1 rounded-md border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-300 hover:bg-cream-200 dark:hover:bg-ink-800"
          >
            {showKey ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="text-[10px] text-ink-400 mt-1">
          Get from the FreeLLMAPI dashboard → Keys page. Stored in this
          browser only.
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <label className="text-[11px] uppercase tracking-widest text-ink-400 dark:text-ink-300 mb-1 block">
            Model
          </label>
          <input
            type="text"
            value={settings.model}
            onChange={(e) => update({ model: e.target.value })}
            className="w-full font-mono text-xs px-2.5 py-1.5 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-md text-ink-900 dark:text-cream-50 focus:outline-none focus:border-accent-500"
          />
        </div>
        <div className="w-24">
          <label className="text-[11px] uppercase tracking-widest text-ink-400 dark:text-ink-300 mb-1 block">
            Temp
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="1"
            value={settings.temperature}
            onChange={(e) =>
              update({ temperature: Math.max(0, Math.min(1, Number(e.target.value) || 0)) })
            }
            className="w-full font-mono text-xs px-2.5 py-1.5 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-md text-ink-900 dark:text-cream-50 focus:outline-none focus:border-accent-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-xs px-3 py-1.5 rounded-md bg-accent-500 hover:bg-accent-600 text-cream-50"
        >
          Done
        </button>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------- */
/* Route → context inference                                            */
/* -------------------------------------------------------------------- */

function useRouteContext(): RouteContext {
  // The panel is mounted globally, so it does not have route params via
  // useParams. Instead we parse them out of the pathname.
  const { pathname } = useLocation()
  const progress = useProgress()

  // /subject/:subjectId
  // /subject/:subjectId/chapter/:chapterId
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] === 'subject' && parts[1]) {
    const subject = getSubject(parts[1])
    if (subject && parts[2] === 'chapter' && parts[3]) {
      const chapter = getChapter(parts[1], parts[3])
      if (chapter) {
        const completed: string[] = []
        const remaining: string[] = []
        chapter.sections.forEach((s, i) => {
          if (progress.isDone(subject.id, chapter.id, i)) completed.push(s)
          else remaining.push(s)
        })
        return { kind: 'chapter', subject, chapter, completedSections: completed, remainingSections: remaining }
      }
    }
    if (subject) return { kind: 'subject', subject }
  }
  return { kind: 'home' }
}

function contextLabel(ctx: RouteContext): string {
  if (ctx.kind === 'chapter') return `${ctx.subject.shortName} · ${ctx.chapter.id.toUpperCase()}`
  if (ctx.kind === 'subject') return ctx.subject.shortName
  return 'All subjects'
}

function getSuggestions(ctx: RouteContext): string[] {
  if (ctx.kind === 'chapter') {
    return [
      `Give me a 60-second summary of ${ctx.chapter.title}.`,
      `Quiz me on the sections I haven't marked complete yet.`,
      `What's the most common exam trap in this chapter?`,
    ]
  }
  if (ctx.kind === 'subject') {
    return [
      `Give me a study plan for ${ctx.subject.name} this term.`,
      `What are the highest-yield topics in this subject?`,
    ]
  }
  return [
    `What should I revise first based on my progress?`,
    `Compare a concept between two of my subjects.`,
  ]
}
