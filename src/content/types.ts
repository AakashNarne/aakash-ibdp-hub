export type Flashcard = {
  q: string
  a: string
  hint?: string
}

export type Chapter = {
  id: string
  title: string
  subtitle?: string
  /** Raw markdown content. Use ?raw import from a .md file. */
  notes: string
  /** Section titles for progress checkboxes. Should map roughly to H2 headings in notes. */
  sections: string[]
  flashcards: Flashcard[]
  /** ISO date string, used for sorting/recency. Optional. */
  updated?: string
}

export type Subject = {
  id: string
  name: string
  shortName: string
  level: 'HL' | 'SL'
  color: string // Tailwind color name — used for accents on the subject card
  icon: string  // Lucide icon name (see components/Icon.tsx for supported list)
  description: string
  chapters: Chapter[]
}
