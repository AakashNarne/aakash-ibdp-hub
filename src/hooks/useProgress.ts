import { useCallback, useEffect, useState } from 'react'
import { subjects } from '../content'

const STORAGE_KEY = 'aakash-ibdp-progress-v1'

/** Map: `subjectId::chapterId::sectionIndex` → true */
type ProgressMap = Record<string, boolean>

function loadProgress(): ProgressMap {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ProgressMap) : {}
  } catch {
    return {}
  }
}

function saveProgress(p: ProgressMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  } catch {
    /* ignore quota errors */
  }
}

const listeners = new Set<(p: ProgressMap) => void>()
let progressState: ProgressMap = loadProgress()

function setState(p: ProgressMap) {
  progressState = p
  saveProgress(p)
  listeners.forEach((fn) => fn(p))
}

export function useProgress() {
  const [state, setLocalState] = useState<ProgressMap>(progressState)

  useEffect(() => {
    listeners.add(setLocalState)
    return () => {
      listeners.delete(setLocalState)
    }
  }, [])

  const key = (subjectId: string, chapterId: string, sectionIndex: number) =>
    `${subjectId}::${chapterId}::${sectionIndex}`

  const isDone = useCallback(
    (subjectId: string, chapterId: string, sectionIndex: number) =>
      !!state[key(subjectId, chapterId, sectionIndex)],
    [state]
  )

  const toggle = useCallback(
    (subjectId: string, chapterId: string, sectionIndex: number) => {
      const k = key(subjectId, chapterId, sectionIndex)
      const next = { ...state }
      if (next[k]) delete next[k]
      else next[k] = true
      setState(next)
    },
    [state]
  )

  const chapterPercent = useCallback(
    (subjectId: string, chapterId: string, totalSections: number) => {
      if (totalSections === 0) return 0
      let done = 0
      for (let i = 0; i < totalSections; i++) {
        if (state[key(subjectId, chapterId, i)]) done++
      }
      return Math.round((done / totalSections) * 100)
    },
    [state]
  )

  const subjectPercent = useCallback(
    (subjectId: string) => {
      const s = subjects.find((s) => s.id === subjectId)
      if (!s || s.chapters.length === 0) return 0
      let totalSections = 0
      let done = 0
      for (const ch of s.chapters) {
        for (let i = 0; i < ch.sections.length; i++) {
          totalSections++
          if (state[key(subjectId, ch.id, i)]) done++
        }
      }
      if (totalSections === 0) return 0
      return Math.round((done / totalSections) * 100)
    },
    [state]
  )

  const resetChapter = useCallback(
    (subjectId: string, chapterId: string) => {
      const next = { ...state }
      Object.keys(next).forEach((k) => {
        if (k.startsWith(`${subjectId}::${chapterId}::`)) delete next[k]
      })
      setState(next)
    },
    [state]
  )

  return { isDone, toggle, chapterPercent, subjectPercent, resetChapter }
}

/** Dark mode toggle */
const THEME_KEY = 'aakash-ibdp-theme'
export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem(THEME_KEY)
    if (stored) return stored === 'dark'
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem(THEME_KEY, 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem(THEME_KEY, 'light')
    }
  }, [isDark])

  return { isDark, toggle: () => setIsDark((v) => !v) }
}
