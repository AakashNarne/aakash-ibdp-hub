import { useEffect, useState } from 'react'

/**
 * Tracks the current text selection on the page.
 * Returns { text, rect } when the user has an active non-empty selection
 * *inside an element marked with `data-selectable="true"`*, and null otherwise.
 *
 * The bubble component reads this to decide where to render itself.
 */

export type SelectionState = {
  text: string
  /** Client rect of the selection end — used to anchor the "Ask AI" bubble. */
  rect: { top: number; left: number; bottom: number; right: number }
}

const MIN_LENGTH = 3

export function useTextSelection(): SelectionState | null {
  const [state, setState] = useState<SelectionState | null>(null)

  useEffect(() => {
    let raf = 0

    const compute = () => {
      const sel = window.getSelection?.()
      if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
        setState(null)
        return
      }
      const text = sel.toString().trim()
      if (text.length < MIN_LENGTH) {
        setState(null)
        return
      }
      // Only trigger inside an opt-in region (the notes article).
      const range = sel.getRangeAt(0)
      const anchor = range.commonAncestorContainer
      const el =
        anchor.nodeType === Node.ELEMENT_NODE
          ? (anchor as Element)
          : anchor.parentElement
      if (!el || !el.closest('[data-selectable="true"]')) {
        setState(null)
        return
      }
      const rect = range.getBoundingClientRect()
      setState({
        text,
        rect: {
          top: rect.top,
          left: rect.left,
          bottom: rect.bottom,
          right: rect.right,
        },
      })
    }

    const onSelectionChange = () => {
      cancelAnimationFrame(raf)
      // Debounce to the next frame — selectionchange fires very frequently.
      raf = requestAnimationFrame(compute)
    }

    document.addEventListener('selectionchange', onSelectionChange)
    // Also recompute on scroll/resize so the bubble stays anchored.
    window.addEventListener('scroll', onSelectionChange, true)
    window.addEventListener('resize', onSelectionChange)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('selectionchange', onSelectionChange)
      window.removeEventListener('scroll', onSelectionChange, true)
      window.removeEventListener('resize', onSelectionChange)
    }
  }, [])

  return state
}

/** Clears the current browser selection. */
export function clearSelection() {
  window.getSelection?.()?.removeAllRanges()
}
