/**
 * Obsidian-style [[wikilinks]] for react-markdown.
 *
 * Aakash writes his notes as if they were Obsidian notes, so the brackets were
 * already in the markdown — they were just rendering as literal text, because
 * remark-gfm has no idea what they mean. This turns them into real links.
 *
 * Supported forms, matching Obsidian:
 *   [[Chapter 2: Power]]              → link, label is the target
 *   [[Chapter 2: Power|hard power]]   → link, label is the alias
 *   [[Chapter 2: Power#Soft power]]   → link to a heading inside the chapter
 *   [[Some Future Note]]              → unresolved: rendered as a "stub",
 *                                        styled like Obsidian's grey links
 *
 * Implementation note: this hand-rolls the mdast walk rather than importing
 * unist-util-visit, which is only present as a transitive dependency of
 * react-markdown and is not in package.json. One fewer thing to break.
 */

/** Internal href scheme; MarkdownView intercepts these and resolves them. */
export const WIKI_SCHEME = 'wiki:'

type MdNode = {
  type: string
  value?: string
  url?: string
  children?: MdNode[]
  [k: string]: unknown
}

const PATTERN = /\[\[([^\]|#]+)(?:#([^\]|]+))?(?:\|([^\]]+))?\]\]/g

/**
 * remark plugin. Splits text nodes on [[...]] and emits link nodes carrying a
 * `wiki:` url. Skips anything already inside a link or inline code, so a
 * literal `[[x]]` in a code span stays literal.
 */
export function remarkWikilink() {
  return (tree: MdNode) => {
    walk(tree, null)
  }

  function walk(node: MdNode, parent: MdNode | null) {
    if (node.type === 'link' || node.type === 'inlineCode' || node.type === 'code') return
    if (node.type === 'text' && parent && typeof node.value === 'string') return // handled by parent
    if (!Array.isArray(node.children)) return

    const out: MdNode[] = []
    let changed = false

    for (const child of node.children) {
      if (child.type === 'text' && typeof child.value === 'string' && child.value.includes('[[')) {
        const pieces = splitText(child.value)
        if (pieces.length > 1 || pieces[0]?.type !== 'text') changed = true
        out.push(...pieces)
      } else {
        walk(child, node)
        out.push(child)
      }
    }
    if (changed) node.children = out
  }

  function splitText(value: string): MdNode[] {
    const out: MdNode[] = []
    let last = 0
    PATTERN.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = PATTERN.exec(value)) !== null) {
      const [full, rawTarget, rawHeading, rawAlias] = m
      if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) })
      const target = rawTarget.trim()
      const heading = rawHeading?.trim()
      const label = (rawAlias ?? rawHeading ?? rawTarget).trim()
      out.push({
        type: 'link',
        url: WIKI_SCHEME + encodeURIComponent(target) + (heading ? '#' + encodeURIComponent(heading) : ''),
        children: [{ type: 'text', value: label }],
      })
      last = m.index + full.length
    }
    if (last < value.length) out.push({ type: 'text', value: value.slice(last) })
    return out.length ? out : [{ type: 'text', value }]
  }
}

/** Pull every wikilink target out of a markdown string, for graph building. */
export function extractWikilinks(markdown: string): { target: string; heading?: string; alias?: string }[] {
  const out: { target: string; heading?: string; alias?: string }[] = []
  PATTERN.lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = PATTERN.exec(markdown)) !== null) {
    out.push({
      target: m[1].trim(),
      heading: m[2]?.trim(),
      alias: m[3]?.trim(),
    })
  }
  return out
}

/**
 * Normalise a link target so that the way Aakash types it and the way the
 * chapter is titled resolve to the same key.
 *
 * Real example from his notes: the registry says "Chapter 2: Power" and the
 * notes say "[[chapter 2 — Power]]". Case, and the colon vs em-dash, are the
 * only differences — so both are flattened away.
 */
export function normalizeKey(s: string): string {
  return s
    .toLowerCase()
    .replace(/[—–-]/g, ' ')
    .replace(/[:.,''"`()[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Turn a heading into the slug react-markdown/rehype would produce. */
export function headingSlug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}
