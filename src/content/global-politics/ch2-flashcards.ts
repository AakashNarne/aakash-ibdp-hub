import type { Flashcard } from '../types'

export const ch2Flashcards: Flashcard[] = [
  // ── 2.1 Definition ───────────────────────────────────────────────
  {
    q: 'Define power in the IB Global Politics sense and name its three key properties.',
    a: 'Power is the ability to affect change — to make actors do (or not do) something they otherwise would not, or to shape the environment in which choices are made. Three properties: (1) contested — no universal definition, (2) relational — a relationship between actors, not a thing an actor "has", (3) dynamic — power distributions shift over time.',
    hint: 'Contested · Relational · Dynamic',
  },
  {
    q: "Give Dahl's definition of power.",
    a: 'A has power over B to the extent A can get B to do something B would not otherwise do (Dahl, 1957). Behavioural, relational, focuses on visible influence over decisions — corresponds to Lukes\' first face of power.',
  },
  {
    q: 'What is Susan Strange\'s key contribution to power theory?',
    a: 'Structural power (States and Markets, 1988) — control over the frameworks and rules within which everyone operates. Four domains: security, production, finance, knowledge. Deeper than Nye\'s relational classifications: rule-setters do not need to coerce anyone individually because outcomes are pre-arranged.',
    hint: 'Rules, not outcomes',
  },

  // ── 2.2 Nye (hard/soft/smart) ────────────────────────────────────
  {
    q: 'Name Nye\'s three ways to affect others and which are hard vs soft.',
    a: '(1) Threats (sticks) — hard power. (2) Payments (carrots) — also hard power (economic inducement). (3) Attraction (co-option) — soft power. Command power = coercion/payment. Co-optive power = getting others to WANT what you want.',
  },
  {
    q: 'Give Nye\'s three primary sources of a country\'s soft power.',
    a: '(1) Culture — where attractive to others (Hollywood, K-pop, Bollywood, universities, cuisine). (2) Political values — when the country LIVES UP to them at home and abroad (hypocrisy destroys this; Guantánamo gutted US soft power). (3) Foreign policies — when seen as legitimate and moral (2003 Iraq destroyed; 1991 Gulf coalition preserved).',
    hint: 'Culture · Values · Foreign policy',
  },
  {
    q: 'Define smart power (Nye) and give one example.',
    a: 'The deliberate combination of hard and soft power — strategic intelligence about which type to deploy when. Not a portfolio, a STRATEGY. Examples: Marshall Plan (1948 — aid + strategic alignment); Belt and Road Initiative (loans + infrastructure + political leverage); US backing of Ukraine 2022–26 (arms + intelligence + Zelensky-narrative amplification + sanctions).',
  },
  {
    q: 'What is Nye\'s "power conversion" and why does it matter?',
    a: 'Countries have power RESOURCES (population, GDP, military, cultural exports) that must be CONVERTED into power OUTCOMES (achieving what they want). Conversion is not automatic — Vietnam-era US, USSR, and Russia in Ukraine had resources but poor outcomes. Strategy and legitimacy are what convert resources into outcomes.',
    hint: 'Resources ≠ Outcomes',
  },
  {
    q: 'Give four limits of soft power.',
    a: '(1) Slow — cultural attraction builds over decades. (2) Uncontrollable — governments cannot dictate what makes their culture attractive. (3) Contextual — what attracts one audience repels another (Iran vs Western liberalism). (4) Vulnerable to backlash — perceived cultural imperialism generates counter-movements.',
  },
  {
    q: 'State Nye\'s rule of thumb on hard vs soft power.',
    a: 'The more you rely on hard power, the more soft power you LOSE over time. Bullies are not loved. And countries only loved are not respected. The smart-power move is knowing when each is needed.',
  },

  // ── 2.3 Strange (structural) ─────────────────────────────────────
  {
    q: 'Name Susan Strange\'s four structural power domains and one example each.',
    a: 'SECURITY (US alliance system — NATO, US-Japan, AUKUS); PRODUCTION (WTO rules, MNC supply-chain chokepoints, China rare-earth processing); FINANCE (US dollar reserve status, SWIFT, IMF conditionality); KNOWLEDGE (Silicon Valley platform standards, US chip design ecosystem — ASML/TSMC/Nvidia).',
    hint: 'Security · Production · Finance · Knowledge',
  },
  {
    q: 'How is structural power exercised through the US dollar and SWIFT?',
    a: 'The dollar is ~58% of global reserves and ~88% of forex-trade turnover. Any actor whose bank touches the dollar system is exposed to US sanctions. Freezing ~$300B of Russian reserves in 2022 was possible ONLY because of dollar structural power. SWIFT is the messaging backbone — cutting Russian banks off SWIFT (March 2022) was rule-change coercion, no physical infrastructure changed.',
  },
  {
    q: 'What is the 2026 semiconductor structural power chokepoint?',
    a: 'The US-Netherlands-Taiwan advanced-chip stack: Nvidia designs (US), ASML makes lithography machines (Netherlands), TSMC fabricates (Taiwan). US extends export controls THROUGH this stack — Chinese firms cannot buy chips or the machines that make them. China\'s counter-leverage: rare-earth export controls, its own structural chokehold in the production domain.',
    hint: 'ASML · TSMC · Nvidia',
  },
  {
    q: 'Distinguish relational from structural power in one sentence.',
    a: 'RELATIONAL: A gets B to do X in a specific transaction (trade deal, UN veto, arms deal). STRUCTURAL: A shapes the ENVIRONMENT so B\'s choices are already constrained toward what A wants — no specific bargaining needed. Structural is more consequential, harder to see.',
  },

  // ── 2.4 Power OVER/TO/WITH/WITHIN ────────────────────────────────
  {
    q: 'Name the four types in the Rowlands/Follett empowerment typology.',
    a: 'Power OVER — coercive, zero-sum, one actor over another. Power TO — generative capacity/agency to act. Power WITH — collective, coalitional, solidarity-based. Power WITHIN — internal dimension: self-worth, dignity, sense of agency.',
    hint: 'Over · To · With · Within',
  },
  {
    q: "Give one concrete example of each of the four types (Rowlands framework).",
    a: 'OVER: authoritarian government suppressing dissent; abusive employer over gig workers. TO: literacy programme giving women the power to read contracts; voter registration. WITH: farmers\' protest 2020–21 uniting across state and caste lines; NATO as state-level "power with". WITHIN: 1970s consciousness-raising; Ambedkar\'s insistence on Dalit self-respect; Steve Biko\'s Black consciousness; indigenous language revitalisation.',
  },
  {
    q: 'Why does the power WITHIN type matter for development and empowerment?',
    a: 'A person or community that lacks power WITHIN cannot exercise power TO, cannot form power WITH, and remains vulnerable to power OVER. It is the foundation for all other kinds. Development projects that give resources (power to) without building solidarity (with) or self-worth (within) tend to fail.',
  },
  {
    q: 'Contrast Nye and Rowlands/Follett as power frameworks.',
    a: 'NYE — fundamentally about STATES and how they get outcomes internationally (attraction vs coercion vs payment). ROWLANDS/FOLLETT — works across SCALES (individuals, communities, movements, states); neutral about mechanism. Strong Paper 2 move: use Nye for state-level analysis, Rowlands/Follett for sub-state and non-state dimensions of the same case.',
  },

  // ── 2.5 Lukes ────────────────────────────────────────────────────
  {
    q: "Name Lukes' three faces of power (1974).",
    a: 'FIRST — decision-making power (direct coercion or influence over decisions; visible; Dahl\'s conception). SECOND — agenda-setting power (deciding what gets discussed at all; non-decisions as power; Bachrach & Baratz). THIRD — ideological/preference-shaping power (convincing others their interests align with yours so no coercion needed; manufactured consent; Foucault).',
    hint: 'Decisions · Agenda · Preferences',
  },
  {
    q: 'Give an example of each of the three faces using the US dollar system.',
    a: 'FIRST: US Treasury freezes Russian reserves; Iran cut off from banking. SECOND: dollar dominance keeps alternative currencies off G7 policy debate; de-dollarisation was barely discussed pre-2022 despite being technically obvious for decades. THIRD: dollar pricing of oil and reserves treated as NATURAL rather than a choice — the system is naturalised.',
  },
  {
    q: 'Which of Lukes\' three faces is the most consequential and why?',
    a: 'The THIRD face (preference-shaping). If you can shape what people WANT, you do not need to force them to comply. Hardest to detect (looks natural, not coerced), most durable (built into common sense), and most powerful. Deepest form of soft power and structural power.',
  },

  // ── 2.6 Polarity ─────────────────────────────────────────────────
  {
    q: 'Define unipolar, bipolar, multipolar, and non-polar systems with an example of each.',
    a: 'UNIPOLAR — one dominant power (post-1991 to ~2008: US as sole superpower — Krauthammer\'s "unipolar moment"). BIPOLAR — two roughly balanced great powers (Cold War 1945–91: US vs USSR). MULTIPOLAR — three or more comparable power centres (pre-WWI Europe; today: US, China, EU, India, Russia + regional). NON-POLAR (Haass) — power diffused across many state and non-state actors, no clear hierarchy (2020s per some scholars).',
  },
  {
    q: 'What term captures the current global power distribution and give three pieces of evidence.',
    a: '"Contested multipolarity". Evidence: (1) China\'s GDP ~75% of US nominal, already larger at PPP; (2) BRICS+ expansion Jan 2024 (Egypt, Ethiopia, Iran, UAE) and 2026 de-dollarisation push; (3) India as 5th-largest economy, expected 3rd by 2027–2030; (4) US retrenchment signals under Trump 2.0 pushing EU toward strategic autonomy.',
    hint: 'Any three signals',
  },
  {
    q: 'How do realists and liberals differ on which polarity is most stable?',
    a: 'REALISTS (Waltz, Mearsheimer): bipolarity most stable (clear balance); multipolarity most conflict-prone (many uncertain alignments); unipolarity transitional (challengers rise). LIBERALS: polarity matters less than institutions and interdependence — a multipolar world dense with cooperation can be peaceful; a bipolar world with no rules can be catastrophic.',
  },

  // ── 2.7 Indicators ───────────────────────────────────────────────
  {
    q: 'Name six dimensions of power and one indicator for each.',
    a: 'MILITARY (SIPRI defence spending, nuclear arsenal, aircraft carriers). ECONOMIC (GDP nominal/PPP, share of global trade, reserve currency status). TECHNOLOGICAL (R&D spending, patents, AI/semiconductor leadership). DIPLOMATIC (UNSC seat, number of embassies, treaty ratifications). SOFT/CULTURAL (cultural exports, foreign student attractiveness, global media reach). STRUCTURAL (ability to set global rules — WTO, IMF, ICANN; dominance of SWIFT, dollar, undersea cables).',
  },
  {
    q: 'Give the analytical move showing India ranks HIGH on some dimensions and LOW on others.',
    a: 'HIGH: economic (5th largest economy, expected 3rd by 2027–30), demographic (largest population, young). MEDIUM/LOW: military (regionally strong, globally limited force projection), structural (IMF voting share modest, no UNSC permanent seat), per-capita GDP still low. Democratic legitimacy is a distinctive HIGH that distinguishes India from China.',
  },

  // ── 2.8 Rising / declining ───────────────────────────────────────
  {
    q: "Give one-sentence realist, liberal, and constructivist readings of China's rise.",
    a: 'REALIST — classic rising challenger to US; Thucydides Trap dynamics. LIBERAL — China is INSIDE many institutions and benefits from the current order. CONSTRUCTIVIST — China\'s identity as a "civilisational state" shapes its exceptionalist claims.',
  },
  {
    q: 'Why is Russia often called a "great power in one dimension only"?',
    a: 'Enormous nuclear arsenal + P5 UNSC veto = major hard-power / diplomatic status. BUT economy is only ~10% of US size (similar to Italy). Ukraine war has revealed the LIMITS of Russian conventional military power while confirming willingness to use force. Great power in nuclear/veto/territorial ambition without matching economic base.',
  },
  {
    q: 'What is India\'s "multi-alignment" or "strategic autonomy" posture in 2026?',
    a: 'Simultaneous engagement across QUAD (US, Japan, Australia — Indo-Pacific security), SCO (China, Russia, Central Asia — regional cooperation), and BRICS founder. Not non-alignment (Nehru) but selective engagement with all clubs. Sept 2026 signal: Modi publicly told Putin to end the Ukraine war while staying silent on Trump\'s deal and Netanyahu — a calibrated multi-alignment.',
  },
  {
    q: 'Give three examples of non-state or network power that rival state power.',
    a: 'Apple market cap > GDP of all but ~10 states. Meta/Google/X shape info environments of 5+ billion people. ISIS at 2014–17 peak controlled territory the size of the UK without statehood. Amnesty and HRW shape human-rights discourse on budgets a fraction of a mid-sized state. Nvidia\'s AI-chip near-monopoly gives it structural power over the 2026 AI race.',
  },

  // ── 2.9 2026 Case Studies ────────────────────────────────────────
  {
    q: 'Describe the US–China chip war (2022–2026) using at least three power classifications.',
    a: 'HARD POWER — US export controls as economic coercion (sequential tightening 2022–24, partial cool-down 2026). STRUCTURAL POWER — chokehold on advanced-chip stack (US/ASML/TSMC). LUKES SECOND FACE — US shapes what counts as "national-security tech". ASYMMETRIC INTERDEPENDENCE — both sides hurt by decoupling, unequally. CHINA\'S COUNTER — rare-earth export controls (its own structural chokehold in production).',
  },
  {
    q: 'Summarise the Russia-Ukraine war state as of September 2026 and its power lessons.',
    a: 'Feb 2022 invasion; multiple 2026 truces (April, May); September 2026 US envoys in Kyiv and Moscow negotiating Trump peace proposal, fighting continuing alongside talks. Lessons: hard power exposed (Russian military underperformance); soft power (Zelensky narrative winning global sympathy); structural power (Western dollar/SWIFT sanctions); sovereignty violated; interdependence weaponised (gas, grain).',
  },
  {
    q: 'What is the 2026 BRICS de-dollarisation agenda and what power classifications does it engage?',
    a: 'BRICS+ (expanded Jan 2024 with Egypt, Ethiopia, Iran, UAE) foregrounded de-dollarisation at 2026 summit prep — bilateral currency swaps, cross-border payment systems, BRICS unit of account discussions. Engages STRUCTURAL POWER (finance domain contest with the US); SOFT BALANCING; RELATIONAL vs STRUCTURAL contest (BRICS attempts to change the RULES not just individual outcomes).',
  },
  {
    q: 'How do the 2024–26 ICC arrest warrants illustrate the power-sovereignty interface?',
    a: 'March 2023 Putin warrant (Ukrainian children deportation); Nov 2024 Netanyahu, Gallant, and Hamas leader warrants (Gaza). State responses split — some ICC parties committed to arrest; South Africa arm-wrestled at BRICS 2023 and invoked domestic law; Hungary hosted Netanyahu 2025 without arrest and withdrew from ICC. Illustrates structural power of a norm-setting IGO meeting Westphalian state sovereignty — and revealing the real limits of international law.',
  },
  {
    q: "What triggered the EU's 2026 'independence moment' and what power framework fits best?",
    a: 'Trigger: Trump 2.0 retrenchment from NATO and Ukraine + the 2024 Draghi report diagnosing European strategic dependency. 2026 actions: defence-spending surge, joint borrowing for defence, Ukrainian defence innovation absorbed into EU industrial base. Best fit: POWER TO (building EU capacity independent of US) + POWER WITH (member coordination) + STRUCTURAL POWER attempt (EU-owned defence-industrial base rather than depending on US primes).',
  },
  {
    q: 'Why is Taiwan the sharpest case study spanning power and sovereignty?',
    a: 'Illustrates all four power classifications: HARD (PLA naval expansion, drills); SOFT (Taiwan democracy narrative); STRUCTURAL (TSMC as global economy chokepoint — indispensable to the chip supply); RELATIONAL (grey-zone coercion). AND directly links to sovereignty (de facto vs de jure contested status; ~12 states recognise ROC diplomatically). Highest-yield case study spanning both SA1 concepts.',
    hint: 'All four power types + sovereignty',
  },

  // ── 2.10 Theoretical lenses ──────────────────────────────────────
  {
    q: "Give one-sentence realist / liberal / constructivist readings of Russia's 2022 invasion of Ukraine.",
    a: 'REALIST — great-power politics as usual; Russia acted to preserve sphere and prevent NATO encroachment (Mearsheimer). LIBERAL — institutions and norms responded (UNGA condemnation by 141 states, ICC warrant, coordinated sanctions); the response validates the liberal system. CONSTRUCTIVIST — identity is central (Putin\'s Russkiy Mir narrative; Ukrainian identity Europeanised; German Zeitenwende; Finland/Sweden ended neutrality).',
  },

  // ── 2.11 Power-sovereignty interface ─────────────────────────────
  {
    q: 'Why is it a strong exam move to link power and sovereignty in every essay?',
    a: 'They are the two SA1-priority concepts and they interact constantly. Structural power (ICC, WTO, IMF) constrains sovereignty. Hard power (invasion, sanctions) violates or contests sovereignty. Soft power shapes the LEGITIMACY of sovereign choices. Pooled sovereignty (EU) is a voluntary trade of sovereignty for pooled power. In any P2 question naming one, at least one paragraph should invoke the other.',
  },

  // ── 2.12 Definitions ─────────────────────────────────────────────
  {
    q: 'Define the security dilemma.',
    a: 'A state\'s efforts to increase its own security (buying weapons, building alliances) APPEAR THREATENING to other states, which respond by increasing their security, threatening the first state further. Even purely defensive actions produce arms races. Examples: India-Pakistan nuclear posture; US-USSR Cold War; China naval expansion → US Indo-Pacific rebalance → China feels encircled → further expansion.',
  },
  {
    q: 'What is the Thucydides Trap (Graham Allison)?',
    a: 'The tendency for a rising power\'s challenge to an established one to end in war. Allison documented 16 historical cases of rising vs established powers; 12 ended in war. The US-China rivalry of the 2020s is frequently framed through this lens.',
    hint: 'Rising challenger + established hegemon',
  },
  {
    q: 'Define soft balancing.',
    a: 'Non-military ways states resist a dominant power — coalition-building (BRICS+), institutional workarounds (New Development Bank vs World Bank), symbolic dissent (UNGA resolutions), and economic decoupling from the dominant currency system (de-dollarisation). Contrast with hard balancing (military build-up, alliance formation aimed at war-fighting).',
  },
  {
    q: "What are 'relative gains' in realist theory?",
    a: 'Realists argue states care about how much they gain COMPARED TO COMPETITORS more than about absolute gains. If a trade deal makes India $10bn richer and China $30bn richer, a realist Indian government might reject it — the economy grew, but the power GAP widened. This is why realists are skeptical of free-trade optimism: trade creates wealth but redistributes power, sometimes to rivals.',
  },

  // ── 2.13 Traps ───────────────────────────────────────────────────
  {
    q: 'Name three common exam traps in P1/P2 power questions.',
    a: 'Any three: naming a type of power without applying it ("Russia used hard power" earns nothing); treating power as a THING rather than a relationship; ignoring structural power (only citing hard and soft); confusing smart power with a hard+soft mix rather than a strategic choice; assuming polarity is fixed; skipping the third face of power; state-only analysis (no non-state actors); ignoring counter-perspectives; forgetting to link power to sovereignty.',
  },
]
