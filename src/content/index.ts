import type { Subject } from './types'
import { ch1Flashcards } from './economics/ch1-flashcards'
import ch1Notes from './economics/ch1-notes.md?raw'
import { ch2Flashcards } from './economics/ch2-flashcards'
import ch2Notes from './economics/ch2-notes.md?raw'
import { ch1Flashcards as mathsCh1Flashcards } from './maths/ch1-flashcards'
import mathsCh1Notes from './maths/ch1-notes.md?raw'
import { ch2Flashcards as mathsCh2Flashcards } from './maths/ch2-flashcards'
import mathsCh2Notes from './maths/ch2-notes.md?raw'
import { ch1Flashcards as gpCh1Flashcards } from './global-politics/ch1-flashcards'
import gpCh1Notes from './global-politics/ch1-notes.md?raw'
import { ch2Flashcards as gpCh2Flashcards } from './global-politics/ch2-flashcards'
import gpCh2Notes from './global-politics/ch2-notes.md?raw'
import { ch3Flashcards as gpCh3Flashcards } from './global-politics/ch3-flashcards'
import gpCh3Notes from './global-politics/ch3-notes.md?raw'
import { ch4Flashcards as gpCh4Flashcards } from './global-politics/ch4-flashcards'
import gpCh4Notes from './global-politics/ch4-notes.md?raw'
import { ch5Flashcards as gpCh5Flashcards } from './global-politics/ch5-flashcards'
import gpCh5Notes from './global-politics/ch5-notes.md?raw'
import { ch1Flashcards as englishCh1Flashcards } from './english/ch1-flashcards'
import englishCh1Notes from './english/ch1-notes.md?raw'
import { ch1Flashcards as hindiCh1Flashcards } from './hindi/ch1-flashcards'
import hindiCh1Notes from './hindi/ch1-notes.md?raw'
import { ch1Flashcards as dtCh1Flashcards } from './design-tech/ch1-flashcards'
import dtCh1Notes from './design-tech/ch1-notes.md?raw'

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
    name: 'Design Technology SL',
    shortName: 'Design Tech',
    level: 'SL',
    color: 'amber',
    icon: 'Wrench',
    description: 'Product design, materials, sustainability, and the human-tech interface.',
    chapters: [
      {
        id: 'ch1',
        title: 'Chapter 1: SA1 Focus — Ergonomics, UCD, and Designer Responsibility',
        subtitle: 'A 1.1 Ergonomics · B 1.1 User-Centred Design · C 1.1 Responsibility of the Designer',
        notes: dtCh1Notes,
        sections: [
          'Section 1.1 — How this chapter maps to the book',
          'Section 1.2 — A 1.1.1 Ergonomics',
          'Section 1.3 — A 1.1.2 Anthropometrics',
          'Section 1.4 — A 1.1.3 Percentiles',
          'Section 1.5 — A 1.1.4 Product Sizing',
          'Section 1.6 — A 1.1.5 Sizing Considerations',
          'Section 1.7 — A 1.1.6 Physiology',
          'Section 1.8 — A 1.1.7 Psychology',
          'Section 1.9 — B 1.1.1 Understanding needs',
          'Section 1.10 — User-centred research methods',
          'Section 1.11 — B 1.1.3 Personae',
          'Section 1.12 — C 1.1.1 Responsibility',
          'Section 1.13 — C 1.1.2 Safety',
          'Section 1.14 — C 1.1.3 Obsolescence',
          'Section 1.15 — Exam-ready definitions',
          "Section 1.16 — The book's own questions",
          'Section 1.17 — What changed in this rewrite',
          'Section 1.18 — Connections',
        ],
        flashcards: dtCh1Flashcards,
        updated: '2026-09-04',
      },
    ],
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
      {
        id: 'ch2',
        title: 'Chapter 2: SA1 Focus — Functions (SL 2.1–2.6 · AHL 2.7–2.9)',
        subtitle: 'Straight lines, functions, GDC graphing, key features, modelling, composites, transformations, HL modelling (excl. log)',
        notes: mathsCh2Notes,
        sections: [
          'Section 2.1 — Straight Lines: Gradient, Forms, Parallel & Perpendicular',
          'Section 2.2 — Functions: Notation, Domain, Range, Inverse',
          'Section 2.3 — Graphing with Technology (GDC)',
          'Section 2.4 — Key Features of Graphs',
          'Section 2.5 — Modelling: Choosing a Function Family',
          'Section 2.6 — Modelling Skills',
          'Section 2.7 — Composite Functions and Inverses (AHL)',
          'Section 2.8 — Transformations of Graphs (AHL)',
          'Section 2.9 — HL Modelling Functions (AHL, except Log)',
          'Section 2.10 — Exam-Ready Formulas and Definitions',
          'Section 2.11 — Common Exam Traps',
          'Section 2.12 — GDC Tips (SA1 essentials)',
        ],
        flashcards: mathsCh2Flashcards,
        updated: '2026-09-04',
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
    chapters: [
      {
        id: 'ch1',
        title: 'Chapter 1: SA1 Focus — Paper 1 Non-Literary Analysis',
        subtitle: 'Guided textual analysis of ads, PSAs, political cartoons, comic strips, infographics',
        notes: englishCh1Notes,
        sections: [
          'Section 1.1 — Paper 1 Task and Marking Criteria',
          'Section 1.2 — The SPACECAT Analytical Framework',
          'Section 1.3 — Print Advertisements',
          'Section 1.4 — Public Service Announcements (PSAs)',
          'Section 1.5 — Political Cartoons',
          'Section 1.6 — Comic Strips',
          'Section 1.7 — Infographics',
          'Section 1.8 — Essay Structure and Time Plan',
          'Section 1.9 — Exam-Ready Definitions',
          'Section 1.10 — Common Exam Traps',
          'Section 1.11 — Sources',
        ],
        flashcards: englishCh1Flashcards,
        updated: '2026-09-04',
      },
    ],
  },
  {
    id: 'hindi',
    name: 'Hindi B SL',
    shortName: 'Hindi',
    level: 'SL',
    color: 'orange',
    icon: 'Languages',
    description: 'Language acquisition — Hindi, five prescribed themes.',
    chapters: [
      {
        id: 'ch1',
        title: 'Chapter 1: SA1 Focus — Unit 1 पहचान (Identity)',
        subtitle: 'Paper 1 Writing + Paper 2 Reading · four sub-themes · five text types',
        notes: hindiCh1Notes,
        sections: [
          'Section 1.1 — Overview: Paper 1 and Paper 2 Structure',
          'Section 1.2 — Sub-theme: पहचान का महत्व (The importance of identity)',
          'Section 1.3 — Sub-theme: भाषा और पहचान (Language and identity)',
          'Section 1.4 — Sub-theme: स्वास्थ्य और कल्याण (Health and wellbeing)',
          'Section 1.5 — Sub-theme: भोजन और संस्कृति (Food and culture)',
          'Section 1.6 — Text Type: ईमेल (Email)',
          'Section 1.7 — Text Type: डायरी (Diary entry)',
          'Section 1.8 — Text Type: ब्लॉग (Blog)',
          'Section 1.9 — Text Type: लेख (Article)',
          'Section 1.10 — Text Type: प्रस्ताव (Proposal)',
          'Section 1.11 — Grammar Hotspots',
          'Section 1.12 — Paper 2 Reading Strategy',
          'Section 1.13 — Exam-Ready Vocabulary and Phrases',
        ],
        flashcards: hindiCh1Flashcards,
        updated: '2026-09-04',
      },
    ],
  },
  {
    id: 'global-politics',
    name: 'Global Politics HL',
    shortName: 'Global Politics',
    level: 'HL',
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
          'Section 1.2 — The Four Core Key Concepts — Summary and Cross-references',
          'Section 1.3 — The Three Thematic Studies',
          'Section 1.4 — Levels of Analysis',
          'Section 1.5 — Theoretical Lenses',
          'Section 1.6 — Stakeholder Analysis Framework',
          'Section 1.7 — Claims and Counterclaims: the Grey Areas Rule',
          'Section 1.8 — Assessment Structure',
          'Section 1.9 — Common Exam Traps',
          'Section 1.10 — Exam-Ready Definitions',
          'Section 1.11 — Diagnostic Prompts to Test Yourself',
          'Section 1.12 — Sources',
        ],
        flashcards: gpCh1Flashcards,
        updated: '2026-09-09',
      },
      {
        id: 'ch2',
        title: 'Chapter 2: Power',
        subtitle: 'SA1 priority · Definitions, hard/soft/smart/structural, power over/to/with/within, Lukes\' three faces, polarity, indicators, 2026 cases',
        notes: gpCh2Notes,
        sections: [
          'Section 2.1 — Defining Power',
          'Section 2.2 — Classification 1: Hard, Soft, and Smart Power (Joseph Nye)',
          'Section 2.3 — Classification 2: Structural Power (Susan Strange)',
          'Section 2.4 — Classification 3: Power OVER / TO / WITH / WITHIN (Rowlands / Follett)',
          "Section 2.5 — Classification 4: How Power Operates — Lukes' Three Faces",
          'Section 2.6 — Distribution of Power: Polarity',
          'Section 2.7 — Indicators of Power',
          'Section 2.8 — Rising and Declining Powers — Case Snapshots',
          'Section 2.9 — Live 2026 Case Studies',
          'Section 2.10 — Power Through Three Theoretical Lenses',
          'Section 2.11 — Power and Sovereignty — The Live Interface',
          'Section 2.12 — Exam-Ready Definitions',
          'Section 2.13 — Common Exam Traps',
          'Section 2.14 — Sources',
        ],
        flashcards: gpCh2Flashcards,
        updated: '2026-09-09',
      },
      {
        id: 'ch3',
        title: 'Chapter 3: Sovereignty',
        subtitle: 'SA1 priority · Westphalian origins, internal/external, de jure vs de facto, erosion debate, pooled sovereignty, contested cases, 2026 developments',
        notes: gpCh3Notes,
        sections: [
          'Section 3.1 — Defining Sovereignty',
          'Section 3.2 — Sources of Sovereignty',
          'Section 3.3 — Internal and External Dimensions',
          'Section 3.4 — De Jure vs De Facto Sovereignty',
          'Section 3.5 — The Central Debate: Is Sovereignty Being Eroded?',
          'Section 3.6 — Pooled Sovereignty: The EU Case',
          'Section 3.7 — Contested Sovereignty: Case Bank',
          'Section 3.8 — Modern Challenges to Sovereignty',
          'Section 3.9 — Live 2026 Case Studies',
          'Section 3.10 — Sovereignty Through Three Theoretical Lenses',
          'Section 3.11 — The Power–Sovereignty Interface',
          'Section 3.12 — Exam-Ready Definitions',
          'Section 3.13 — Common Exam Traps',
          'Section 3.14 — Sources',
        ],
        flashcards: gpCh3Flashcards,
        updated: '2026-09-09',
      },
      {
        id: 'ch4',
        title: 'Chapter 4: Legitimacy',
        subtitle: 'Post-SA1 · Sources of legitimacy (Weber + modern), legality vs legitimacy vs morality, live cases, Power–Sovereignty–Legitimacy triangle',
        notes: gpCh4Notes,
        sections: [
          'Section 4.1 — Defining Legitimacy',
          'Section 4.2 — Sources of Legitimacy',
          "Section 4.3 — Legitimacy vs Legality vs Morality — Don't Conflate Them",
          'Section 4.4 — Legitimacy in Action — Cases',
          'Section 4.5 — The Power–Sovereignty–Legitimacy Triangle',
          'Section 4.6 — Exam-Ready Definitions',
          'Section 4.7 — Common Exam Traps',
          'Section 4.8 — Diagnostic Prompts',
          'Section 4.9 — Sources',
        ],
        flashcards: gpCh4Flashcards,
        updated: '2026-09-09',
      },
      {
        id: 'ch5',
        title: 'Chapter 5: Interdependence',
        subtitle: 'Post-SA1 · Keohane & Nye, dimensions, sensitivity vs vulnerability, weaponised interdependence, 2026 cases',
        notes: gpCh5Notes,
        sections: [
          'Section 5.1 — Defining Interdependence',
          'Section 5.2 — Dimensions of Interdependence',
          'Section 5.3 — Sensitivity vs Vulnerability (Keohane & Nye)',
          'Section 5.4 — Weaponised Interdependence',
          'Section 5.5 — Interdependence, Power, and Sovereignty',
          'Section 5.6 — Live 2026 Cases',
          'Section 5.7 — Exam-Ready Definitions',
          'Section 5.8 — Common Exam Traps',
          'Section 5.9 — Sources',
        ],
        flashcards: gpCh5Flashcards,
        updated: '2026-09-09',
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
