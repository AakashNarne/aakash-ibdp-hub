import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { conceptIndex } from '../lib/linkGraph'
import { subjects } from '../content'

/**
 * Every bolded term in every chapter, with where it is defined and everywhere
 * else it turns up.
 *
 * The genuinely useful column is the last one: a term that appears in more
 * than one subject is a term you can carry between papers. "Sovereignty" in
 * Global Politics and "sustainability" in Economics and Design Technology are
 * the connections an examiner rewards and a folder structure hides.
 */
export default function ConceptIndexPage() {
  const all = useMemo(() => conceptIndex(), [])
  const [q, setQ] = useState('')
  const [onlyCross, setOnlyCross] = useState(false)
  // Defaults to the defined terms: those came out of your Exam-Ready blocks and
  // are worth revising. The rest is everything you happened to bold.
  const [onlyDefined, setOnlyDefined] = useState(true)
  const [subjectFilter, setSubjectFilter] = useState<string | null>(null)

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return all.filter((c) => {
      if (onlyDefined && !c.definition) return false
      if (onlyCross && c.subjectIds.length < 2) return false
      if (subjectFilter && !c.subjectIds.includes(subjectFilter)) return false
      if (needle && !c.term.toLowerCase().includes(needle) && !c.definition?.toLowerCase().includes(needle))
        return false
      return true
    })
  }, [all, q, onlyCross, onlyDefined, subjectFilter])

  const crossCount = all.filter((c) => c.subjectIds.length > 1).length
  const definedCount = all.filter((c) => c.definition).length

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-ink-400 dark:text-ink-300 hover:text-ink-700 dark:hover:text-cream-100 mb-5"
      >
        <Icon name="ArrowLeft" size={14} /> Home
      </Link>

      <header className="mb-6">
        <h1 className="display font-serif text-3xl font-semibold text-ink-900 dark:text-cream-50 mb-2">
          Concept index
        </h1>
        <p className="text-ink-500 dark:text-ink-200 max-w-2xl">
          {definedCount} defined terms lifted from your Exam-Ready blocks, plus {all.length - definedCount}{' '}
          more you bolded somewhere. {crossCount} appear in more than one subject — those are the
          ones you can carry between papers.
        </p>
      </header>

      {/* Controls. Sticky and translucent so the list scrolls underneath. */}
      <div className="sticky top-[57px] z-20 -mx-4 sm:mx-0 px-4 sm:px-0 py-3 mb-4
                      bg-cream-50/80 dark:bg-ink-900/80 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 flex-1 min-w-[200px] rounded-xl border border-ink-100 dark:border-ink-700
                          bg-white/70 dark:bg-ink-800/70 px-3">
            <Icon name="Search" size={15} className="text-ink-400 dark:text-ink-300" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter terms…"
              className="flex-1 bg-transparent py-2 text-sm outline-none text-ink-900 dark:text-cream-50
                         placeholder:text-ink-300 dark:placeholder:text-ink-400"
            />
          </div>
          <button
            onClick={() => setOnlyDefined((v) => !v)}
            className={`text-xs px-3 py-2 rounded-xl border transition-colors active:scale-[0.97]
              ${onlyDefined
                ? 'border-accent-400 bg-accent-500/10 text-accent-700 dark:text-accent-300'
                : 'border-ink-100 dark:border-ink-700 text-ink-500 dark:text-ink-200 hover:border-ink-200'}`}
          >
            Defined only
          </button>
          <button
            onClick={() => setOnlyCross((v) => !v)}
            className={`text-xs px-3 py-2 rounded-xl border transition-colors active:scale-[0.97]
              ${onlyCross
                ? 'border-accent-400 bg-accent-500/10 text-accent-700 dark:text-accent-300'
                : 'border-ink-100 dark:border-ink-700 text-ink-500 dark:text-ink-200 hover:border-ink-200'}`}
          >
            Cross-subject only
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {subjects.filter((s) => s.chapters.length).map((s) => (
            <button
              key={s.id}
              onClick={() => setSubjectFilter((c) => (c === s.id ? null : s.id))}
              className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors active:scale-[0.97]
                ${subjectFilter === s.id
                  ? 'border-accent-400 bg-accent-500/10 text-accent-700 dark:text-accent-300'
                  : 'border-ink-100 dark:border-ink-700 text-ink-400 dark:text-ink-300 hover:border-ink-200'}`}
            >
              {s.shortName}
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-ink-400 dark:text-ink-300 mb-3">{shown.length} shown</p>

      <div className="space-y-1">
        {shown.map((c) => (
          <div
            key={c.term}
            className="rounded-xl border border-transparent hover:border-ink-100 dark:hover:border-ink-700
                       hover:bg-white/50 dark:hover:bg-ink-800/40 px-3 py-2.5 transition-colors"
          >
            <div className="flex items-baseline gap-2 flex-wrap">
              <h2 className="font-serif text-[17px] font-semibold text-ink-900 dark:text-cream-50">
                {c.term}
              </h2>
              {c.subjectIds.length > 1 && (
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded
                                 bg-accent-500/12 text-accent-700 dark:text-accent-300">
                  {c.subjectIds.length} subjects
                </span>
              )}
            </div>
            {c.definition && (
              <p className="text-[13.5px] leading-relaxed text-ink-600 dark:text-cream-200 mt-1">
                {c.definition}
              </p>
            )}
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {c.mentions.map((m) => (
                <Link
                  key={m.ref.key}
                  to={m.ref.path}
                  className="text-[11px] px-2 py-0.5 rounded-full border border-ink-100 dark:border-ink-700
                             text-ink-500 dark:text-ink-200 hover:border-accent-400 hover:text-accent-600
                             dark:hover:text-accent-300 transition-colors"
                  title={`${m.count} mention${m.count === 1 ? '' : 's'}`}
                >
                  {m.ref.subject.shortName} · {m.ref.shortTitle.length > 22 ? m.ref.shortTitle.slice(0, 20) + '…' : m.ref.shortTitle}
                  {c.definedIn?.key === m.ref.key && ' ·  def'}
                </Link>
              ))}
            </div>
          </div>
        ))}
        {shown.length === 0 && (
          <p className="text-center py-12 text-sm text-ink-400 dark:text-ink-300">
            No terms match that filter.
          </p>
        )}
      </div>
    </div>
  )
}
