/**
 * The connective tissue of the hub.
 *
 * Everything here is derived from the notes themselves at module load, so
 * there is nothing to keep in sync by hand: write a [[link]] or bold a term in
 * a markdown file and the backlinks, graph and concept index all update.
 */
import { subjects } from '../content'
import type { Chapter, Subject } from '../content/types'
import { extractWikilinks, normalizeKey, headingSlug } from './wikilink'

export type ChapterRef = {
  key: string // "global-politics/ch2"
  path: string // "/subject/global-politics/chapter/ch2"
  subject: Subject
  chapter: Chapter
  /** Title with the "Chapter N:" prefix stripped, for compact display. */
  shortTitle: string
}

export type Backlink = {
  from: ChapterRef
  /** The sentence the link appeared in, so the mention has context. */
  context: string
}

export type Concept = {
  term: string
  /** Definition text, when the term appears in an "Exam-Ready Definitions" block. */
  definition?: string
  /** Where it is defined, if anywhere. */
  definedIn?: ChapterRef
  /** Everywhere it appears in bold. */
  mentions: { ref: ChapterRef; count: number }[]
  /** Distinct subjects it spans — the cross-subject terms are the useful ones. */
  subjectIds: string[]
}

export type SearchDoc = {
  ref: ChapterRef
  /** Section heading this block sits under, if any. */
  section?: string
  sectionSlug?: string
  text: string
}

// ---------------------------------------------------------------- chapters

function stripChapterPrefix(title: string): string {
  return title.replace(/^Chapter\s+\d+\s*[:—–-]\s*/i, '').trim()
}

export const chapterRefs: ChapterRef[] = subjects.flatMap((subject) =>
  subject.chapters.map((chapter) => ({
    key: `${subject.id}/${chapter.id}`,
    path: `/subject/${subject.id}/chapter/${chapter.id}`,
    subject,
    chapter,
    shortTitle: stripChapterPrefix(chapter.title),
  })),
)

export function refByKey(key: string): ChapterRef | undefined {
  return chapterRefs.find((r) => r.key === key)
}

// ---------------------------------------------------------------- resolver

/**
 * Every string that should route to a given chapter. Generous on purpose —
 * the cost of an extra alias is nil, the cost of a dead link is a note that
 * silently stops connecting.
 */
function aliasesFor(ref: ChapterRef): string[] {
  const { subject, chapter, shortTitle } = ref
  const num = chapter.title.match(/^Chapter\s+(\d+)/i)?.[1]
  const out = [
    chapter.title,
    shortTitle,
    ref.key,
    `${subject.shortName} ${shortTitle}`,
    `${subject.name} ${shortTitle}`,
  ]
  if (num) {
    out.push(`chapter ${num}`, `ch${num}`, `${subject.shortName} chapter ${num}`, `${subject.shortName} ch${num}`)
    // "Chapter 2 — Power" is how he actually writes them.
    out.push(`chapter ${num} ${shortTitle}`)
  }
  return out
}

/**
 * Ambiguous aliases (every subject has a "chapter 1") are resolved
 * subject-locally first, then globally. A bare "chapter 1" inside an Economics
 * note means Economics chapter 1.
 */
const globalAliases = new Map<string, ChapterRef[]>()
const subjectAliases = new Map<string, Map<string, ChapterRef>>()

for (const ref of chapterRefs) {
  const perSubject = subjectAliases.get(ref.subject.id) ?? new Map<string, ChapterRef>()
  for (const alias of aliasesFor(ref)) {
    const k = normalizeKey(alias)
    if (!k) continue
    if (!perSubject.has(k)) perSubject.set(k, ref)
    const list = globalAliases.get(k) ?? []
    if (!list.includes(ref)) list.push(ref)
    globalAliases.set(k, list)
  }
  subjectAliases.set(ref.subject.id, perSubject)
}

/** Subject-level targets, so [[Economics HL]] goes to the subject page. */
const subjectByAlias = new Map<string, Subject>()
for (const s of subjects) {
  for (const a of [s.name, s.shortName, s.id]) subjectByAlias.set(normalizeKey(a), s)
}

export type Resolution =
  | { kind: 'chapter'; ref: ChapterRef; hash?: string }
  | { kind: 'subject'; subject: Subject }
  | { kind: 'unresolved'; target: string }

export function resolveWikilink(target: string, fromSubjectId?: string, heading?: string): Resolution {
  const k = normalizeKey(target)
  const hash = heading ? headingSlug(heading) : undefined

  if (fromSubjectId) {
    const local = subjectAliases.get(fromSubjectId)?.get(k)
    if (local) return { kind: 'chapter', ref: local, hash }
  }
  const global = globalAliases.get(k)
  if (global?.length === 1) return { kind: 'chapter', ref: global[0], hash }
  if (global && global.length > 1) return { kind: 'chapter', ref: global[0], hash } // first registered wins

  const subj = subjectByAlias.get(k)
  if (subj) return { kind: 'subject', subject: subj }

  return { kind: 'unresolved', target }
}

