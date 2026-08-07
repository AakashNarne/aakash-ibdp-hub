import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useProgress'
import { useAIChat } from '../hooks/useAIChat'
import Icon from './Icon'
import SelectionAskBubble from './SelectionAskBubble'
import AIChatPanel from './AIChatPanel'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isDark, toggle } = useDarkMode()
  const chat = useAIChat()

  return (
    // When the chat panel is open on sm+ screens, reserve 26rem of space on
    // the right so the notes don't hide behind the panel. On mobile the
    // panel is full-width modal (with backdrop) so no padding needed.
    <div
      className={`min-h-screen flex flex-col transition-[padding] duration-200 ease-out
        ${chat.isOpen ? 'sm:pr-[26rem]' : ''}
      `}
    >
      <header className="sticky top-0 z-30 backdrop-blur bg-cream-50/80 dark:bg-ink-900/80 border-b border-ink-100 dark:border-ink-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-md bg-accent-500 text-cream-50 flex items-center justify-center font-serif font-semibold text-sm">
              A
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-semibold text-ink-900 dark:text-cream-50">
                IBDP Hub
              </span>
              <span className="text-[11px] uppercase tracking-widest text-ink-400 dark:text-ink-300">
                Aakash · DP1
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-1">
            <button
              onClick={() => chat.open()}
              aria-label="Open study chat"
              title="Study chat"
              className="p-2 rounded-lg hover:bg-cream-200 dark:hover:bg-ink-800 text-ink-600 dark:text-cream-200 transition-colors flex items-center gap-1.5"
            >
              <Icon name="Sparkles" size={16} />
              <span className="text-xs font-medium hidden sm:inline">Ask AI</span>
            </button>
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg hover:bg-cream-200 dark:hover:bg-ink-800 text-ink-600 dark:text-cream-200 transition-colors"
            >
              <Icon name={isDark ? 'Sun' : 'Moon'} size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">{children}</main>

      <footer className="border-t border-ink-100 dark:border-ink-700 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-xs text-ink-400 dark:text-ink-300 flex flex-wrap justify-between gap-2">
          <span>
            IBDP Hub · Personal study space for Aakash Narne
          </span>
          <span>Add chapters via <code className="font-mono text-[11px]">src/content/</code></span>
        </div>
      </footer>

      {/* AI chat: floating selection bubble + slide-in side panel.
          Both mounted globally so they follow Aakash across every route. */}
      <SelectionAskBubble />
      <AIChatPanel />
    </div>
  )
}
