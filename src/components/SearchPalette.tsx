import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { search, type SearchHit } from '../lib/linkGraph'
import { Spring, SPRING, prefersReducedMotion } from '../lib/spring'

/**
 * Cmd-K palette: the "get to specific info instantly" part.
 *
 * Motion notes (Apple, Designing Fluid Interfaces):
 *  - The surface materialises — blur radius and scale animate together — so it
 *    reads as a real pane of glass arriving, not an opacity fade.
 *  - A spring drives it, so hitting Escape mid-open reverses from wherever it
 *    actually is on screen rather than jumping to the end state first.
 *  - Rows highlight on pointer-DOWN, not on click, because waiting for
 *    mouse-up to acknowledge a press feels dead.
 *  - prefers-reduced-motion drops to a plain cross-fade with no transform.
 */
export default function SearchPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const navigate = useNavigate()

  const scrimRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const springRef = useRef<Spring | null>(null)
  const [mounted, setMounted] = useState(false)

  const hits: SearchHit[] = useMemo(() => (query ? search(query, 12) : []), [query])

  // --- the spring that drives presentation -------------------------------
  useEffect(() => {
    const reduced = prefersReducedMotion()
    const apply = (p: number) => {
      const scrim = scrimRef.current
      const panel = panelRef.current
      if (scrim) scrim.style.opacity = String(p)
      if (panel) {
        panel.style.opacity = String(Math.min(1, p * 1.3))
        if (!reduced) {
          // Scale and blur move together: the material arrives, it does not fade in.
          panel.style.transform = `scale(${0.96 + 0.04 * p}) translateY(${(1 - p) * 8}px)`
          panel.style.backdropFilter = `blur(${20 * p}px) saturate(180%)`
        }
      }
      if (p < 0.001) setMounted(false)
    }
    springRef.current = new Spring(0, apply, SPRING.ui)
    return () => springRef.current?.stop()
  }, [])

  useEffect(() => {
    const s = springRef.current
    if (!s) return
    if (open) {
      setMounted(true)
      // Next frame, so the element exists before we animate it in.
      requestAnimationFrame(() =>
        prefersReducedMotion() ? s.snapTo(1) : s.setTarget(1, SPRING.ui),
      )
    } else {
      prefersReducedMotion() ? s.snapTo(0) : s.setTarget(0, SPRING.ui)
    }
  }, [open])

  // --- keyboard ----------------------------------------------------------
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
        return
      }
      if (!open) return
      if (e.key === 'Escape') { e.preventDefault(); close() }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(i + 1, hits.length - 1)) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)) }
      if (e.key === 'Enter' && hits[active]) { e.preventDefault(); go(hits[active]) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  useEffect(() => { setActive(0) }, [query])

  // Let anything on the page open the palette: <button data-open-search>
  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener('open-search', onOpen)
    return () => window.removeEventListener('open-search', onOpen)
  }, [])

  function go(hit: SearchHit) {
    close()
    navigate(hit.ref.path + (hit.sectionSlug ? `#${hit.sectionSlug}` : ''))
  }

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Search notes">
      {/* Dimming scrim: this is a modal task, so the background recedes. */}
      <div
        ref={scrimRef}
        onPointerDown={close}
        className="absolute inset-0 bg-ink-900/40 dark:bg-ink-900/60"
        style={{ opacity: 0 }}
      />
      <div className="absolute inset-x-0 top-[12vh] flex justify-center px-4">
        <div
          ref={panelRef}
          style={{ opacity: 0, transform: 'scale(0.96)', transformOrigin: 'top center' }}
          className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/40 dark:border-ink-600/60
                     bg-cream-50/80 dark:bg-ink-800/80 shadow-2xl shadow-ink-900/20"
        >
          <div className="flex items-center gap-3 px-4 border-b border-ink-100/70 dark:border-ink-700/70">
            <Icon name="Search" size={17} className="text-ink-400 dark:text-ink-300 shrink-0" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search every note…"
              className="flex-1 bg-transparent py-4 text-[15px] outline-none
                         text-ink-900 dark:text-cream-50 placeholder:text-ink-300 dark:placeholder:text-ink-400"
            />
            <kbd className="hidden sm:block font-mono text-[10px] text-ink-400 dark:text-ink-300 border border-ink-200 dark:border-ink-600 rounded px-1.5 py-0.5">
              esc
            </kbd>
          </div>

          <div className="max-h-[52vh] overflow-y-auto overscroll-contain">
            {query.length < 2 && (
              <p className="px-4 py-8 text-center text-sm text-ink-400 dark:text-ink-300">
                Type to search across all your chapters.
              </p>
            )}
            {query.length >= 2 && hits.length === 0 && (
              <p className="px-4 py-8 text-center text-sm text-ink-400 dark:text-ink-300">
                Nothing for “{query}”.
              </p>
            )}
            {hits.map((hit, i) => (
              <button
                key={hit.ref.key + (hit.section ?? '') + i}
                onPointerEnter={() => setActive(i)}
                onPointerDown={(e) => { e.preventDefault(); go(hit) }}
                className={`w-full text-left px-4 py-3 border-b border-ink-100/50 dark:border-ink-700/50 last:border-0
                            transition-colors duration-100
                            ${i === active ? 'bg-accent-500/10 dark:bg-accent-400/10' : ''}`}
              >
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-ink-400 dark:text-ink-300">
                    {hit.ref.subject.shortName}
                  </span>
                  <span className="text-sm font-medium text-ink-900 dark:text-cream-50 truncate">
                    {hit.section ?? hit.ref.shortTitle}
                  </span>
                </div>
                <p className="text-[12.5px] leading-snug text-ink-500 dark:text-ink-200 line-clamp-2">
                  {hit.snippet}
                </p>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 px-4 py-2 border-t border-ink-100/70 dark:border-ink-700/70
                          text-[11px] text-ink-400 dark:text-ink-300">
            <span className="flex items-center gap-1"><kbd className="font-mono">↑↓</kbd> navigate</span>
            <span className="flex items-center gap-1"><kbd className="font-mono">↵</kbd> open</span>
            <span className="ml-auto font-mono">{hits.length || ''}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
