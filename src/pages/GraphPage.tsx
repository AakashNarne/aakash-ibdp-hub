import { Link } from 'react-router-dom'
import GraphView from '../components/GraphView'
import Icon from '../components/Icon'
import { useDarkMode } from '../hooks/useProgress'
import { graphStats } from '../lib/linkGraph'

export default function GraphPage() {
  const { isDark } = useDarkMode()
  const stats = graphStats()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-ink-400 dark:text-ink-300 hover:text-ink-700 dark:hover:text-cream-100 mb-5"
      >
        <Icon name="ArrowLeft" size={14} /> Home
      </Link>

      <header className="mb-6">
        <h1 className="display font-serif text-3xl font-semibold text-ink-900 dark:text-cream-50 mb-2">
          Graph
        </h1>
        <p className="text-ink-500 dark:text-ink-200 max-w-2xl">
          Every chapter and the links between them. Positions are fixed, not simulated — a
          chapter is always in the same place, so you can learn where things live.
        </p>
      </header>

      <div className="flex flex-wrap gap-6 mb-6 text-sm">
        <Stat label="Chapters" value={stats.chapters} />
        <Stat label="Links" value={stats.links} />
        <Stat label="Connected" value={`${stats.connected}/${stats.chapters}`} />
        <Stat label="Concepts" value={stats.concepts} />
      </div>

      <div className="rounded-2xl border border-ink-100 dark:border-ink-700 bg-white/50 dark:bg-ink-800/40 p-2 sm:p-4">
        <GraphView isDark={isDark} />
      </div>

      {stats.orphans.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-300 mb-3">
            Not yet linked to anything
          </h2>
          <div className="flex flex-wrap gap-2">
            {stats.orphans.map((r) => (
              <Link
                key={r.key}
                to={r.path}
                className="text-xs px-3 py-1.5 rounded-full border border-dashed border-ink-200 dark:border-ink-600
                           text-ink-500 dark:text-ink-200 hover:border-accent-400 hover:text-accent-600
                           dark:hover:text-accent-300 transition-colors"
              >
                {r.subject.shortName} · {r.shortTitle}
              </Link>
            ))}
          </div>
          <p className="text-xs text-ink-400 dark:text-ink-300 mt-3 max-w-2xl">
            These have no links in or out yet. Adding a{' '}
            <code className="font-mono text-[11px]">[[Chapter name]]</code> anywhere in another
            note will connect them.
          </p>
        </section>
      )}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="font-serif text-2xl font-semibold text-ink-900 dark:text-cream-50 leading-none">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-wider text-ink-400 dark:text-ink-300 mt-1">
        {label}
      </div>
    </div>
  )
}