// --------------------------------------------------------------- backlinks

/** Grab the sentence a link sits in, so a mention carries its meaning. */
function contextAround(text: string, index: number): string {
  const start = Math.max(0, text.lastIndexOf('.', index - 1) + 1)
  let end = text.indexOf('.', index)
  if (end === -1) end = Math.min(text.length, index + 160)
  return text
    .slice(start, end + 1)
    .replace(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g, (_, t, a) => a || t)
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const backlinkMap = new Map<string, Backlink[]>()
export const forwardLinks = new Map<string, Set<string>>()

for (const ref of chapterRefs) {
  const md = ref.chapter.notes
  const outgoing = new Set<string>()
  for (const link of extractWikilinks(md)) {
    const res = resolveWikilink(link.target, ref.subject.id, link.heading)
    if (res.kind !== 'chapter' || res.ref.key === ref.key) continue
    outgoing.add(res.ref.key)
    const idx = md.indexOf(`[[${link.target}`)
    const list = backlinkMap.get(res.ref.key) ?? []
    if (!list.some((b) => b.from.key === ref.key)) {
      list.push({ from: ref, context: idx >= 0 ? contextAround(md, idx) : '' })
    }
    backlinkMap.set(res.ref.key, list)
  }
  forwardLinks.set(ref.key, outgoing)
}

export function backlinksFor(key: string): Backlink[] {
  return backlinkMap.get(key) ?? []
}

export function outgoingFor(key: string): ChapterRef[] {
  return [...(forwardLinks.get(key) ?? [])].map(refByKey).filter((r): r is ChapterRef => !!r)
}

// ------------------------------------------------------------------- graph

export type GraphNode = {
  ref: ChapterRef
  degree: number
}
export type GraphEdge = { source: string; target: string }

export function buildGraph(): { nodes: GraphNode[]; edges: GraphEdge[] } {
  const edges: GraphEdge[] = []
  const degree = new Map<string, number>()
  for (const [from, targets] of forwardLinks) {
    for (const to of targets) {
      edges.push({ source: from, target: to })
      degree.set(from, (degree.get(from) ?? 0) + 1)
      degree.set(to, (degree.get(to) ?? 0) + 1)
    }
  }
  return {
    nodes: chapterRefs.map((ref) => ({ ref, degree: degree.get(ref.key) ?? 0 })),
    edges,
  }
}

// ----------------------------------------------------------- concept index

const BOLD = /\*\*([^*\n]{3,60})\*\*/g
/** Words that are bolded for emphasis, not because they are terms. */
const STOP = new Set([
  'note', 'important', 'warning', 'tip', 'example', 'remember', 'key', 'summary',
  'definition', 'definitions', 'exam tip', 'command term', 'command terms',
  'yes', 'no', 'not', 'never', 'always', 'hl only', 'sl only', 'hl', 'sl',
])

function cleanTerm(raw: string): string | null {
  // Trailing punctuation is formatting, not part of the term: "**Definition.**"
  // and "**Definition**" are the same word and neither is a concept.
  const t = raw
    .replace(/[\s:—–.,;!?-]+$/, '')
    .replace(/^[\s:—–.,;!?-]+/, '')
    .replace(/\s+/g, ' ')
    .trim()
  if (t.length < 3 || t.length > 60) return null
  if (STOP.has(t.toLowerCase())) return null
  if (/^[\d\W]+$/.test(t)) return null
  if (/^(section|chapter|paper|unit|topic|figure|table|step|part)\b/i.test(t)) return null
  // A single generic adjective bolded as a list label ("**Economic** — ...") is
  // a heading for a bullet, not a term worth indexing.
  if (/^(economic|political|social|cultural|environmental|technological|structural|legal|ethical|physical|global|local|national)$/i.test(t))
    return null
  // Link markup is not a term.
  if (/\[\[|\]\]|\|/.test(t)) return null
  // A term is a noun phrase, not a sentence.
  if (t.split(/\s+/).length > 5) return null
  if (/^(how|what|why|when|where|which|who|if|note that|remember)\b/i.test(t)) return null
  return t
}

/**
 * The "Connections" sections are navigation furniture, not subject content —
 * indexing their bolded links as concepts would fill the glossary with
 * chapter titles.
 */
function contentOnly(md: string): string {
  return md.replace(/\n##\s+Section[^\n]*—\s*Connections[\s\S]*?(?=\n##\s|$)/gi, '\n')
}

/** Sections whose headings say "definition" are where a term is authoritatively defined. */
function definitionBlocks(md: string): string[] {
  const out: string[] = []
  const lines = md.split('\n')
  let inBlock = false
  let buf: string[] = []
  for (const line of lines) {
    if (/^#{2,3}\s/.test(line)) {
      if (inBlock) { out.push(buf.join('\n')); buf = [] }
      inBlock = /definition/i.test(line)
      continue
    }
    if (inBlock) buf.push(line)
  }
  if (inBlock && buf.length) out.push(buf.join('\n'))
  return out
}

let conceptCache: Concept[] | null = null

export function conceptIndex(): Concept[] {
  if (conceptCache) return conceptCache
  const byTerm = new Map<string, Concept>()

  for (const ref of chapterRefs) {
    const md = contentOnly(ref.chapter.notes)
    const counts = new Map<string, number>()
    BOLD.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = BOLD.exec(md)) !== null) {
      const t = cleanTerm(m[1])
      if (!t) continue
      counts.set(t, (counts.get(t) ?? 0) + 1)
    }
    for (const [term, count] of counts) {
      const lc = term.toLowerCase()
      const existing = byTerm.get(lc)
      if (existing) {
        existing.mentions.push({ ref, count })
        if (!existing.subjectIds.includes(ref.subject.id)) existing.subjectIds.push(ref.subject.id)
      } else {
        byTerm.set(lc, { term, mentions: [{ ref, count }], subjectIds: [ref.subject.id] })
      }
    }

    // Attach definitions from "Exam-Ready Definitions"-style sections.
    for (const block of definitionBlocks(md)) {
      for (const line of block.split('\n')) {
        const dm = line.match(/\*\*([^*\n]{3,60})\*\*\s*[—–:-]\s*(.+)/)
        if (!dm) continue
        const t = cleanTerm(dm[1])
        if (!t) continue
        const c = byTerm.get(t.toLowerCase())
        if (c && !c.definition) {
          c.definition = dm[2].replace(/\s+/g, ' ').trim()
          c.definedIn = ref
        }
      }
    }
  }

  conceptCache = [...byTerm.values()]
    // A term bolded once in one chapter is emphasis, not a concept.
    .filter((c) => c.mentions.length > 1 || !!c.definition || c.mentions[0].count > 2)
    .sort((a, b) => {
      // A term with a definition pulled from an Exam-Ready block is a real
      // glossary entry; a bolded word is a guess. Defined terms lead.
      const defined = Number(!!b.definition) - Number(!!a.definition)
      if (defined) return defined
      const cross = b.subjectIds.length - a.subjectIds.length
      if (cross) return cross
      const chapters = b.mentions.length - a.mentions.length
      if (chapters) return chapters
      return a.term.localeCompare(b.term)
    })
  return conceptCache
}

