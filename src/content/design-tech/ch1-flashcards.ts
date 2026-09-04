import type { Flashcard } from '../types'

export const ch1Flashcards: Flashcard[] = [
  // ── Section 1.2 — Ergonomics domains ─────────────────────────────
  {
    q: 'Give the formal definition of ergonomics.',
    a: 'Ergonomics is the study of the relationship between humans and the objects, systems, and environments they interact with, aimed at optimising efficiency, safety, and comfort.',
    hint: 'Efficiency, safety, comfort',
  },
  {
    q: 'Name the three domains of ergonomics and one design example of each.',
    a: '1) Anthropometrics — body measurements (chair seat height). 2) Physiological — fatigue, sensory limits, comfort (chair lumbar support). 3) Psychological — perception, mental models, cognitive load (interface layout, button size).',
    hint: 'Body / body-in-use / mind',
  },

  // ── Section 1.3 — Anthropometric data types ──────────────────────
  {
    q: 'Distinguish static from dynamic anthropometric data.',
    a: 'Static — measurements taken at rest in a fixed posture (standing height, seated eye height). Dynamic — measurements taken during motion (arm reach envelope, hand-grip stroke). A chair seat height uses static data; a steering wheel reach uses dynamic.',
    hint: 'At rest vs in motion',
  },
  {
    q: 'What are structural and functional anthropometric data?',
    a: 'Structural — skeletal/anatomical measurements (bone lengths, joint spacing). Functional — task-based measurements of what a body can DO (grip force to open a jar, force to open a car door).',
  },

  // ── Section 1.4 — Percentiles ────────────────────────────────────
  {
    q: 'What percentile do you design REACH for and why?',
    a: '5th percentile. If the smallest user (smaller than 95% of the population) can reach it, so can everyone larger. Shelves, controls, emergency buttons all use this.',
    hint: 'Smallest fits → everyone fits',
  },
  {
    q: 'What percentile do you design CLEARANCE for and why?',
    a: '95th percentile. If the largest user (larger than 95% of the population) fits through it or sits in it, everyone smaller does too. Doorway heights, seat widths, leg room all use this.',
    hint: 'Largest fits → everyone fits',
  },
  {
    q: 'Give the one-sentence rule for percentile design decisions.',
    a: 'Design reach for the 5th percentile, design clearance for the 95th, and design adjustability for everything in between (chairs, steering columns, monitor arms).',
    hint: 'Reach → 5th, Clearance → 95th, Adjust → mid',
  },

  // ── Section 1.5–1.6 physiological and psychological ──────────────
  {
    q: 'Why should information never be encoded by colour alone?',
    a: 'About 8% of men are red-green colour-blind. If a design conveys meaning only through colour, that population is excluded. Combine colour with shape, label, or position for redundancy.',
    hint: 'Accessibility',
  },
  {
    q: 'What is a mental model and give an example of a design that violates one?',
    a: 'The user\'s internal picture of how something works. Don Norman\'s classic "Norman door" — a door labelled PUSH but with a handle triggers the wrong mental model (handles afford pulling), causing users to fail on the first try.',
    hint: 'Don Norman',
  },
  {
    q: 'Distinguish affordance from signifier.',
    a: 'Affordance — a perceived property that SUGGESTS how an object is used (a chair affords sitting, a knob affords turning). Signifier — an explicit CUE telling the user what to do (a label, icon, arrow). Signifiers complement affordances; a good design uses both.',
    hint: 'Suggest vs tell',
  },
  {
    q: 'State Fitts\'s Law and its design implication.',
    a: 'The time to hit a target is a function of its distance and its size. Larger, closer targets are faster to hit. Design implication: critical controls should be big and near.',
    hint: 'Bigger + closer = faster',
  },

  // ── Section 1.7–1.9 UCD ──────────────────────────────────────────
  {
    q: 'Define User-Centred Design (UCD).',
    a: 'A design philosophy and process in which users\' needs, wants, and limitations are given extensive attention at each stage — through research, involvement, and testing. Users are in the room from day one, not brought in at the end.',
    hint: 'Every stage, not just the end',
  },
  {
    q: 'What are the five steps in the iterative UCD cycle?',
    a: '1) Understand context of use. 2) Specify user requirements. 3) Design solutions. 4) Evaluate against requirements. 5) Iterate — loop back. Iteration is the load-bearing word; UCD is not waterfall.',
    hint: 'Understand → Specify → Design → Evaluate → Iterate',
  },
  {
    q: 'Name six UCD methods and pair each with what it is best at.',
    a: 'Interviews — deep motivations. Surveys — statistical validation. Personas — team shorthand for user segments. Usability testing — finding usability problems with a working prototype. Focus groups — surfacing shared reactions. Ethnography — what people DO vs what they SAY.',
  },
  {
    q: 'How many users does Nielsen say you need in a usability test to catch most issues?',
    a: 'Five users catch about 85% of usability problems. Beyond that, additional users find diminishing new issues — better to iterate the design and re-test than to test more users on the same version.',
    hint: '5-user rule',
  },
  {
    q: 'Give three advantages and three limitations of UCD.',
    a: 'Advantages: (1) products fit real user needs — higher adoption, (2) fewer errors and safety issues, (3) reduced training/support costs. Limitations: (1) time-consuming and expensive, (2) users are biased and say they want features they won\'t use, (3) users cannot conceive of what doesn\'t yet exist — UCD can miss radical innovation ("faster horses").',
  },
  {
    q: 'How does User-Centred Design differ from Universal Design?',
    a: 'UCD targets a SPECIFIC user population identified through research. Universal Design explicitly targets ALL users regardless of ability, age, or culture — inclusion is the design constraint (curb cuts, subtitle-first video, easy-open packaging).',
  },

  // ── Section 1.10 — Four responsibilities ─────────────────────────
  {
    q: 'Name the four dimensions of designer responsibility.',
    a: '1) Ethical — honesty, consent, avoidance of dark patterns. 2) Moral — broader value-alignment. 3) Social — cultural sensitivity, accessibility, avoiding exclusion. 4) Environmental — materials, energy, disposal.',
    hint: 'Ethical / Moral / Social / Environmental',
  },

  // ── Section 1.11 — Life cycle & sustainability ───────────────────
  {
    q: 'Name the five stages of the product life cycle.',
    a: '1) Raw material extraction. 2) Manufacturing. 3) Distribution. 4) Use phase. 5) End-of-life (disposal / recycling).',
    hint: 'Extract → Make → Ship → Use → End',
  },
  {
    q: 'What is cradle-to-cradle design?',
    a: 'A design philosophy (McDonough & Braungart) in which end-of-life materials become inputs to a new cycle, either as biological nutrients (compostable) or technical nutrients (recyclable). Contrast with linear cradle-to-grave / take-make-dispose.',
    hint: 'End = input for new cycle',
  },
  {
    q: 'Define circular design.',
    a: 'Design that keeps materials in use through reuse, repair, refurbish, and recycle — as opposed to the linear "take-make-dispose" model. Fairphone is the worked example: modular components you can swap out.',
  },

  // ── Section 1.12 — Planned obsolescence ──────────────────────────
  {
    q: 'Name the four types of planned obsolescence with an example of each.',
    a: '1) Technical/functional — designed to fail (glued phone batteries). 2) Systemic — software updates make older hardware unusable (OS drops old device support). 3) Aesthetic/stylistic — redesigns make old versions feel dated (fast fashion). 4) Notification — user is told product is obsolete when it\'s technically fine.',
  },

  // ── Section 1.13 — Case studies ──────────────────────────────────
  {
    q: 'Ford Pinto — what is the case and why does it matter?',
    a: '1970s Ford Pinto had a fuel-tank rupture risk. Internal cost-benefit memo weighed recall cost against expected wrongful-death payouts and chose not to recall. Foundational ethics case: monetising human life inside a design decision. Illustrates ethical/moral responsibility failure.',
  },
  {
    q: 'Volkswagen Dieselgate — what happened and what responsibility failed?',
    a: 'VW installed software "defeat devices" that detected emissions testing and reduced engine output during tests only. Real-world emissions were up to 40x legal limits. Engineers deliberately engineered non-compliance. Legal + ethical + environmental responsibility failure. Billions in fines, criminal charges against executives and engineers.',
  },
  {
    q: 'Why is Fairphone a canonical case study for DT?',
    a: 'Modular smartphone designed for repair, upgrade, and long life. Users can replace battery, screen, camera themselves. Demonstrates circular design, cradle-to-cradle thinking, right-to-repair, and design-for-disassembly principles in one commercial product.',
  },
  {
    q: 'How does IKEA flat-pack packaging illustrate environmental responsibility?',
    a: 'Products are designed to ship in flat boxes with user assembly. Flat packing dramatically reduces transport volume and therefore emissions in the distribution phase — you can fit many more units in a container. Trade-off: user assembly errors and sometimes reduced durability at joints.',
  },

  // ── Section 1.14 — Definitions ───────────────────────────────────
  {
    q: 'Define planned obsolescence.',
    a: 'The deliberate design of products to have a limited useful life, whether through technical failure, software abandonment, stylistic aging, or notifying users that a still-functional product is obsolete.',
  },
  {
    q: 'Define product liability.',
    a: 'The legal responsibility of a designer or manufacturer for harm caused by defects in a product\'s design, manufacture, or warnings — even without proven intent.',
  },
  {
    q: 'Define right-to-repair.',
    a: 'Legislation and design principles requiring manufacturers to provide access to spare parts, tools, and repair manuals so that users and independent shops can repair products. The EU has led globally; Apple has responded with Self Service Repair.',
  },
]
