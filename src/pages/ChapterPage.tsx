import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getChapter, getSubject } from '../content'
import { useProgress } from '../hooks/useProgress'
import Icon from '../components/Icon'
import ProgressBar from '../components/ProgressBar'
import Flashcards from '../components/Flashcards'

type Tab = 'notes' | 'flashcards' | 'progress'

export default function ChapterPage() {
  const { subjectId, chapterId } = useParams<{ subjectId: string; chapterId: string }>()
  const subject = subjectId ? getSubject(subjectId) : undefined
  const chapter = subjectId && chapterId ? getChapter(subjectId, chapterId) : undefined
  const { isDone, toggle, chapterPercent, resetChapter } = useProgress()

  const [tab, setTab] = useState<Tab>('notes')

  if (!subject || !chapter) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-ink-400 hover:text-ink-700 dark:hover:text-cream-100 mb-4"
        >
          <Icon name="ArrowLeft" size={14} /> Back home
        </Link>
        <h1 className="font-serif text-2xl">Chapter not found</h1>
      </div>
    )
  }

  const pct = chapterPercent(subject.id, chapter.id, chapter.sections.length)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <Link
        to={`/subject/${subject.id}`}
        className="inline-flex items-center gap-1 text-sm text-ink-400 dark:text-ink-300 hover:text-ink-700 dark:hover:text-cream-100 mb-5"
      >
        <Icon name="ArrowLeft" size={14} /> {subject.shortName}
      </Link>

      {/* Header */}
      <div className="mb-6">
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-ink-900 dark:text-cream-50 mb-2">
          {chapter.title}
        </h1>
        {chapter.subtitle && (
          <p className="text-ink-500 dark:text-ink-200 mb-4">{chapter.subtitle}</p>
        )}
        <div className="max-w-md">
          <div className="flex items-center justify-between text-xs text-ink-400 dark:text-ink-300 mb-1">
            <span>Chapter progress</span>
            <span>{pct}%</span>
          </div>
          <ProgressBar value={pct} showLabel={false} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-ink-100 dark:border-ink-700 mb-6 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto">
        {(
          [
            { id: 'notes', label: 'Notes', icon: 'FileText' },
            { id: 'flashcards', label: 'Flashcards', icon: 'Layers' },
            { id: 'progress', label: 'Progress', icon: 'ListChecks' },
          ] as { id: Tab; label: string; icon: string }[]
        ).map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors flex items-center gap-2 whitespace-nowrap
              ${
                tab === t.id
                  ? 'border-accent-500 text-ink-900 dark:text-cream-50'
                  : 'border-transparent text-ink-400 dark:text-ink-300 hover:text-ink-700 dark:hover:text-cream-100'
              }
            `}
          >
            <Icon name={t.icon} size={15} />
            {t.label}
            {t.id === 'flashcards' && (
              <span className="text-[10px] font-mono text-ink-300 ml-1">
                {chapter.flashcards.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      {tab === 'notes' && (
        <article className="prose-notes max-w-none pb-16">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{chapter.notes}</ReactMarkdown>
        </article>
      )}

      {tab === 'flashcards' && <Flashcards cards={chapter.flashcards} />}

      {tab === 'progress' && (
        <div className="max-w-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-semibold text-ink-900 dark:text-cream-50">
              Section checklist
            </h2>
            <button
              onClick={() => {
                if (confirm('Reset progress for this chapter?')) resetChapter(subject.id, chapter.id)
              }}
              className="text-xs text-ink-400 dark:text-ink-300 hover:text-ink-700 dark:hover:text-cream-100 flex items-center gap-1"
            >
              <Icon name="RotateCcw" size={12} /> Reset chapter
            </button>
          </div>
          <p className="text-sm text-ink-500 dark:text-ink-200 mb-5">
            Tick each section as you feel confident with it. Progress is saved on this device.
          </p>
          <div className="space-y-2">
            {chapter.sections.map((section, i) => {
              const done = isDone(subject.id, chapter.id, i)
              return (
                <label
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors
                    ${
                      done
                        ? 'border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-950/30'
                        : 'border-ink-100 dark:border-ink-700 hover:border-ink-200 dark:hover:border-ink-600 bg-white dark:bg-ink-800'
                    }
                  `}
                >
                  <button
                    onClick={() => toggle(subject.id, chapter.id, i)}
                    className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border transition-colors
                      ${
                        done
                          ? 'bg-accent-500 border-accent-500 text-white'
                          : 'border-ink-200 dark:border-ink-500 bg-white dark:bg-ink-800'
                      }
                    `}
                    aria-label={done ? 'Mark as not done' : 'Mark as done'}
                  >
                    {done && <Icon name="Check" size={13} />}
                  </button>
                  <span
                    className={`text-sm ${
                      done
                        ? 'text-ink-400 dark:text-ink-300 line-through'
                        : 'text-ink-700 dark:text-cream-100'
                    }`}
                  >
                    {section}
                  </span>
                </label>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
