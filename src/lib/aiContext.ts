/**
 * Builds the system prompt that grounds the AI in whatever the user is
 * currently studying. The rule is: the model should behave like a tutor who
 * has already read the same textbook the user is reading.
 */
import type { Chapter, Subject } from '../content/types'
import { subjects } from '../content'

export type RouteContext =
  | { kind: 'home' }
  | { kind: 'subject'; subject: Subject }
  | {
      kind: 'chapter'
      subject: Subject
      chapter: Chapter
      /** Section titles the user has ticked as done. */
      completedSections: string[]
      /** Section titles the user has not yet ticked. */
      remainingSections: string[]
    }

/**
 * A compact overview of every subject registered in the app, one line each.
 * Cheap to include in every system prompt so the model always knows the
 * user's overall study landscape.
 */
function overallOverview(): string {
  return subjects
    .map((s) => {
      const chCount = s.chapters.length
      return `• ${s.name} (${s.level}) — ${chCount} chapter${chCount === 1 ? '' : 's'} loaded`
    })
    .join('\n')
}

export function buildSystemPrompt(ctx: RouteContext): string {
  const preamble = `You are an expert IB Diploma Programme tutor helping Aakash Narne (DP1) study. Aakash is preparing for his IB exams. Be precise, use IB terminology and command terms (state, describe, explain, evaluate, analyse) where appropriate, and reference the specific IB syllabus he is on when relevant.

Style:
- Rigorous but conversational. Assume Aakash is a bright DP1 student — not a beginner, not a specialist.
- Show working when solving problems. Use LaTeX-free notation (superscripts as ^, roots as √) so it renders in plain text.
- If Aakash's question is ambiguous, ask ONE clarifying question. Otherwise answer directly.
- If you disagree with something in the notes, say so and explain why. The notes may contain student-level simplifications.
- Give concrete examples from real markets, real experiments, or real texts — not abstract "consider the case where…" filler.

Aakash's subjects currently loaded in his study hub:
${overallOverview()}
`

  if (ctx.kind === 'home') {
    return preamble + `\nContext: Aakash is on the study-hub home page (no specific chapter selected). Answer general questions across any of his subjects.`
  }

  if (ctx.kind === 'subject') {
    const chList = ctx.subject.chapters
      .map((c) => `  - ${c.title}`)
      .join('\n') || '  (no chapters loaded yet)'
    return preamble + `\nContext: Aakash is browsing ${ctx.subject.name}.
Chapters available:
${chList}
`
  }

  // chapter context
  const done = ctx.completedSections.length
    ? ctx.completedSections.map((s) => `  ✓ ${s}`).join('\n')
    : '  (none yet)'
  const todo = ctx.remainingSections.length
    ? ctx.remainingSections.map((s) => `  · ${s}`).join('\n')
    : '  (all sections marked complete)'

  return (
    preamble +
    `
Context: Aakash is currently reading:
  Subject: ${ctx.subject.name}
  Chapter: ${ctx.chapter.title}
  ${ctx.chapter.subtitle ? `Subtitle: ${ctx.chapter.subtitle}` : ''}

Sections he has marked as understood:
${done}

Sections still to work through:
${todo}

Here is the full content of the chapter he's currently on — treat this as the shared context you both have. If Aakash quotes a snippet from it, help him understand or extend that part specifically.

--- BEGIN CHAPTER NOTES ---
${ctx.chapter.notes}
--- END CHAPTER NOTES ---
`
  )
}

/**
 * Wraps user input with a quoted-selection block when the chat was opened
 * from a text-selection bubble. Keeps the LLM aware of *which* passage the
 * follow-up refers to.
 */
export function formatUserTurn(input: string, selection?: string): string {
  const trimmed = input.trim()
  if (!selection || !selection.trim()) return trimmed
  return `From the chapter notes I've selected this passage:\n\n> ${selection
    .trim()
    .split('\n')
    .map((l) => `> ${l}`)
    .join('\n')
    .replace(/^> > /gm, '> ')}\n\n${trimmed}`
}
