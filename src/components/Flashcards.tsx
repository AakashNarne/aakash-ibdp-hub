import { useEffect, useState } from 'react'
import type { Flashcard } from '../content/types'
import Icon from './Icon'

export default function Flashcards({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [order, setOrder] = useState<number[]>(() => cards.map((_, i) => i))

  useEffect(() => {
    setFlipped(false)
    setShowHint(false)
  }, [index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === ' ') {
        e.preventDefault()
        setFlipped((f) => !f)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, index])

  if (cards.length === 0) {
    return (
      <div className="border border-dashed border-ink-200 dark:border-ink-700 rounded-xl p-10 text-center">
        <p className="text-ink-500 dark:text-ink-200">No flashcards yet for this chapter.</p>
      </div>
    )
  }

  const card = cards[order[index]]

  const next = () => setIndex((i) => (i + 1) % order.length)
  const prev = () => setIndex((i) => (i - 1 + order.length) % order.length)
  const shuffle = () => {
    const shuffled = [...order].sort(() => Math.random() - 0.5)
    setOrder(shuffled)
    setIndex(0)
  }
  const reset = () => {
    setOrder(cards.map((_, i) => i))
    setIndex(0)
  }

  return (
    <div className="max-w-3xl mx-auto pb-16">
      {/* Counter + controls */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <span className="font-mono text-ink-400 dark:text-ink-300">
          {index + 1} / {cards.length}
        </span>
        <div className="flex gap-1">
          <button
            onClick={shuffle}
            className="px-3 py-1.5 text-xs text-ink-500 dark:text-ink-200 hover:text-ink-900 dark:hover:text-cream-50 hover:bg-cream-200 dark:hover:bg-ink-700 rounded-md transition-colors"
            title="Shuffle order"
          >
            Shuffle
          </button>
          <button
            onClick={reset}
            className="px-3 py-1.5 text-xs text-ink-500 dark:text-ink-200 hover:text-ink-900 dark:hover:text-cream-50 hover:bg-cream-200 dark:hover:bg-ink-700 rounded-md transition-colors"
            title="Restore original order"
          >
            Reset order
          </button>
        </div>
      </div>

      {/* Card */}
      <div
        onClick={() => setFlipped((f) => !f)}
        className="perspective-1000 cursor-pointer select-none"
      >
        <div
          className={`relative w-full min-h-[280px] sm:min-h-[340px] transform-3d transition-transform duration-500 ${
            flipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front (question) */}
          <div className="absolute inset-0 backface-hidden bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 rounded-2xl p-6 sm:p-10 flex flex-col justify-center shadow-sm">
            <p className="text-xs uppercase tracking-widest text-ink-400 dark:text-ink-300 mb-4">
              Question
            </p>
            <p className="font-serif text-xl sm:text-2xl text-ink-900 dark:text-cream-50 leading-relaxed">
              {card.q}
            </p>

            {card.hint && (
              <div className="mt-6 text-sm">
                {showHint ? (
                  <p className="text-ink-500 dark:text-ink-200 italic">💡 Hint: {card.hint}</p>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowHint(true)
                    }}
                    className="text-accent-600 dark:text-accent-300 hover:underline"
                  >
                    Show hint
                  </button>
                )}
              </div>
            )}

            <p className="text-xs text-ink-300 dark:text-ink-400 mt-auto pt-6">
              Tap card or press <kbd className="font-mono text-[10px] px-1.5 py-0.5 bg-cream-200 dark:bg-ink-700 rounded">Space</kbd> to flip
            </p>
          </div>

          {/* Back (answer) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-accent-50 dark:bg-accent-950/40 border border-accent-200 dark:border-accent-700 rounded-2xl p-6 sm:p-10 flex flex-col justify-center shadow-sm overflow-y-auto">
            <p className="text-xs uppercase tracking-widest text-accent-700 dark:text-accent-300 mb-4">
              Answer
            </p>
            <p className="font-serif text-base sm:text-lg text-ink-800 dark:text-cream-100 leading-relaxed">
              {card.a}
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          className="flex items-center gap-1 px-4 py-2.5 text-sm text-ink-600 dark:text-cream-100 hover:bg-cream-200 dark:hover:bg-ink-700 rounded-lg transition-colors"
        >
          <Icon name="ChevronLeft" size={16} /> Previous
        </button>
        <span className="text-xs text-ink-300 dark:text-ink-400 hidden sm:block">
          Use{' '}
          <kbd className="font-mono text-[10px] px-1.5 py-0.5 bg-cream-200 dark:bg-ink-700 rounded">
            ← →
          </kbd>{' '}
          to navigate
        </span>
        <button
          onClick={next}
          className="flex items-center gap-1 px-4 py-2.5 text-sm bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors"
        >
          Next <Icon name="ChevronRight" size={16} />
        </button>
      </div>
    </div>
  )
}
