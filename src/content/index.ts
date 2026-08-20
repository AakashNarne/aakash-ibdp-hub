import type { Subject } from './types'
import { ch1Flashcards } from './economics/ch1-flashcards'
import ch1Notes from './economics/ch1-notes.md?raw'
import { ch2Flashcards } from './economics/ch2-flashcards'
import ch2Notes from './economics/ch2-notes.md?raw'
import { ch1Flashcards as mathsCh1Flashcards } from './maths/ch1-flashcards'
import mathsCh1Notes from './maths/ch1-notes.md?raw'
import { ch1Flashcards as gpCh1Flashcards } from './global-politics/ch1-flashcards'
import gpCh1Notes from './global-politics/ch1-notes.md?raw'

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
      {
        id: 'ch2',
        title: 'Chapter 2: Demand and Supply',
        subtitle: 'Competitive markets, price mechanism, allocative efficiency, behavioural critique',
        notes: ch2Notes,
        sections: [
          'Section 2.1 — Introduction to Competitive Markets',
          'Section 2.2 — Demand',
          'Section 2.3 — Supply',
          'Section 2.4 — Market Equilibrium',
          'Section 2.5 — Efficiency in Competitive Markets',
          'Section 2.6 — The Three Roles of the Price Mechanism',
          'Section 2.7 — HL Extension: Critique of the Consumer/Producer Model',
          'Section 2.8 — Diagram Checklist',
          'Section 2.9 — Chapter Summary',
          'Section 2.10 — Exam-Ready Definitions',
          'Section 2.11 — Common Exam Traps',
          'Section 2.12 — Sources Cited',
        ],
        flashcards: ch2Flashcards,
        updated: '2026-08-10',
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
    chapters: [
      {
        id: 'ch1',
        title: 'Chapter 1: Functions',
        subtitle: 'Quadratic, rational, composite, inverse, exponential, and logarithmic functions',
        notes: mathsCh1Notes,
        sections: [
          'Section 1.1 — Function Basics (Domain, Range, Notation)',
          'Section 1.2 — Quadratic Functions',
          'Section 1.3 — Rational Functions',
          'Section 1.4 — Composite Functions',
          'Section 1.5 — Inverse Functions',
          'Section 1.6 — Exponential Functions',
          'Section 1.7 — Logarithmic Functions',
          'Section 1.8 — Combining the Families: Transformations',
          'Section 1.9 — Summary Table (The Six Families at a Glance)',
          'Section 1.10 — Exam-Ready Definitions',
          'Section 1.11 — Common Exam Traps (Learn These Now)',
          'Section 1.12 — GDC Tips (TI-84 / TI-Nspire / Casio)',
        ],
        flashcards: mathsCh1Flashcards,
        updated: '2026-08-07',
      },
    ],
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
    chapters: [
      {
        id: 'ch1',
        title: 'Chapter 1: Foundations of Global Politics',
        subtitle: 'Core key concepts (power, sovereignty, legitimacy, interdependence), theoretical lenses, thematic studies, assessment structure',
        notes: gpCh1Notes,
        sections: [
          'Section 1.1 — What Global Politics Is (and Isn\'t)',
          'Section 1.2 — The Four Core Key Concepts',
          'Section 1.3 — The Three Thematic Studies',
          'Section 1.4 — Levels of Analysis',
          'Section 1.5 — Theoretical Lenses',
          'Section 1.6 — Stakeholder Analysis Framework',
          'Section 1.7 — Claims and Counterclaims: the Grey Areas Rule',
          'Section 1.8 — Assessment Structure (SL)',
          'Section 1.9 — Common Exam Traps',
          'Section 1.10 — Exam-Ready Definitions',
          'Section 1.11 — Diagnostic Prompts to Test Yourself',
          'Section 1.12 — Sources',
        ],
        flashcards: gpCh1Flashcards,
        updated: '2026-08-10',
      },
    ],
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
