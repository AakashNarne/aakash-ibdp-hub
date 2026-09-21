import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { remarkWikilink, WIKI_SCHEME, headingSlug } from '../lib/wikilink'
import { mathRemarkPlugin, mathRehypePlugin } from '../lib/math'
import { resolveWikilink } from '../lib/linkGraph'

/** Flatten a React children tree to text, so headings can get stable ids. */
function textOf(node: React.ReactNode): string {
  if (node == null || node === false) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (typeof node === 'object' && 'props' in (node as never)) {
    return textOf((node as { props: { children?: React.ReactNode } }).props.children)
  }
  return ''
}

/**
 * Renders a chapter's markdown with Obsidian-style links wired up.
 *
 * A resolved link looks like a link. An unresolved one renders as a dotted
 * "stub" — Obsidian's grey-link convention — so a note that points somewhere
 * that does not exist yet is visibly a promise rather than silently broken.
 */
export default function MarkdownView({
  markdown,
  subjectId,
}: {
  markdown: string
  subjectId?: string
}) {
  const components = useMemo(
    () => ({
      a({ href, children, node: _node, ...rest }: React.ComponentPropsWithoutRef<'a'> & {
        href?: string
        node?: unknown
      }) {
        if (!href?.startsWith(WIKI_SCHEME)) {
          const external = href?.startsWith('http')
          return (
            <a
              href={href}
              {...rest}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {children}
            </a>
          )
        }

        const raw = href.slice(WIKI_SCHEME.length)
        const [targetPart, headingPart] = raw.split('#')
        const target = decodeURIComponent(targetPart)
        const heading = headingPart ? decodeURIComponent(headingPart) : undefined
        const res = resolveWikilink(target, subjectId, heading)

        if (res.kind === 'unresolved') {
          return (
            <span className="wikilink-stub" title={`No note yet for "${target}"`}>
              {children}
            </span>
          )
        }

        const to =
          res.kind === 'subject'
            ? `/subject/${res.subject.id}`
            : res.ref.path + (res.hash ? `#${res.hash}` : '')

        const title =
          res.kind === 'subject'
            ? res.subject.name
            : `${res.ref.subject.shortName} · ${res.ref.chapter.title}`

        return (
          <Link to={to} className="wikilink" title={title}>
            {children}
          </Link>
        )
      },

      // Stable ids so [[Chapter#Heading]] and the search palette can deep-link.
      h2({ children, node: _n2, ...rest }: React.ComponentPropsWithoutRef<'h2'> & { node?: unknown }) {
        return (
          <h2 id={headingSlug(textOf(children))} {...rest}>
            {children}
          </h2>
        )
      },
      h3({ children, node: _n3, ...rest }: React.ComponentPropsWithoutRef<'h3'> & { node?: unknown }) {
        return (
          <h3 id={headingSlug(textOf(children))} {...rest}>
            {children}
          </h3>
        )
      },
      // Wide tables are the one thing that breaks the reading column on a
      // phone; let them scroll rather than squeezing the prose.
      table({ children, node: _n4, ...rest }: React.ComponentPropsWithoutRef<'table'> & { node?: unknown }) {
        return (
          <div className="table-scroll">
            <table {...rest}>{children}</table>
          </div>
        )
      },
    }),
    [subjectId],
  )

  return (
    <ReactMarkdown
      // Math runs before the wikilink pass so a [[ inside a formula is never
      // touched, and GFM runs first so tables still work.
      remarkPlugins={[remarkGfm, mathRemarkPlugin, remarkWikilink]}
      rehypePlugins={[mathRehypePlugin]}
      components={components}
      // react-markdown's default urlTransform allows only http/https/mailto/tel
      // and blanks anything else — which silently emptied every wiki: href.
      // Let our internal scheme through; everything else keeps the default
      // sanitising behaviour.
      urlTransform={(url) => (url.startsWith(WIKI_SCHEME) ? url : defaultUrlTransform(url))}
    >
      {markdown}
    </ReactMarkdown>
  )
}
