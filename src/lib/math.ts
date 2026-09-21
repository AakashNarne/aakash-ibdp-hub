/**
 * Math rendering config, shared by the notes renderer and the AI chat.
 *
 * THE IMPORTANT SETTING is `singleDollarTextMath: false`.
 *
 * remark-math treats `$...$` as inline math by default. These notes are full
 * of currency — Global Politics ch1 has "makes India $10bn richer and China
 * $30bn richer" — and with single-dollar math on, everything between those two
 * dollar signs is swallowed and rendered as a formula. Requiring `$$...$$`
 * removes the ambiguity completely, and costs nothing: `$$x^2$$` mid-sentence
 * still renders inline.
 */
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import type { Options } from 'react-markdown'

// Derive the plugin element types from react-markdown itself rather than
// importing `unified` (a transitive dep we don't declare). Stays correct if
// react-markdown changes its signature.
type RemarkPlugin = NonNullable<Options['remarkPlugins']>[number]
type RehypePlugin = NonNullable<Options['rehypePlugins']>[number]

export const mathRemarkPlugin: RemarkPlugin = [remarkMath, { singleDollarTextMath: false }]

export const mathRehypePlugin: RehypePlugin = [
  rehypeKatex,
  {
    // A malformed formula should render in red where it sits, not throw and
    // blank the whole chapter.
    throwOnError: false,
    errorColor: '#b3543f',
    // Don't let note content reach \url, \href or \includegraphics.
    trust: false,
    strict: false,
    // Common shorthands so notes can stay readable in source form.
    macros: {
      '\\RR': '\\mathbb{R}',
      '\\dd': '\\mathrm{d}',
      '\\eul': '\\mathrm{e}',
    },
  },
]
