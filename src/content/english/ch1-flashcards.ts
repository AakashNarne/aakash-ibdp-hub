import type { Flashcard } from '../types'

export const ch1Flashcards: Flashcard[] = [
  // ── Section 1.1 — Paper 1 Task and Marking Criteria ─────────────
  {
    q: 'What is the Paper 1 SL task and how long do you have?',
    a: 'One unseen non-literary text with a single guiding question. Produce a guided textual analysis answering the question. 1 hour 15 minutes. 20 marks total.',
    hint: 'Guided textual analysis',
  },
  {
    q: 'Name the four marking criteria for SL Paper 1 and what each rewards.',
    a: 'A — Understanding & interpretation (5): reading beyond the literal, inferences with evidence. B — Analysis & evaluation (5): explaining HOW authorial choices shape meaning. C — Focus & organization (5): thesis-led argument anchored to the guiding question. D — Language (5): precise vocabulary, correct register, subject-specific terminology.',
    hint: 'A/B/C/D — 5 marks each',
  },
  {
    q: 'What time split does the syllabus reward in Paper 1?',
    a: 'Annotate 15 min, plan 5 min, write 50 min, review 5 min. Never skip the plan — Criterion C collapses without it.',
  },

  // ── Section 1.2 — SPACECAT Framework ─────────────────────────────
  {
    q: 'What does SPACECAT stand for?',
    a: 'Subject, Purpose, Audience, Context, Exigence, Choices, Appeals, Tone. Eight lenses to interrogate any non-literary text during annotation.',
    hint: '8 letters, S-P-A-C-E-C-A-T',
  },
  {
    q: 'What is exigence in the SPACECAT framework?',
    a: 'The specific event, controversy, or gap in public discourse that prompted the text — the particular moment or trigger the text is responding to. Related to but narrower than context.',
  },
  {
    q: 'Define kairos.',
    a: 'The rhetorical use of timeliness — arguing at the right moment. A PSA about air quality released the day after a smog event exploits kairos.',
    hint: 'Fourth appeal after ethos/pathos/logos',
  },

  // ── Section 1.3 — Print Advertisements ───────────────────────────
  {
    q: 'Name six things to look for in a print advertisement.',
    a: 'Visual hierarchy, copy vs image ratio, brand positioning, slogan/tagline, colour psychology, typography, semiotics, model/spokesperson, white space (any six).',
  },
  {
    q: 'Give the classical marker for each of the three appeals in an ad.',
    a: 'Ethos — celebrity endorsement, "since 1892", awards, expert testimony. Pathos — emotional faces, family imagery, aspirational lifestyle. Logos — statistics, comparisons, ingredient lists, price claims.',
    hint: 'Aristotle: credibility, emotion, logic',
  },
  {
    q: 'What is the "just naming the device" trap in Paper 1, and how do you avoid it?',
    a: 'Writing "uses pathos" without explaining the mechanism earns zero under Criterion B. Fix: name the device, quote the evidence, then explain how it produces its effect on the specific target audience.',
    hint: 'Point → Evidence → Analysis → Link',
  },

  // ── Section 1.4 — PSAs ───────────────────────────────────────────
  {
    q: 'What distinguishes a PSA from a commercial ad?',
    a: 'PSA is non-commercial — from a government body, NGO, or civil society organisation. "Product" is a behaviour change (wear a helmet, save water). Reader gives attention/behaviour; sponsor gives no goods. Tone tends sombre or urgent; sponsor is institutional.',
    hint: 'Purpose, sponsor, transaction',
  },
  {
    q: 'What are the distinguishing features of a PSA that appear across most examples?',
    a: 'Explicit call to action (hotline, hashtag, imperative verb), sponsor identification (institutional logo), often a fear appeal or statistical hook, cognitive dissonance from mismatched image and caption.',
  },

  // ── Section 1.5 — Political Cartoons ─────────────────────────────
  {
    q: 'Name the five tools of the political cartoonist.',
    a: 'Caricature (exaggerated physical features), symbolism (objects standing for ideas), labels (text on figures/objects), exaggeration (scale/proportion), analogy (comparing the situation to another).',
    hint: 'Five items, all visual argument devices',
  },
  {
    q: 'What is the four-step method for reading a political cartoon?',
    a: '1) Inventory every figure, object, and label. 2) Anchor to the historical/political moment. 3) Identify whose side the cartoonist is on. 4) Find the irony/gap between what is claimed and what is depicted.',
  },
  {
    q: 'Give three examples of common political cartoon symbols and what they represent.',
    a: 'Dove = peace. Scales = justice. Elephant = BJP (India) or Republicans (US). Bear = Russia. Uncle Sam = US government. Lotus = BJP.',
  },

  // ── Section 1.6 — Comic Strips ───────────────────────────────────
  {
    q: 'What is the gutter in a comic strip and why does it matter?',
    a: 'The white space between panels. The reader mentally fills in the elapsed action, and this is where much of the humour and pacing live. Analytical gold — the writer chose what NOT to draw.',
  },
  {
    q: "According to Scott McCloud, why do many comic characters look simplified and iconic?",
    a: 'The more abstract the drawing, the more universal the reader-projection. Simple faces let any reader see themselves — that\'s why Charlie Brown looks the way he does.',
  },
  {
    q: 'What comic strips are worth naming in an exam response and what critiques do they carry?',
    a: 'Calvin and Hobbes (childhood imagination, consumerism), Peanuts (existential anxiety, loneliness), Dilbert (office bureaucracy, corporate absurdity). Naming a strip signals literacy; the critique earns Criterion A depth.',
  },

  // ── Section 1.7 — Infographics ───────────────────────────────────
  {
    q: 'Why is "infographics are neutral" a marking trap?',
    a: 'The choice of which data to include, how to scale it, what to leave out, and which chart to use is all authorial. An advocacy NGO\'s "just the facts" infographic is still an argument. Treat it as one.',
  },
  {
    q: 'Name three framing devices that make an infographic misleading.',
    a: 'Axis truncation (starting a y-axis at 20 not 0 to exaggerate change), cherry-picked time windows (choosing dates that flatter the argument), misleading area scaling in bubble charts (scaling diameter instead of area doubles apparent size).',
  },
  {
    q: "What's the scoring move in analysing an infographic?",
    a: 'Talk about the INTERACTION of data and design. Not "the chart shows X" alone, and not "the colours are red and green" alone — but how the visual choices shape how the data is received.',
  },

  // ── Section 1.8 — Essay Structure ────────────────────────────────
  {
    q: 'What is the five-part structure of a Paper 1 SL essay?',
    a: '1) Intro — text type, sponsor, purpose/audience in one sentence, thesis. 2) Body 1 — big structural choice. 3) Body 2 — language and tone. 4) Body 3 — a third angle (appeals / semiotics / cultural context). 5) Conclusion — synthesise, do not summarise.',
  },
  {
    q: 'What is the P-E-A-L cycle for a body paragraph?',
    a: 'Point (topic sentence naming the authorial choice) → Evidence (direct quotation or specific visual detail) → Analysis (how the choice creates its effect) → Link (tie back to the thesis / guiding question).',
    hint: 'Every body paragraph runs this',
  },

  // ── Section 1.9 — Definitions ────────────────────────────────────
  {
    q: 'Distinguish diction from syntax.',
    a: 'Diction = word CHOICE (which words the author picked). Syntax = word ORDER (how they are arranged into sentences). A short choppy syntax with panicked diction is a common analytical combo.',
  },
  {
    q: 'Define connotation.',
    a: 'The associations a word carries beyond its literal meaning. "Slim" and "skinny" describe the same body but connote admiration and unhealthiness respectively.',
    hint: 'Word colour beyond denotation',
  },
  {
    q: 'Define juxtaposition.',
    a: 'Placing two elements side by side to reveal contrast or connection. Common in PSAs (a normal image + a jarring caption) and infographics (a shocking figure next to a benign chart).',
  },
  {
    q: 'What is foregrounding?',
    a: 'Making one element stand out from the rest to draw the reader\'s attention — through size, colour, placement, isolation, or repetition.',
  },

  // ── Section 1.10 — Traps ─────────────────────────────────────────
  {
    q: "Name three common Paper 1 traps to avoid.",
    a: 'Feature-spotting (naming devices without explaining effect); summarising the text instead of analysing HOW it works; ignoring the guiding question and just writing what you noticed; treating an infographic as neutral; misidentifying the text type.',
    hint: 'Any three',
  },
  {
    q: 'What makes a thesis weak vs strong in Paper 1?',
    a: 'Weak: "This ad is very persuasive." Strong: names a specific MECHANISM producing a specific EFFECT on a specific AUDIENCE. Example: "The stark black-and-white photograph reframes homelessness from social problem to personal ethical claim on the middle-class Mumbai reader."',
  },
]
