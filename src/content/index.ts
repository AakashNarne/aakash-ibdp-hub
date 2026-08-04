import type { Subject } from './types'
import { ch1Flashcards } from './economics/ch1-flashcards'
import ch1Notes from './economics/ch1-notes.md?raw'

/**
 * SUBJECTS AND CHAPTERS REGISTRY
 * ==============================
 * To add a new chapter:
 * 1. Add the notes markdown file to src/content/<subject>/chX-notes.md
 * 2. Add the flashcards to src/content/<subject>/chX-flashcards.ts
 * 3. Import both here and add to the subject's chapters array
 * 4. Update the "sections" array to match the H2 headings in your notes
 *
 * That's it. Commit and push — Vercel auto-deploys.
 */

export const subjects: Subject[] = [
  {
    id: 'economics',
    name: 'Economics HL',
    shortName: 'Economics',
    level: 'HL',
    color: 'emerald',
    icon: 'TrendingUp',
    description:
      'Micro, macro, international, and development economics. Textbook: Ellie Tragakes, 3rd ed. (2022).',
    chapters: [
      {
        id: 'ch1',
        title: 'Chapter 1: Introduction to Economics',
        subtitle: 'The foundations of economics — scarcity, choice, PPC, circular flow',
        notes: ch1Notes,
        sections: [
          'Section 1.1 — Key Concepts',
          'Section 1.2 — Central Economic Problem',
          'Section 1.3 — Production Possibilities Curve',
          'Section 1.4 — Circular Flow of Income',
          'Supplementary: Ten Principles of Economics',
          'Section Summary',
          'Exam-Ready Definitions',
        ],
        flashcards: ch1Flashcards,
        updated: '2026-08-04',
      },
    ],
  },
  {
    id: 'design-tech',
    name: 'Design Technology HL',
    shortName: 'Design Tech',
    level: 'HL',
    color: 'amber',
    icon: 'Wrench',
    description: 'Product design, materials, sustainability, and the human-tech interface.',
    chapters: [],
  },
  {
    id: 'maths',
    name: 'Maths AI HL',
    shortName: 'Maths AI',
    level: 'HL',
    color: 'blue',
    icon: 'Sigma',
    description:
      'Mathematics: Applications and Interpretation — statistics, calculus, modelling.',
    chapters: [],
  },
  {
    id: 'english',
    name: 'English A SL',
    shortName: 'English',
    level: 'SL',
    color: 'rose',
    icon: 'BookOpen',
    description: 'Language and Literature — texts, analysis, non-literary works.',
    chapters: [],
  },
  {
    id: 'hindi',
    name: 'Hindi B SL',
    shortName: 'Hindi',
    level: 'SL',
    color: 'orange',
    icon: 'Languages',
    description: 'Language acquisition — Hindi, five prescribed themes.',
    chapters: [],
  },
  {
    id: 'global-politics',
    name: 'Global Politics SL',
    shortName: 'Global Politics',
    level: 'SL',
    color: 'violet',
    icon: 'Globe',
    description: 'Power, sovereignty, human rights, development, peace, and conflict.',
    chapters: [],
  },
]

export function getSubject(id: string) {
  return subjects.find((s) => s.id === id)
}

export function getChapter(subjectId: string, chapterId: string) {
  const s = getSubject(subjectId)
  if (!s) return undefined
  return s.chapters.find((c) => c.id === chapterId)
}
