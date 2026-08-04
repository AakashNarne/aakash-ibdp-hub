import { Link, useParams } from 'react-router-dom'
import { getSubject } from '../content'
import { useProgress } from '../hooks/useProgress'
import Icon from '../components/Icon'
import ProgressBar from '../components/ProgressBar'

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const subject = subjectId ? getSubject(subjectId) : undefined
  const { chapterPercent, subjectPercent } = useProgress()

  if (!subject) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-ink-400 hover:text-ink-700 dark:hover:text-cream-100 mb-4"
        >
          <Icon name="ArrowLeft" size={14} /> Back home
        </Link>
        <h1 className="font-serif text-2xl">Subject not found</h1>
      </div>
    )
  }

  const overallPct = subjectPercent(subject.id)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-ink-400 dark:text-ink-300 hover:text-ink-700 dark:hover:text-cream-100 mb-6"
      >
        <Icon name="ArrowLeft" size={14} /> All subjects
      </Link>

      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-ink-400 dark:text-ink-300 mb-2">
          {subject.level} · IB Diploma Programme
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink-900 dark:text-cream-50 mb-3">
          {subject.name}
        </h1>
        <p className="text-ink-500 dark:text-ink-200 mb-4">{subject.description}</p>
        {subject.chapters.length > 0 && (
          <div className="max-w-md">
            <div className="flex items-center justify-between text-xs text-ink-400 dark:text-ink-300 mb-1">
              <span>Overall progress</span>
              <span>{overallPct}%</span>
            </div>
            <ProgressBar value={overallPct} showLabel={false} />
          </div>
        )}
      </div>

      {subject.chapters.length === 0 ? (
        <div className="border border-dashed border-ink-200 dark:border-ink-700 rounded-xl p-10 text-center">
          <p className="text-ink-500 dark:text-ink-200 mb-2">No chapters added yet.</p>
          <p className="text-xs text-ink-400 dark:text-ink-300">
            As you cover topics in school and tuition, notes and flashcards will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {subject.chapters.map((ch) => {
            const pct = chapterPercent(subject.id, ch.id, ch.sections.length)
            return (
              <Link
                key={ch.id}
                to={`/subject/${subject.id}/chapter/${ch.id}`}
                className="group block border border-ink-100 dark:border-ink-700 hover:border-accent-300 dark:hover:border-accent-500 rounded-xl p-5 bg-white dark:bg-ink-800 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="font-serif text-lg font-semibold text-ink-900 dark:text-cream-50">
                    {ch.title}
                  </h2>
                  <Icon
                    name="ChevronRight"
                    size={18}
                    className="text-ink-300 group-hover:text-accent-500 mt-1"
                  />
                </div>
                {ch.subtitle && (
                  <p className="text-sm text-ink-500 dark:text-ink-200 mb-4">{ch.subtitle}</p>
                )}
                <div className="flex items-center gap-4 text-xs text-ink-400 dark:text-ink-300 mb-2">
                  <span className="flex items-center gap-1">
                    <Icon name="FileText" size={12} /> {ch.sections.length} sections
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Layers" size={12} /> {ch.flashcards.length} flashcards
                  </span>
                  <span className="ml-auto">{pct}% complete</span>
                </div>
                <ProgressBar value={pct} showLabel={false} size="sm" />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
