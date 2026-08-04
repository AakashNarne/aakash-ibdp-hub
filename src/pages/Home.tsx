import { Link } from 'react-router-dom'
import { subjects } from '../content'
import { useProgress } from '../hooks/useProgress'
import Icon from '../components/Icon'
import ProgressBar from '../components/ProgressBar'

const colorAccent: Record<string, string> = {
  emerald: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50',
  amber: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50',
  blue: 'text-accent-600 dark:text-accent-300 bg-accent-50 dark:bg-accent-950/50',
  rose: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50',
  orange: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/50',
  violet: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50',
}

export default function Home() {
  const { subjectPercent } = useProgress()

  const totalChapters = subjects.reduce((sum, s) => sum + s.chapters.length, 0)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Hero */}
      <div className="mb-10 sm:mb-14">
        <p className="text-xs uppercase tracking-widest text-ink-400 dark:text-ink-300 mb-3">
          IB Diploma Programme · Year 1
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-ink-900 dark:text-cream-50 mb-4 leading-tight">
          Everything you're learning,
          <br className="hidden sm:block" /> in one place.
        </h1>
        <p className="text-ink-500 dark:text-ink-200 text-base sm:text-lg max-w-2xl leading-relaxed">
          Six subjects. {totalChapters} chapter{totalChapters === 1 ? '' : 's'} so far. Notes to
          read, flashcards to test yourself, progress you can watch build. This grows as you learn
          — school, tuitions, self-study, all in one hub.
        </p>
      </div>

      {/* Subjects */}
      <div className="grid gap-4 sm:grid-cols-2">
        {subjects.map((s) => {
          const pct = subjectPercent(s.id)
          const isEmpty = s.chapters.length === 0
          const accent = colorAccent[s.color] || colorAccent.blue

          return (
            <Link
              key={s.id}
              to={`/subject/${s.id}`}
              className={`group border rounded-xl p-5 transition-all
                ${
                  isEmpty
                    ? 'border-ink-100 dark:border-ink-700 hover:border-ink-200 dark:hover:border-ink-600 bg-cream-50 dark:bg-ink-800/40'
                    : 'border-ink-100 dark:border-ink-700 hover:border-accent-300 dark:hover:border-accent-500 bg-white dark:bg-ink-800 hover:shadow-sm'
                }
              `}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg ${accent}`}>
                  <Icon name={s.icon} size={20} />
                </div>
                <span className="text-[11px] uppercase tracking-widest font-medium text-ink-400 dark:text-ink-300 mt-1">
                  {s.level}
                </span>
              </div>
              <h2 className="font-serif text-xl font-semibold text-ink-900 dark:text-cream-50 mb-1">
                {s.shortName}
              </h2>
              <p className="text-sm text-ink-500 dark:text-ink-200 mb-4 min-h-[2.5rem]">
                {s.description}
              </p>

              <div className="flex items-center justify-between text-xs text-ink-400 dark:text-ink-300 mb-2">
                <span>
                  {isEmpty
                    ? 'No chapters yet'
                    : `${s.chapters.length} chapter${s.chapters.length === 1 ? '' : 's'}`}
                </span>
                {!isEmpty && <span>{pct}% complete</span>}
              </div>
              {!isEmpty && <ProgressBar value={pct} showLabel={false} />}
            </Link>
          )
        })}
      </div>

      {/* Info footer */}
      <div className="mt-14 pt-8 border-t border-ink-100 dark:border-ink-700 text-sm text-ink-400 dark:text-ink-300 max-w-2xl">
        <p className="mb-2 flex items-center gap-2">
          <Icon name="Sparkles" size={14} />
          <span>
            <strong className="text-ink-600 dark:text-cream-100 font-semibold">
              Progress is saved on this device.
            </strong>{' '}
            Tick sections off as you master them. Reset any chapter to start fresh.
          </span>
        </p>
        <p>
          To add a new chapter, drop a markdown file into{' '}
          <code className="font-mono text-[11px] bg-cream-200 dark:bg-ink-700 px-1 py-0.5 rounded">
            src/content/&lt;subject&gt;/
          </code>{' '}
          and register it in{' '}
          <code className="font-mono text-[11px] bg-cream-200 dark:bg-ink-700 px-1 py-0.5 rounded">
            src/content/index.ts
          </code>
          . See the README.
        </p>
      </div>
    </div>
  )
}
