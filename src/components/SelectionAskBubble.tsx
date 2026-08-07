import { useEffect, useRef, useState } from 'react'
import { useTextSelection } from '../hooks/useTextSelection'
import { useAIChat } from '../hooks/useAIChat'
import Icon from './Icon'

/**
 * A small floating "Ask AI" bubble that appears near any text the user
 * highlights inside a `data-selectable="true"` region (e.g. the notes
 * article on ChapterPage). Modelled on the Claude desktop app's selection
 * bubble.
 *
 * Clicking the bubble opens the chat panel with the selected text seeded
 * as context.
 */
export default function SelectionAskBubble() {
  const selection = useTextSelection()
  const chat = useAIChat()
  const [visible, setVisible] = useState(false)
  const timer = useRef<number | null>(null)

  // Small fade-in delay so the bubble doesn't jitter while the user is
  // still dragging the mouse to extend the selection.
  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current)
    if (selection) {
      timer.current = window.setTimeout(() => setVisible(true), 120)
    } else {
      setVisible(false)
    }
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [selection])

  if (!selection || !visible) return null

  // Anchor the bubble just below the end of the selection, but keep it on
  // screen if the selection is near the right/bottom edge.
  const BUBBLE_W = 96
  const BUBBLE_H = 32
  const margin = 8
  let top = selection.rect.bottom + margin
  let left = selection.rect.right - BUBBLE_W / 2

  const vw = window.innerWidth
  const vh = window.innerHeight
  if (left + BUBBLE_W > vw - 8) left = vw - BUBBLE_W - 8
  if (left < 8) left = 8
  if (top + BUBBLE_H > vh - 8) {
    // Not enough room below — flip above.
    top = selection.rect.top - BUBBLE_H - margin
  }

  const openWithSelection = () => {
    // Snapshot text before browser clears the selection on click.
    const text = selection.text
    chat.open(text)
  }

  return (
    <button
      onMouseDown={(e) => {
        // Prevent losing the selection when the button steals focus.
        e.preventDefault()
      }}
      onClick={openWithSelection}
      className="fixed z-50 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-ink-900 text-cream-50 shadow-lg text-xs font-medium hover:bg-ink-800 active:scale-95 transition-all animate-fadein"
      style={{ top, left, width: BUBBLE_W, height: BUBBLE_H }}
    >
      <Icon name="Sparkles" size={13} />
      Ask AI
    </button>
  )
}
