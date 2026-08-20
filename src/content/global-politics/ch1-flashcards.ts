import type { Flashcard } from '../types'

export const ch1Flashcards: Flashcard[] = [
  // ── Section 1.1 — What GP Is ────────────────────────────────────
  {
    q: 'Define global politics in one sentence.',
    a: 'The study of political activity that transcends national boundaries — the interactions between state and non-state actors, IGOs, and civil society over issues of power, rights, development, and peace.',
  },
  {
    q: 'What are the four course aims of IB Global Politics?',
    a: '1. Explore and evaluate POWER in contemporary global politics. 2. Examine how STATE and NON-STATE ACTORS operate and interact. 3. Investigate contemporary issues from MULTIPLE PERSPECTIVES. 4. Develop a lifelong commitment to ACTIVE GLOBAL CITIZENSHIP through collaboration and agency.',
  },
  {
    q: 'State the four-step GP paragraph structure.',
    a: '1. Write your CLAIM. 2. Support with EVIDENCE (case study with place, date, actors). 3. LINK to GP key concepts or theories. 4. CONNECT back to your claim, question, or problem. Every paragraph in every essay.',
    hint: 'Claim → Evidence → Concept → Connect',
  },

  // ── Section 1.2 — Power ──────────────────────────────────────────
  {
    q: 'Define power in the IB Global Politics sense.',
    a: 'The ability to affect change — to make actors do (or not do) something they otherwise wouldn\'t. It is CONTESTED, RELATIONAL, and takes many forms. Not a "thing" one actor has, but a relationship that varies by context.',
  },
  {
    q: 'Distinguish hard, soft, smart, and structural power with one example each.',
    a: 'HARD — coercion via military/economic force (US sanctions freezing Russian reserves 2022). SOFT — attraction via culture and legitimate policy (K-pop, Bollywood, yoga diplomacy). SMART — deliberate mix of both (Marshall Plan; Belt and Road). STRUCTURAL — control over the rules of the system, not just outcomes (US dollar as reserve currency; P5 UN veto).',
  },
  {
    q: 'What are Lukes\' three faces of power?',
    a: 'FIRST face — DECISION-MAKING power (direct coercion or influence over decisions). SECOND face — AGENDA-SETTING power (deciding what gets discussed at all). THIRD face — IDEOLOGICAL / PREFERENCE-SHAPING power (convincing others their interests align with yours, so no coercion needed). The third is hardest to detect and most consequential.',
    hint: 'Steven Lukes, Power: A Radical View, 1974',
  },
  {
    q: 'Name the four polarity types with a historical example of each.',
    a: 'UNIPOLAR — one dominant power (post-1991 US "unipolar moment"). BIPOLAR — two balanced great powers (Cold War: US vs USSR). MULTIPOLAR — three or more comparable centres (pre-WWI Europe; arguably today: US, China, EU, India, Russia). NON-POLAR (Haass) — power diffused across state and non-state actors with no clear hierarchy.',
  },
  {
    q: 'What is the current polarity trend, with two pieces of evidence?',
    a: 'Contested multipolarity — transition from US-led unipolar order to multiple power centres. Evidence: (1) China\'s GDP now ~19% of global (nominal), larger than US in PPP terms; (2) BRICS+ expansion (2024 added Egypt, Ethiopia, Iran, UAE); (3) India expected to be world\'s 3rd-largest economy by 2027–2030; (4) yuan-settled trade eroding dollar dominance at the margins.',
  },
  {
    q: 'List six indicators of a state\'s power.',
    a: 'MILITARY — defence spending, nuclear arsenal, force projection. ECONOMIC — GDP (nominal + PPP), share of global trade, reserve currency status, FDI. TECHNOLOGICAL — R&D spending, patents, AI/semiconductors, space. DIPLOMATIC — UNSC seat, embassies, treaty ratifications, IGO membership. SOFT/CULTURAL — cultural exports, foreign students, global media reach. STRUCTURAL — ability to set global rules (WTO, IMF, ICANN, SWIFT).',
  },
  {
    q: 'Give the "one-dimensional power" critique of Russia as a great power.',
    a: 'Russia has enormous nuclear arsenal + P5 UN veto = major HARD power. But its economy is only ~10% of the US (similar to Italy). Ukraine war revealed the LIMITS of Russian conventional military power. Verdict: a "great power in one dimension only" — significant on hard power alone, mediocre or weak on economic, technological, and soft dimensions.',
  },
  {
    q: 'Why is China\'s rise more analytically interesting than Russia\'s?',
    a: 'China rises across MULTIPLE power dimensions simultaneously — economic (BRI, 150+ countries), technological (AI, 5G, EVs), military (largest navy by hull count), diplomatic (SCO, BRICS+), and increasingly structural (yuan settlement systems). Russia\'s power is concentrated in hard/military alone. A rising power on many dimensions is a different theoretical case than one on few.',
  },

  // ── Section 1.2.2 — Sovereignty ─────────────────────────────────
  {
    q: 'Define sovereignty.',
    a: 'A state\'s independence, its control over territory, and its ability to govern itself. Two dimensions: INTERNAL (supreme authority within a territory) and EXTERNAL (recognition by other states as an equal, legitimate actor). Traced to Treaty of Westphalia (1648) as foundational principle of the modern international system.',
  },
  {
    q: 'Give the "sovereignty is being eroded" argument with three pieces of evidence.',
    a: '(1) Borderless finance — 2008 GFC exposed how synchronised financial systems override national fiscal choices. (2) Supranational institutions — EU membership requires ceding legislative sovereignty; WTO rulings override national trade policy. (3) Digital/cyber — encrypted messaging, cross-border data, cyber-attacks bypass state control. (4) Climate accords, ICC jurisdiction, human rights conventions bind sovereignty in principle.',
  },
  {
    q: 'Give the "sovereignty persists" argument with three pieces of evidence.',
    a: '(1) States still control borders when it matters — Trump wall, EU post-2015 migration securitisation, India citizenship laws. (2) Great powers act unilaterally — US Paris Accord withdrawal 2017, Russia rejecting ICC jurisdiction. (3) BRICS + Global South push back on Western-designed institutions. (4) COVID-19 revealed states close borders, hoard vaccines, prioritise national interest under stress.',
  },
  {
    q: 'Why is sovereignty better described as a spectrum than a binary?',
    a: 'Different states have very different levels of sovereignty. North Korea = extreme sovereignty (isolated, unbound by external norms). EU members = pooled sovereignty. Failed/fragile states (Somalia, parts of Yemen) = degraded sovereignty despite legal recognition. Different DIMENSIONS also erode at different rates: economic sovereignty may weaken while political sovereignty stays strong.',
  },

  // ── Section 1.2.3 — Legitimacy ──────────────────────────────────
  {
    q: 'Define legitimacy.',
    a: 'An actor or an action that is commonly considered acceptable by a relevant population. Provides the fundamental rationale for governance and for exercising power. Legitimacy is CONTESTED and can be gained or lost.',
  },
  {
    q: 'Name five sources of legitimacy with one example each.',
    a: 'DEMOCRATIC/CONSTITUTIONAL — free elections, rule of law (most Western democracies). TRADITIONAL/HEREDITARY — monarchies (UK, Saudi Arabia, Bhutan). CHARISMATIC — Weber\'s category (Mandela, Gandhi). PERFORMANCE/OUTPUT — legitimacy from delivering economic growth (Chinese Communist Party). INTERNATIONAL RECOGNITION — UN membership, treaty participation (Taiwan\'s ambiguous status is a legitimacy problem).',
  },
  {
    q: 'Give an example of an actor with power but limited legitimacy.',
    a: 'The Taliban regained control of Afghanistan in August 2021 but has not been diplomatically recognised by most states. High domestic power (enforcement, territorial control) + low international legitimacy. Also useful: Russia\'s claimed democratic legitimacy from March 2024 elections (Putin 87%) is disputed by most Western states because opposition was excluded/imprisoned.',
  },
  {
    q: 'Why should you never conflate legitimacy, legality, and morality?',
    a: 'They\'re different concepts. Something can be LEGAL BUT ILLEGITIMATE — many find P5 UN veto legal but no longer legitimate. Something can be ILLEGAL BUT LEGITIMATE to many — civil disobedience (Gandhi Salt March, MLK civil rights actions). Something can be LEGITIMATE to one group and NOT another simultaneously (e.g. any settler / indigenous land dispute).',
  },

  // ── Section 1.2.4 — Interdependence ─────────────────────────────
  {
    q: 'Define interdependence in the GP sense.',
    a: 'The mutual reliance between and among groups, organisations, states, or geographic areas on access to resources, systems, or arrangements. Globalisation has INCREASED interdependence and CHANGED power relationships among actors. Includes economic, security, environmental, health, and informational dimensions.',
  },
  {
    q: 'Distinguish sensitivity from vulnerability in interdependence (Keohane & Nye).',
    a: 'SENSITIVITY = how QUICKLY changes in one country produce costly effects in another. VULNERABILITY = how COSTLY it is to ADJUST to those changes. Small states are typically more vulnerable to great powers than vice versa. US-China are deeply interdependent but vulnerabilities are ASYMMETRIC — decoupling hurts both, not equally.',
    hint: 'Speed of impact vs cost of adjustment',
  },
  {
    q: 'Give an Indian example that illustrates asymmetric interdependence.',
    a: 'India imports ~85% of crude oil, mostly from Gulf states + Russia. A Gulf crisis produces IMMEDIATE domestic effects (petrol prices, inflation, current account) — high sensitivity. Adjusting is expensive — India has limited domestic oil, expensive alternative import routes, sunk infrastructure. High vulnerability. Compare: the Gulf states are less sensitive to Indian domestic developments.',
  },

  // ── Section 1.3 — Thematic Studies ──────────────────────────────
  {
    q: 'Name the three thematic studies, their sub-concepts, and the case study Aakash uses for each.',
    a: 'RIGHTS AND JUSTICE (Rights, Justice, Liberty, Equality) → NORTH KOREA. DEVELOPMENT AND SUSTAINABILITY (Development, Sustainability, Poverty, Inequality) → DRC. PEACE AND CONFLICT (Peace, Conflict, Violence, Non-violence) → LIBYA.',
  },
  {
    q: 'Why is the DRC the paradigmatic "resource curse" case study?',
    a: 'One of the most resource-rich countries on Earth (cobalt, coltan, gold, timber) that ranks near the bottom of the HDI. Illustrates how global demand — EV batteries need cobalt — can reproduce local violence, artisanal mining conditions, and inequality despite (or because of) abundant natural wealth. Neocolonial extraction pattern.',
  },
  {
    q: 'What does the Libya case study illustrate about R2P?',
    a: 'The 2011 NATO-led intervention overthrew Gaddafi under an R2P mandate (UNSC Resolution 1973) but the aftermath produced state collapse and a decade-plus civil war with rival governments. Illustrates the tension between humanitarian intervention and sovereignty, the difference between negative peace (absence of Gaddafi) and positive peace (never achieved), and the unintended consequences of "successful" military action.',
  },

  // ── Section 1.4 — Levels of Analysis ────────────────────────────
  {
    q: 'Name the five levels of analysis with one example issue at each.',
    a: 'INDIVIDUAL — leader/decision-maker level (Zelensky in Russia-Ukraine). SUB-STATE/COMMUNITY — provinces, cities, ethnic groups (Kashmir identity; Catalan independence). STATE — national government (India\'s foreign policy). INTER-STATE/INTERNATIONAL — alliances, IGOs (G20; QUAD; ASEAN). GLOBAL/SYSTEMIC — the whole international system and its structural features (global capitalism; post-1945 liberal order).',
  },

  // ── Section 1.5 — Theoretical Lenses ────────────────────────────
  {
    q: "Realism's core claim in one line, and what it explains best.",
    a: 'The international system is ANARCHIC; states are the primary actors; they pursue national interest defined as SECURITY and POWER; conflict is a permanent possibility. Explains well: great-power competition, military build-ups, alliance formation, balance-of-power politics. Case fit: US-China rivalry, Russia\'s Ukraine invasion, India\'s border strategy with China.',
  },
  {
    q: "Liberalism's core claim in one line, and what it explains best.",
    a: 'Cooperation is possible in anarchy via INSTITUTIONS, ECONOMIC INTERDEPENDENCE, and shared DEMOCRATIC VALUES. Non-state actors matter; rules and norms shape behaviour. Explains well: the EU, WTO, UN, human rights conventions, Paris Agreement, persistence of post-1945 institutions.',
  },
  {
    q: "Constructivism's core claim in one line, and what it explains best.",
    a: 'International politics is shaped by IDEAS, NORMS, IDENTITIES, and shared MEANINGS — not just material power. What counts as "power" or "security" is socially constructed. Wendt: "Anarchy is what states make of it." Explains well: the nuclear taboo, diffusion of human rights norms, R2P emergence, Germany\'s post-1945 self-restraint.',
  },
  {
    q: "Read the Russia-Ukraine war through all three lenses briefly.",
    a: 'REALIST — great-power revisionism; Russia balancing against NATO expansion; anarchy invites war. LIBERAL — a failure of institutions (post-Cold War security architecture) and interdependence (Nord Stream and gas trade didn\'t restrain Russia); testing whether sanctions and international law can constrain a P5 state. CONSTRUCTIVIST — the war reflects contested identities (Russian imperial nostalgia, Ukrainian national identity crystallising through resistance) and the fragility of the "no war in Europe" norm.',
  },

  // ── Section 1.6 — Stakeholder Analysis ──────────────────────────
  {
    q: 'Name six categories of actors in a GP stakeholder analysis.',
    a: 'STATE actors (governments, militaries, security agencies). NON-STATE actors (MNCs, terrorist groups, transnational advocacy networks). IGOs (UN, WTO, IMF, ICC). NGOs (Amnesty, HRW, Oxfam, MSF). CIVIL SOCIETY (unions, faith groups, media, protest movements). AFFECTED COMMUNITIES (refugees, indigenous groups, marginalised populations).',
  },
  {
    q: "What's the exam rule about analysing only state actors?",
    a: "Any Paper 2 essay that ONLY discusses state actors is missing marks. Always include at least TWO categories beyond states. Also — actors don't have monolithic interests. Break them into sub-groups when it matters (\"India\" has a foreign ministry that thinks realist, NITI Aayog that thinks developmentalist, and civil society that thinks rights-based).",
  },

  // ── Section 1.7 — Claims and Counterclaims ──────────────────────
  {
    q: 'What\'s the "grey areas" rule for Paper 2 essays?',
    a: 'GP is not about black-and-white answers — it\'s full of grey areas. Claims and counterclaims don\'t need to be OPPOSITE ideas — they can be different PERSPECTIVES on the same issue (a government and an NGO both agree pollution is bad but frame it entirely differently). Contrasting perspectives can come from different STAKEHOLDERS or different THEORETICAL LENSES.',
  },

  // ── Section 1.8 — Assessment ────────────────────────────────────
  {
    q: 'What are the SL Global Politics external assessment components and weightings?',
    a: 'PAPER 1 — Source-based, 4 sub-questions on the core unit, 25 marks, 1h 15min, 20% weighting. PAPER 2 — Two essays (Section A thematic + Section B integrating), 30 marks, 1h 45min, 30% weighting. Engagement Project (IA) — 2,000-word report + evidence, 30 marks, 35 hours of work, 20% weighting.',
  },
  {
    q: 'Describe the Paper 1 Question 4 structure.',
    a: 'Mini-essay (12 marks, AO3). Structure: (1) INTRODUCTION defining the key concept, thesis statement, implications. (2) BODY paragraphs with 2 claims + 2 counterclaims, each supported by a SOURCE, own case study, and course content — use all FOUR sources. Each paragraph links back to the prompt. (3) CONCLUSION summarising claims; do NOT add new information.',
  },
  {
    q: 'Name the six IA (Engagement Project) criteria and their marks.',
    a: 'A — Explanation and Justification (4 marks). B — Process (3 marks). C — Analysis and Synthesis (8 marks). D — Evaluation and Reflection (6 marks). E — Communication (3 marks). F — Recommendation (6 marks). Total = 30 marks. Word count: 2,000 SL.',
  },

  // ── Exam Traps ──────────────────────────────────────────────────
  {
    q: 'What is the biggest analytical trap in Paper 2 essays?',
    a: 'Name-dropping concepts without ANALYSING them. Saying "this shows power" is not enough — you have to show HOW. Every concept mentioned in an essay should be USED to interpret a specific piece of evidence, not just gestured at.',
  },
  {
    q: 'Common GP writing habit that IS marked down?',
    a: 'Creative or literary language. GP writing is CLEAR, FACTUAL, and ACADEMIC. No similes, metaphors, or figurative language. Focus on precise arguments, evidence, and analysis. Save the literary style for English L&L.',
  },
  {
    q: 'Common evidence trap in essays?',
    a: 'Vague case studies. "In Syria there was war" is worthless. "The 2013 Ghouta chemical attack, allegedly by the Assad regime, killed ~1,400 civilians and became the catalyst for US \'red-line\' rhetoric" is usable. Every case example needs: place, date, actors, and a specific data point or event.',
  },
]
