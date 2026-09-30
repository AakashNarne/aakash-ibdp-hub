/**
 * Obsidian callouts for react-markdown.
 *
 *   > [!tip] Title          → <div class="callout callout-tip">
 *   > [!question]- Answers  → collapsed <details>, like Obsidian's fold
 *   > [!note]+ Title        → <details open>
 *
 * Notes mirrored from the vault are written for Obsidian, so without this the
 * marker would show as literal "[!tip]" text inside a plain blockquote.
 * Hand-rolled mdast walk for the same reason as wikilink.ts: no extra deps.
 */
type MdNode = {
  type: string
  value?: string
  children?: MdNode[]
  data?: { hName?: string; hProperties?: Record<string, unknown> }
  [k: string]: unknown
}

const MARKER = /^\[!([A-Za-z-]+)\]([+-])?[ \t]*/

export function remarkCallout() {
  return (tree: MdNode) => walk(tree)
}

function walk(node: MdNode) {
  if (!Array.isArray(node.children)) return
  for (const c of node.children) walk(c)
  if (node.type === 'blockquote') transform(node)
}

function transform(bq: MdNode) {
  const first = bq.children?.[0]
  if (!first || first.type !== 'paragraph' || !first.children?.length) return
  const lead = first.children[0]
  if (lead.type !== 'text' || typeof lead.value !== 'string') return
  const m = MARKER.exec(lead.value)
  if (!m) return

  const kind = m[1].toLowerCase()
  const fold = m[2]
  lead.value = lead.value.slice(m[0].length)

  // Title = everything on the marker's line; the rest of that paragraph is body.
  const title: MdNode[] = []
  const rest: MdNode[] = []
  let inTitle = true
  for (const child of first.children) {
    if (!inTitle) { rest.push(child); continue }
    if (child.type === 'text' && typeof child.value === 'string' && child.value.includes('\n')) {
      const i = child.value.indexOf('\n')
      if (i > 0) title.push({ type: 'text', value: child.value.slice(0, i) })
      const after = child.value.slice(i + 1)
      if (after) rest.push({ type: 'text', value: after })
      inTitle = false
    } else if (child.type === 'break') {
      inTitle = false
    } else {
      title.push(child)
    }
  }
  const titleIsEmpty = title.every((n) => n.type === 'text' && !String(n.value ?? '').trim())
  if (titleIsEmpty) {
    title.length = 0
    title.push({ type: 'text', value: kind.charAt(0).toUpperCase() + kind.slice(1) })
  }

  const body: MdNode[] = []
  if (rest.length) body.push({ type: 'paragraph', children: rest })
  body.push(...(bq.children ?? []).slice(1))

  const collapsible = fold === '-' || fold === '+'
  bq.data = {
    hName: collapsible ? 'details' : 'div',
    hProperties: {
      className: ['callout', `callout-${kind}`],
      ...(fold === '+' ? { open: true } : {}),
    },
  }
  bq.children = [
    { type: 'calloutTitle', data: { hName: collapsible ? 'summary' : 'div', hProperties: { className: ['callout-title'] } }, children: title },
    { type: 'calloutBody', data: { hName: 'div', hProperties: { className: ['callout-body'] } }, children: body },
  ]
}

/** Strip a leading YAML frontmatter block; Obsidian hides it, so should we. */
export function stripFrontmatter(md: string): string {
  return md.replace(/^---\r?\n[\s\S]*?\r?\n---[ \t]*\r?\n?/, '')
}

/** H2 headings, in order, as plain labels (used for progress checkboxes). */
export function h2Sections(md: string): string[] {
  const out: string[] = []
  let fenced = false
  for (const line of md.split('\n')) {
    if (/^\s*```/.test(line)) fenced = !fenced
    if (fenced) continue
    const h = /^##\s+(.+?)\s*$/.exec(line)
    if (h) out.push(h[1].replace(/\$\$?([^$]+)\$\$?/g, '$1').replace(/[*_`]/g, '').replace(/\\/g, '').trim())
  }
  return out
}