// ------------------------------------------------------------ search index

let searchCache: SearchDoc[] | null = null

export function searchIndex(): SearchDoc[] {
  if (searchCache) return searchCache
  const docs: SearchDoc[] = []
  for (const ref of chapterRefs) {
    docs.push({ ref, text: `${ref.chapter.title} ${ref.chapter.subtitle ?? ''}` })
    let section: string | undefined
    let buf: string[] = []
    const flush = () => {
      const text = buf.join(' ').replace(/\s+/g, ' ').trim()
      if (text) docs.push({ ref, section, sectionSlug: section ? headingSlug(section) : undefined, text })
      buf = []
    }
    for (const line of ref.chapter.notes.split('\n')) {
      const h = line.match(/^#{2,3}\s+(.*)$/)
      if (h) { flush(); section = h[1].replace(/[*`]/g, '').trim(); continue }
      buf.push(line.replace(/[*_`>|#-]/g, ' '))
    }
    flush()
  }
  searchCache = docs
  return docs
}

export type SearchHit = {
  ref: ChapterRef
  section?: string
  sectionSlug?: string
  snippet: string
  score: number
}

export function search(query: string, limit = 12): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const terms = q.split(/\s+/).filter(Boolean)
  const hits: SearchHit[] = []

  for (const doc of searchIndex()) {
    const lc = doc.text.toLowerCase()
    let score = 0
    let firstAt = -1
    for (const t of terms) {
      const at = lc.indexOf(t)
      if (at === -1) { score = -1; break }
      score += 1
      if (firstAt === -1 || at < firstAt) firstAt = at
    }
    if (score < 0) continue
    // Heading and title matches outrank body matches.
    if (doc.section?.toLowerCase().includes(q)) score += 6
    if (doc.ref.chapter.title.toLowerCase().includes(q)) score += 8
    if (lc.includes(q)) score += 3
    const start = Math.max(0, firstAt - 60)
    hits.push({
      ref: doc.ref,
      section: doc.section,
      sectionSlug: doc.sectionSlug,
      snippet: (start > 0 ? '…' : '') + doc.text.slice(start, start + 180).trim() + '…',
      score,
    })
  }
  // One hit per section, best first.
  const seen = new Set<string>()
  return hits
    .sort((a, b) => b.score - a.score)
    .filter((h) => {
      const k = h.ref.key + '|' + (h.section ?? '')
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
    .slice(0, limit)
}

/** Stats for the graph page header and the AI context. */
export function graphStats() {
  const { nodes, edges } = buildGraph()
  const connected = nodes.filter((n) => n.degree > 0).length
  return {
    chapters: nodes.length,
    links: edges.length,
    connected,
    orphans: nodes.filter((n) => n.degree === 0).map((n) => n.ref),
    concepts: conceptIndex().length,
  }
}
