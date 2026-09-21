import { Link } from 'react-router-dom'
import Icon from './Icon'
import { backlinksFor, outgoingFor, type ChapterRef } from '../lib/linkGraph'

// NB: the prop must not be called `ref` — React reserves that name and it
// never reaches the component.
function RefRow({ target: r, context }: { target: ChapterRef; context?: string }) {
  return (
    <Link
      to={r.path}
      className="group block rounded-xl border border-ink-100 dark:border-ink-700 bg-white/60 dark:bg-ink-800/50
                 px-4 py-3 hover:border-accent-300 dark:hover:border-accent-600 active:scale-[0.995]
                 transition-[border-color,transform] duration-150"
    >
      <div className="flex items-baseline gap-2">
        <span className="text-[11px] uppercase tracking-wider text-ink-400 dark:text-ink-300 shrink-0">
          {r.subject.shortName}
        </span>
        <span className="text-sm font-medium text-ink-900 dark:text-cream-50 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
          {r.shortTitle}
        </span>
      </div>
      {context && (
        <p className="mt-1 text-[13px] leading-relaxed text-ink-500 dark:text-ink-200 line-clamp-2">
          {context}
        </p>
      )}
    </Link>
  )
}

/**
 * Linked mentions, the way Obsidian shows them: what this chapter points at,
 * and — more useful — what points back at it. Backlinks are the thing that
 * turns a pile of notes into something you can navigate sideways.
 */
export default function Backlinks({ chapterKey }: { chapterKey: string }) {
  const incoming = backlinksFor(chapterKey)
  const outgoing = outgoingFor(chapterKey)
  if (!incoming.length && !outgoing.length) return null

  return (
    <section className="mt-12 pt-8 border-t border-ink-100 dark:border-ink-700">
      <div className="grid gap-8 sm:grid-cols-2">
        {incoming.length > 0 && (
          <div>
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-300 mb-3">
              <Icon name="CornerUpLeft" size={13} />
              Linked mentions
              <span className="font-mono text-[10px] text-ink-300">{incoming.length}</span>
            </h2>
            <div className="space-y-2">
              {incoming.map((b) => (
                <RefRow key={b.from.key} target={b.from} context={b.context} />
              ))}
            </div>
          </div>
        )}
        {outgoing.length > 0 && (
          <div>
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-300 mb-3">
              <Icon name="ArrowUpRight" size={13} />
              Links from here
              <span className="font-mono text-[10px] text-ink-300">{outgoing.length}</span>
            </h2>
            <div className="space-y-2">
              {outgoing.map((r) => (
                <RefRow key={r.key} target={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
