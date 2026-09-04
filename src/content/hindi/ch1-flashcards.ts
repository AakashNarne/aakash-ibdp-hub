import type { Flashcard } from '../types'

export const ch1Flashcards: Flashcard[] = [
  // ── Section 1.1 — Paper structure ────────────────────────────────
  {
    q: 'What are the two Hindi B SL papers for SA1, their durations, and marks?',
    a: 'Paper 1 — Writing: 30 marks, 1h 15m, 250–400 words on one prompt (chosen from three). Paper 2 — Reading: 40 marks, 1h, three unseen texts and ~45 questions. Total: 70 marks.',
    hint: '30 + 40 = 70',
  },
  {
    q: 'What are the three Paper 1 SL marking criteria and their weights?',
    a: 'Criterion A · Language (12 marks) — grammar, vocabulary, register, sentence variety. Criterion B · Message (12 marks) — task addressed, ideas developed, relevance. Criterion C · Conceptual understanding (6 marks) — text-type conventions, purpose/audience awareness.',
    hint: 'A · 12, B · 12, C · 6',
  },

  // ── Section 1.2–1.5 sub-themes ───────────────────────────────────
  {
    q: 'Name the four sub-themes of Unit 1: पहचान.',
    a: '1) पहचान का महत्व (importance of identity), 2) भाषा और पहचान (language and identity), 3) स्वास्थ्य और कल्याण (health and wellbeing), 4) भोजन और संस्कृति (food and culture).',
    hint: 'Identity → Language → Health → Food',
  },
  {
    q: 'Give three core vocabulary items for the sub-theme भाषा और पहचान.',
    a: 'मातृभाषा (mother tongue), राष्ट्रभाषा (national language), बहुभाषी (multilingual), विरासत (heritage), बोली (dialect), लिपि (script) — any three.',
  },
  {
    q: 'Give three core vocabulary items for the sub-theme स्वास्थ्य और कल्याण.',
    a: 'स्वास्थ्य (health), तनाव (stress), व्यायाम (exercise), पौष्टिक (nutritious), मानसिक (mental), जीवनशैली (lifestyle), नींद (sleep), योग (yoga), ध्यान (meditation) — any three.',
  },
  {
    q: 'Give three core vocabulary items for the sub-theme भोजन और संस्कृति.',
    a: 'भोजन (food), व्यंजन (dish), स्वादिष्ट (tasty), मसाले (spices), शाकाहारी (vegetarian), त्योहार (festival), परंपरागत (traditional), स्वाद (taste) — any three.',
  },

  // ── Section 1.6–1.10 text types ──────────────────────────────────
  {
    q: 'Name the five text types on the Hindi B SA1 syllabus.',
    a: 'ईमेल (email), डायरी (diary), ब्लॉग (blog), लेख (article), प्रस्ताव (proposal).',
    hint: 'Five forms — format is half the marks',
  },
  {
    q: 'What are the format elements of an email in Hindi B?',
    a: 'प्रेषक (From), प्राप्तकर्ता (To), विषय (Subject), प्रिय___/आदरणीय___ (salutation), body (2–3 paragraphs), धन्यवाद/भवदीय (closing), name. Register: formal to teacher/authority, informal to peer.',
  },
  {
    q: 'What are the format elements of a diary entry?',
    a: 'दिनांक (date), दिन (day, optional), समय (time, optional), प्रिय डायरी (optional address), reflective first-person body, name at end (optional). Register: informal, first-person, emotional, honest.',
  },
  {
    q: 'What are the format elements of a blog post?',
    a: 'शीर्षक (title), लेखक + दिनांक (author/date), engaging opening hook, sub-headings for sections (optional), conversational body, closing call for comments / like & share.',
  },
  {
    q: 'What are the format elements of an article (लेख)?',
    a: 'शीर्षक (title), लेखक (byline), प्रस्तावना (introduction), विषय-वस्तु (body with topic-sentence paragraphs), निष्कर्ष (conclusion). Register: formal, third-person, argument-driven.',
  },
  {
    q: 'What are the format elements of a proposal (प्रस्ताव)?',
    a: 'शीर्षक (title), प्रस्तुतकर्ता (proposer), प्राप्तकर्ता (recipient), दिनांक (date), पृष्ठभूमि (background), उद्देश्य (objectives), कार्य-योजना (action plan), बजट/समय-सीमा (budget/timeline), अपेक्षित परिणाम (expected outcomes), निष्कर्ष (conclusion).',
  },
  {
    q: 'What is the "three-move" structure for a diary paragraph?',
    a: '1) What happened (event, specific detail). 2) How I felt (emotion, honest). 3) What I think it means (reflection). Diary is authentic voice, not polished argument.',
  },

  // ── Section 1.11 grammar hotspots ────────────────────────────────
  {
    q: 'Explain the आप / तुम / तू register distinction.',
    a: 'आप — respectful/formal (elders, teachers, strangers, authority). तुम — friendly/informal (peers, siblings, friends). तू — intimate/very close (family, closest friends) or rude if used with the wrong person. Using the wrong pronoun in a formal email costs format marks.',
    hint: 'Formal → informal → intimate',
  },
  {
    q: 'What is the ergative "ने" construction and when do you use it?',
    a: 'In past-tense transitive verbs, the subject takes ने and the verb agrees with the OBJECT, not the subject. Example: मैंने पत्र लिखा (I wrote a letter) — verb "लिखा" is masculine singular because पत्र is masculine singular, not because मैं is.',
    hint: 'Past-tense transitive; subject + ने',
  },
  {
    q: 'Give an example of postposition (परसर्ग) agreement with का/की/के.',
    a: 'का/की/के agree with the gender and number of the NEXT noun. लड़के का बैग (boy\'s bag — बैग m.sg.), लड़के की किताब (boy\'s book — किताब f.sg.), लड़के के कपड़े (boy\'s clothes — कपड़े m.pl.).',
  },
  {
    q: 'What is Hindi\'s basic word order?',
    a: 'SOV — Subject–Object–Verb. मैं (S) खाना (O) खाता हूँ (V). The verb goes at the end of the clause.',
    hint: 'Different from English SVO',
  },

  // ── Section 1.12 Paper 2 Reading ─────────────────────────────────
  {
    q: 'What are the question types you will see in Paper 2?',
    a: 'Multiple choice (बहुविकल्पीय), short answer (लघु उत्तर), true/false with justification (सत्य/असत्य कारण सहित), vocabulary matching (शब्दार्थ), reference identification (संदर्भ पहचान), table completion (तालिका पूर्ति).',
    hint: 'Six question types',
  },
  {
    q: 'What is the "no quote = no mark" rule in Paper 2?',
    a: 'For True/False with justification questions, you must quote the exact line from the text that justifies your answer. If the T/F answer is correct but you omit or paraphrase the quote, you get zero for that item. Justification and T/F are separately marked.',
    hint: 'True/False justification',
  },
  {
    q: 'What is the recommended Paper 2 time strategy?',
    a: 'Skim all three texts first (5 min), do the easiest first, read questions BEFORE re-reading the text closely, underline evidence, never leave blanks (guess on MCQ). "पाठ के अनुसार" = only what the text says, no outside knowledge.',
  },

  // ── Section 1.13 useful phrases ──────────────────────────────────
  {
    q: 'Give three formal Hindi phrases for structuring an argument.',
    a: 'सबसे पहले (firstly), दूसरे (secondly), अंत में (finally); इसका मुख्य कारण यह है कि (the main reason is that); उदाहरण के लिए (for example); हालाँकि / फिर भी (however / nevertheless).',
  },
  {
    q: 'Give a formal opening phrase for a Hindi email to a teacher.',
    a: 'आदरणीय ___ जी, नमस्ते। मैं आपको यह ईमेल… के बारे में लिख रहा/रही हूँ। (Respected ___, greetings. I am writing this email to you regarding…)',
  },
  {
    q: 'Give a formal closing phrase for a Hindi article or proposal.',
    a: 'अंत में, मैं यह कहना चाहता/चाहती हूँ कि… (In conclusion, I would like to say that…) — followed by the restated thesis or the specific ask. Then धन्यवाद (Thank you) or भवदीय (Yours sincerely).',
  },
]
