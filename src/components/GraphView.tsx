import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buildGraph, type ChapterRef } from '../lib/linkGraph'
import { subjects } from '../content'

/**
 * Chapter graph.
 *
 * Deliberately NOT a force simulation. A physics layout reshuffles every time
 * you open it, so you can never build a spatial memory of where anything is —
 * which defeats the point of a map. This is a deterministic radial layout:
 * each subject owns an arc, its chapters sit along that arc, and a chapter is
 * in the same place every single time.
 *
 * Colour is per subject and carries meaning, so each has a distinct hue with
 * a separate dark-theme value tuned for contrast on the ink background.
 */

const HUES: Record<string, { light: string; dark: string }> = {
  emerald: { light: '#2f8f6b', dark: '#5fc79c' },
  amber: { light: '#a8761f', dark: '#e0a94a' },
  blue: { light: '#38618c', dark: '#7fa1c2' },
  rose: { light: '#a8456a', dark: '#e58aa8' },
  orange: { light: '#b2622a', dark: '#eb9a63' },
  violet: { light: '#6b4d9e', dark: '#a98fd6' },
}
const FALLBACK = { light: '#4a463c', dark: '#a09b8b' }

const W = 760
const H = 560
const CX = W / 2
const CY = H / 2

type Placed = { ref: ChapterRef; x: number; y: number; r: number; hue: string }

export default function GraphView({ isDark }: { isDark: boolean }) {
  const navigate = useNavigate()
  const [hover, setHover] = useState<string | null>(null)
  const { nodes, edges } = useMemo(() => buildGraph(), [])

  const placed = useMemo<Placed[]>(() => {
    const out: Placed[] = []
    const ordered = subjects.filter((s) => s.chapters.length > 0)
    ordered.forEach((subject, si) => {
      const chapters = nodes.filter((n) => n.ref.subject.id === subject.id)
      // Each subject owns a slice of the circle; start at -90° so the first
      // subject sits at the top, which reads as "the beginning".
      const base = (si / ordered.length) * Math.PI * 2 - Math.PI / 2
      const spread = (Math.PI * 2) / ordered.length
      chapters.forEach((n, ci) => {
        const t = chapters.length === 1 ? 0.5 : ci / (chapters.length - 1)
        const angle = base + (t - 0.5) * spread * 0.62
        // Well-connected chapters sit slightly inward, toward the hub.
        const pull = Math.min(n.degree, 6) / 6
        const radius = 232 - pull * 58
        const hues = HUES[subject.color] ?? FALLBACK
        out.push({
          ref: n.ref,
          x: CX + Math.cos(angle) * radius,
          y: CY + Math.sin(angle) * radius * 0.86,
          r: 7 + Math.min(n.degree, 8) * 1.7,
          hue: isDark ? hues.dark : hues.light,
        })
      })
    })
    return out
  }, [nodes, isDark])

  const pos = useMemo(() => new Map(placed.map((p) => [p.ref.key, p])), [placed])

  /** Keys in the hovered node's immediate neighbourhood. */
  const lit = useMemo(() => {
    if (!hover) return null
    const s = new Set<string>([hover])
    for (const e of edges) {
      if (e.source === hover) s.add(e.target)
      if (e.target === hover) s.add(e.source)
    }
    return s
  }, [hover, edges])

  const edgeColor = isDark ? '#4a463c' : '#c9c5b8'
  const labelColor = isDark ? '#c9c5b8' : '#4a463c'

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto select-none"
        role="img"
        aria-label="Graph of connections between chapters"
      >
        {/* Edges first so nodes sit on top. Quadratic curves bowed toward the
            centre read as less tangled than straight chords. */}
        <g>
          {edges.map((e, i) => {
            const a = pos.get(e.source)
            const b = pos.get(e.target)
            if (!a || !b) return null
            const on = !lit || (lit.has(e.source) && lit.has(e.target))
            const mx = (a.x + b.x) / 2
            const my = (a.y + b.y) / 2
            const qx = mx + (CX - mx) * 0.38
            const qy = my + (CY - my) * 0.38
            return (
              <path
                key={i}
                d={`M ${a.x} ${a.y} Q ${qx} ${qy} ${b.x} ${b.y}`}
                fill="none"
                stroke={on && lit ? a.hue : edgeColor}
                strokeWidth={on && lit ? 1.8 : 1.1}
                opacity={on ? (lit ? 0.85 : 0.5) : 0.1}
                className="graph-anim"
              />
            )
          })}
        </g>

        <g>
          {placed.map((p) => {
            const on = !lit || lit.has(p.ref.key)
            const isHover = hover === p.ref.key
            return (
              <g
                key={p.ref.key}
                transform={`translate(${p.x} ${p.y})`}
                opacity={on ? 1 : 0.18}
                className="graph-anim cursor-pointer"
                onPointerEnter={() => setHover(p.ref.key)}
                onPointerLeave={() => setHover(null)}
                onPointerDown={() => navigate(p.ref.path)}
                role="link"
                aria-label={`${p.ref.subject.shortName}: ${p.ref.shortTitle}`}
              >
                <circle
                  r={p.r + (isHover ? 4 : 0)}
                  fill={p.hue}
                  fillOpacity={isHover ? 1 : 0.9}
                  stroke={isDark ? '#0d0c0a' : '#fdfcf9'}
                  strokeWidth={2}
                  className="graph-anim"
                />
                <text
                  y={p.r + 15}
                  textAnchor="middle"
                  fontSize={isHover ? 12 : 10.5}
                  fontWeight={isHover ? 600 : 500}
                  fill={isHover ? p.hue : labelColor}
                  className="graph-anim pointer-events-none"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.01em' }}
                >
                  {p.ref.shortTitle.length > 26
                    ? p.ref.shortTitle.slice(0, 24) + '…'
                    : p.ref.shortTitle}
                </text>
              </g>
            )
          })}
        </g>
      </svg>

      <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mt-4">
        {subjects
          .filter((s) => s.chapters.length > 0)
          .map((s) => {
            const hues = HUES[s.color] ?? FALLBACK
            return (
              <span key={s.id} className="flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-200">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: isDark ? hues.dark : hues.light }}
                />
                {s.shortName}
              </span>
            )
          })}
      </div>
      <p className="text-center text-xs text-ink-400 dark:text-ink-300 mt-3">
        Dot size is how connected a chapter is. Hover to isolate its neighbourhood, click to open it.
      </p>
    </div>
  )
}
