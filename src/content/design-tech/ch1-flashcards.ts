import type { Flashcard } from '../types'

// Rewritten against Metcalfe & Metcalfe, Design and Technology 3rd ed. (IBID 2025),
// the textbook for the guide with first assessment 2027. The previous deck taught
// general HCI theory (Fitts's Law, affordances) and case studies from other courses
// (Ford Pinto, Dieselgate, Fairphone) that this syllabus does not use.

export const ch1Flashcards: Flashcard[] = [
  // ── A 1.1.1 Ergonomics ───────────────────────────────────────────
  {
    q: 'Give the IB definition of ergonomics.',
    a: 'Ergonomics is the relationship and interaction between people (aspects of the human body) and the products, systems and environments they use. It is also called human factors engineering.',
    hint: 'People ↔ products, systems, environments',
  },
  {
    q: 'Why do manufacturers invest in ergonomics? Give four reasons.',
    a: 'Products are more likely to be functional; more comfortable; safe and efficient to use; and products that excel ergonomically often gain market popularity and can command a premium price.',
    hint: 'The fourth one is commercial',
  },
  {
    q: 'What three adjustable features make an office chair ergonomic, and what does each achieve?',
    a: 'Adjustable height — feet flat on the floor with thighs parallel to the ground, maintaining a neutral spine position. Lumbar support — maintains the natural curve of the spine, prevents slouching, relieves pressure on spinal discs. Armrests — support arms and shoulders, preventing neck and shoulder strain.',
    hint: 'Height, lumbar, armrests',
  },
  {
    q: 'How does a Head-Up Display (HUD) address ergonomics in automotive design?',
    a: 'It projects critical driving information onto the windshield so the driver accesses customisable data without diverting their gaze from the road, addressing both safety and accessibility. Smartphone connectivity extends this by keeping hands on the wheel.',
    hint: 'Eyes stay on the road',
  },

  // ── A 1.1.2 Anthropometrics ──────────────────────────────────────
  {
    q: 'Name the TWO types of anthropometric data and define each.',
    a: 'Structural (static) — measurements such as those between joints, taken with standardised equipment like calipers, with the subject NOT moving; easy to collect. Functional (dynamic) — data obtained while the subject IS moving; harder to quantify but often of greater use because it shows the range and ease of movement.',
    hint: 'Two, not four — the book pairs the words',
  },
  {
    q: 'Give two examples each of structural and functional anthropometric data.',
    a: 'Structural (static): height, weight, body-structure dimensions. Functional (dynamic): reaction times, reach arcs, grip strengths.',
  },
  {
    q: 'Which anthropometric measurements are most and least reliable?',
    a: 'Most reliable and easily gathered: height and weight. Least reliable: body fat measured with skinfold calipers, which is often unreliable across a population sample.',
  },
  {
    q: 'Anthropometric data is meant to represent what — and how do investigators adjust?',
    a: 'The nude body. Where cultural restrictions prevent measuring unclothed subjects, investigators make allowances for the type and thickness of the clothes worn.',
  },
  {
    q: 'Name the four factors affecting anthropometric data, and one specific figure for gender.',
    a: 'Age, gender, ethnicity and disability. Men are on average taller and heavier due to hormonal influences; maximum male bone mass is around 50% greater than women’s, and women lose bone more quickly with age. Women generally carry a higher percentage of body fat.',
    hint: '50% greater bone mass',
  },

  // ── A 1.1.3 Percentiles ──────────────────────────────────────────
  {
    q: 'Define percentile, and say what the 70th percentile means.',
    a: 'Percentiles are 100 equal groups into which a sample population is divided according to the distribution of a variable. An individual in the 70th percentile has scored as well as, or better than, 70% of the sample population.',
  },
  {
    q: 'What percentage of people does the 5th–95th range cover within ONE gender, and in a MIXED population? Why the difference?',
    a: 'Within a single gender, 90% — only the top and bottom 5% fall outside. In a mixed population of half men and half women, 95% — because only the top 5% of men and the bottom 5% of women are excluded: (0.5 × 5%) + (0.5 × 5%) = 5%.',
    hint: '90 within, 95 mixed',
  },
  {
    q: 'What proportion of a normal distribution falls within ±1σ and ±2σ?',
    a: 'Approximately 68% within ±1 standard deviation, and approximately 95% within ±2 standard deviations. The distribution is also called Gaussian, or the bell curve, and is defined by the mean and the standard deviation (σ).',
    hint: '68 and 95',
  },
  {
    q: 'Give the book’s worked examples for designing to the 95th percentile only, and the 5th percentile only.',
    a: '95th only — the standard architectural doorway; the tallest can pass, so everyone smaller is catered for automatically. 5th only — vehicle controls, where ease of reach is the constraint, so data from those with the shortest reach sets the limit.',
  },
  {
    q: 'Why is designing for the mean (50th percentile) a poor strategy?',
    a: 'The majority of people are excluded — they fall outside that group. It is harder still when the range of users crosses age and/or gender boundaries.',
  },
  {
    q: 'Trace the crash test dummy case study with its dates.',
    a: '‘Sierra Sam’ — 95th percentile male, used by the aviation industry for ejection seats, helmets and pilot restraints. 1971 — General Motors created Hybrid I, a 50th percentile male. 1980s — first female dummy, essentially a scaled-down male that ignored anatomical differences. 2022 — Swedish researchers produced a dummy accurately reflecting female anatomy. THOR 5th is a 5th percentile female biofidelic ATD.',
    hint: 'Sierra Sam → Hybrid I → 1980s → 2022 → THOR 5th',
  },
  {
    q: 'What does the crash test dummy history reveal about design assumptions?',
    a: 'The lack of vehicle data for occupants other than a male driver left women and children outside design considerations, creating a significant gap in safety data. The Hybrid III family now covers a male, a smaller female and three children (6-year-old, 3-year-old, 12-month-old infant).',
  },

  // ── A 1.1.4 / A 1.1.5 Sizing ─────────────────────────────────────
  {
    q: 'Define designing for adjustability, and name the four means of adjustment.',
    a: 'Provision made within a design for adjustments accommodating the anthropometric variability between members of the user group — in short, adjustability avoids anthropometric mismatch. Adjustments may be mechanical, electrical, pneumatic or hydraulic.',
    hint: 'Avoids anthropometric mismatch',
  },
  {
    q: 'What is the standard adjustability regime, and why does it under-deliver in practice?',
    a: 'The 5th percentile of females to the 95th percentile of males, which would account for 95% of users IF human dimensions were always in the same proportion. They are not — a tall person can have short arms, a short person proportionally longer arms. Multivariate analysis shows more than 5% may be excluded on one or more dimensions, and the cost of accommodating every combination rises dramatically beyond that range.',
    hint: 'Proportions are not constant',
  },
  {
    q: 'Define a work (reach) envelope, and give the normal and maximum working radii.',
    a: 'The reach perimeter for a RANGE of users, defined as a three-dimensional space. Measured from the axis of bilateral symmetry: normal working area ≈ 40 cm, maximum ≈ 50 cm. Applications include desk workspace, kitchen and bathroom design.',
    hint: '40 and 50 cm',
  },
  {
    q: 'What viewing distance does the book specify for a workstation screen?',
    a: '450–600 mm. The workstation figure also specifies straight wrists, lumbar support for the lower back, adjustable seat height and feet flat on the floor.',
  },

  // ── A 1.1.6 Physiology ───────────────────────────────────────────
  {
    q: 'Define biomechanics and explain what designers assume about it.',
    a: 'The study of the mechanical laws relating to the movement of living organisms. Designers assume users can bring sufficient pressure to push a button or toggle a switch, or sufficient force to turn a can opener or corkscrew — assumptions resting on anthropometric data for strength, dexterity and fine motor control.',
  },
  {
    q: 'Which conditions undermine assumed biomechanical capability, and what is the design response?',
    a: 'Age-related muscle weakness, arthritis, Parkinson’s disease and multiple sclerosis. The response is special adaptations to the original design, or adaptive technologies that amplify biomechanical capabilities.',
  },
  {
    q: 'Explain the working principle of each of the three jar openers.',
    a: 'Metal opener — mechanical advantage from the length of the lever arm, plus a serrated metal contact strip raising frictional grip force. Soft-grip opener — a cone-shaped flexible rubber moulding fitting a range of lid sizes, relying on frictional resistance. Four-in-one opener — a 2nd order lever for mechanical advantage, rubber-lined metal giving a high coefficient of friction.',
    hint: 'Lever arm · friction · 2nd order lever',
  },
  {
    q: 'Why are lifeboats orange?',
    a: 'Orange is the most visible colour to the human eye, even in poor visibility or at night, and gives stark contrast against the blue of the sea — so rescue teams can spot the boat in dark, low-light or foggy conditions.',
  },
  {
    q: 'Name the four purposes for which designers engineer hearing.',
    a: 'Safety — volume limiters in software or hardware on devices like headphones. Privacy — soundproofing of offices and bedrooms, preventing noise ingress, egress or both. Alarms — acoustic properties and intensities engineered for transmission and penetration (sirens, smoke alarms). Environments — acoustic treatment of surfaces reducing echo and reverberation.',
    hint: 'Safety · privacy · alarms · environments',
  },

  // ── A 1.1.7 Psychology ───────────────────────────────────────────
  {
    q: 'Define environmental psychology and list the five office factors.',
    a: 'The study of the relationship between an environment and how it affects its inhabitants. For an indoor office: lighting, acoustics, air quality, temperature and worker densities.',
  },
  {
    q: 'What threshold defines ‘reasonable comfort’, and why is air temperature alone insufficient?',
    a: 'Reasonable comfort is achieved when 80% of a given population feels comfortable. Air temperature alone is not a valid indicator — air quality, building acoustics, lighting and worker densities all contribute. Radiant air temperature has the strongest influence because of the absorptive nature of the human body.',
    hint: '80%',
  },
  {
    q: 'Define defensible space and say who coined it.',
    a: 'An individual’s comfort zone or personal space, which varies and may be influenced by culture or upbringing. Coined by John Calhoun in the 1940s. Built into office design through judicious use of barriers or partitions to overcome the sense of overcrowding while keeping an open plan.',
    hint: 'Calhoun, 1940s',
  },
  {
    q: 'Give the advantages and disadvantages of open-plan offices.',
    a: 'Advantages: greater worker density, unrestricted space, removal of barriers to communication, a perception of space, freer air movement and light distribution. Disadvantages: reduced barriers to noise transfer, reduced personal privacy, greater visual distraction.',
  },

  // ── B 1.1 User-centred design ────────────────────────────────────
  {
    q: 'Give the book’s definition of user-centred design.',
    a: 'UCD focuses on understanding the needs, preferences and limitations of end-users throughout the product development process. It involves actively engaging users in an iterative process, gathering feedback and using it to prioritise the user when creating products and services that are usable, accessible and enjoyable.',
    hint: 'Usable, accessible, enjoyable',
  },
  {
    q: 'Name the four question sets a UCD plan should ask.',
    a: 'Understanding user needs; context of use; user experience; usability and accessibility.',
  },
  {
    q: 'Define field research and give its three techniques and three advantages.',
    a: 'Observing people in their natural environment to understand needs and normal behaviour, typically early in the design process. Techniques: field trials, ethnographic interviews, observation of everyday activities. Advantages: data obtained in the context of use; previously unrecognised issues discovered; no artificial effects of the kind laboratory testing generates.',
  },
  {
    q: 'Define the method of extremes and give the book’s two worked percentile rules.',
    a: 'Looking at the extremes of the user population distribution, which with the mean are used to design equipment for general use. Doorways, ladders, step heights and escape hatches — 95th percentile of males. Forces to operate control panel buttons — 5th percentile of females.',
    hint: '95th male clearance, 5th female force',
  },
  {
    q: 'How does universal design DIFFER from designing for extremes?',
    a: 'Universal design aims to create designs usable by all people to the greatest extent possible, WITHOUT the need for adaptation or specialised design. Designing for extremes still excludes members of the population beyond the chosen extremes.',
    hint: 'No adaptation needed',
  },
  {
    q: 'What is the observer effect, and what are the disadvantages of observation?',
    a: 'The presence of an observer changes the user’s actions, so steps must be taken to minimise it. Disadvantages: data can be complex to analyse; environmental noise may disguise small effects; observation is usually only performed on finished products.',
  },
  {
    q: 'Distinguish structured from unstructured interviews, and give one advantage of each.',
    a: 'Unstructured use predominantly open-ended questions, letting the interviewee answer in their own words — the interviewee can ask for clarification. Structured (researcher-administered) ask closed questions with fixed responses for a fair, objective, consistent evaluation — research suggests they are better at predicting actual user experiences.',
  },
  {
    q: 'Who developed the Likert scale and when? What range does it use?',
    a: 'The American social psychologist Rensis Likert, in 1932. It measures attitudes and opinions on a scale typically ranging from 1 to 5.',
    hint: 'Likert, 1932',
  },
  {
    q: 'How large is a focus group, and what are the leader’s four duties?',
    a: 'No more than 8–12 participants. The leader introduces the topic; maintains the discussion if it stalls; ensures all participants can express an opinion; redirects discussion on topic without stifling interaction.',
    hint: '8–12',
  },
  {
    q: 'Distinguish reliability from validity in a questionnaire.',
    a: 'Reliability is the repeatability of the response to a question. Validity is the degree to which the question measures what is intended.',
  },
  {
    q: 'Which questionnaire type suits early design, and which suits later evaluation?',
    a: 'Open-ended questions gather qualitative data and are useful in the early stages when determining the important issues. Fixed-response questions gather quantitative data and tend to be used in later evaluations of the design.',
  },
  {
    q: 'Who developed the System Usability Scale and when? What is the benchmark score?',
    a: 'John Brooke, in 1986. Ten Likert items; odd-numbered questions score highly for good usability, even-numbered score low. Scores run 0–100 and the average across industries and products is around 68.',
    hint: 'Brooke 1986, average 68',
  },
  {
    q: 'State the four steps of SUS scoring.',
    a: '1) Odd questions (1,3,5,7,9): subtract 1 from the response. 2) Even questions (2,4,6,8,10): subtract the response from 5. 3) Add the adjusted scores. 4) Multiply the sum by 2.5.',
  },
  {
    q: 'Define a persona, and explain why it is fictional but NOT hypothetical.',
    a: 'Personae are fictional constructs derived from ethnographic research and field trials, letting researchers focus on the behaviour of a user group with common goals. They are not hypothetical because they embody the results of extensive ethnographic research — what was seen during observation, rather than what members SAY they would do.',
    hint: 'Observed, not reported',
  },
  {
    q: 'Distinguish primary, secondary and anti-personae.',
    a: 'Primary represents the primary user population, whose requirements the design must satisfy. Secondary represents secondary populations, whose needs are accommodated where possible. An anti-persona represents someone the design is NOT intended for.',
  },
  {
    q: 'Give the Nielsen Norman Group definition of an anti-persona and two named examples.',
    a: '‘A representation of a user group that could misuse a product in ways that negatively impact target users and the business.’ McDonald’s uses them to avoid targeting or misinforming vegans. Trainline lets non-purchasers plan a journey, ensuring a positive experience for non-paying users. They are also used against hackers attempting data breaches, identity theft or denial-of-service attacks.',
    hint: 'McDonald’s vegans · Trainline · hackers',
  },
  {
    q: 'Define a use case.',
    a: 'A written description of how a user will interact with a product or design, seen from the user’s perspective, giving insight into usability as experienced by the user.',
  },

  // ── C 1.1.1 Responsibility ───────────────────────────────────────
  {
    q: 'To whom does a designer have responsibility, and what is the tension?',
    a: 'To the needs of clients, their community and the environment. The book calls these ‘sometimes competing interests’ — that tension is what an evaluation question is asking about.',
    hint: 'Client · community · environment',
  },
  {
    q: 'Name the five things designers are responsible for the ‘rational utilisation of’.',
    a: 'Materials, manufacturing processes, energy usage, recyclability and reusability — discharged by maintaining a critical contemporary understanding of the science and technologies needed to create designs.',
  },
  {
    q: 'Define Kaizen and trace it to PDCA.',
    a: 'Japanese for continuous improvement or change for the better — small gradual changes over time producing significant improvements, testing on a small scale before company-wide rollout. Introduced to Japan in the 1950s by W. Edward Deming during post-war reconstruction. Deming championed Walter A. Shewhart, whose cycle was PDSA (Plan, Do, Study, Act); through Deming’s work in Japan this became PDCA (Plan, Do, Check, Act).',
    hint: 'Deming · Shewhart · PDSA → PDCA',
  },
  {
    q: 'What is the Brundtland Report, and why does it matter to designers?',
    a: 'Also known as ‘Our Common Future’, published 1987 by the UN World Commission on Environment and Development, chaired by Gro Harlem Brundtland. It addressed environmental degradation and its relationship to development, and popularised the term ‘sustainable development’.',
    hint: '1987, Our Common Future',
  },
  {
    q: 'Give the fast fashion figures the book quotes.',
    a: 'Fast fashion contributes up to 8–10% of global CO₂, creates excessive waste and exacerbates microfibre pollution, with approximately 87% of textile waste going to landfill each year.',
    hint: '8–10% of CO₂, 87% to landfill',
  },
  {
    q: 'What is Minamata disease?',
    a: 'Mercury poisoning that arose in the 1960s, named after the Japanese village of Minamata, where residents were poisoned by eating fish contaminated by methylmercury discharged from a chemical factory into coastal water. Mercury can cause kidney damage, impaired hearing, vision and balance, coma and death.',
  },

  // ── C 1.1.2 Safety ───────────────────────────────────────────────
  {
    q: 'Define standardisation and product standards.',
    a: 'Standardisation is the establishment of common practices, methods or formats to ensure consistency, from international to country, state or company level. Product standards are documented guidelines specifying technical requirements for a product, ensuring its safety, quality, consistency and suitability for intended use — a benchmark for quality and performance.',
  },
  {
    q: 'Name the two toy safety standards and what each covers.',
    a: 'ASTM F963 (USA) — Standard Consumer Safety Specification for Toy Safety, covering material properties such as toxicology and flammability, and labelling of age range and functional hazards for children under 14. ISO 8124.1 (international) — Safety of Toys Part 1, mechanical and physical properties, with later parts on flammability and toxicology.',
    hint: 'ASTM F963 · ISO 8124.1',
  },
  {
    q: 'Name the three product safety enforcement authorities the book lists.',
    a: 'The Australian Competition & Consumer Commission (ACCC), the United States Consumer Product Safety Commission (CPSC), and the Product Safety Enforcement Forum of Europe (PROSAFE).',
  },
  {
    q: 'What are the three axes of the Standardisation Space model?',
    a: 'X — Domains (the subjects of standardisation). Y — Aspects each domain must comply with (terminology, specification, sampling and inspection, tests and analysis, limitation of variety, grading, code of practice, packaging/conservation/transport). Z — Levels: company, national, regional, international.',
  },
  {
    q: 'Trace the flintlock musket case study for interchangeable parts.',
    a: '1776 — Lt Gen Jean-Baptiste Vaquette de Gribeauval introduced mass-produced interchangeable parts (the système Gribeauval) for cannons. 1778 — Honoré Blanc extended it to the flintlock musket using standardised jigs and gauges, though components were still handmade. 1816–1818 — Americans John Hancock Hall (1816), Thomas Blanchard (1817) and Simon North (1818) introduced machinery enabling mechanised mass production and true interchangeability.',
    hint: 'Gribeauval → Blanc → Hall/Blanchard/North',
  },
  {
    q: 'What problem did interchangeable musket parts solve?',
    a: 'Repair previously required a skilled armourer or gunsmith because each weapon had numerous fragile, oddly shaped handmade components. Damaged parts could not be swapped in the field, so weapons returned to the armoury, causing long delays for service return.',
  },

  // ── C 1.1.3 Obsolescence ─────────────────────────────────────────
  {
    q: 'Name the four types of obsolescence in this syllabus.',
    a: 'Planned (built-in), style (fashion), functional, and technological.',
    hint: 'Not technical/systemic/aesthetic/notification — that is a different taxonomy',
  },
  {
    q: 'Define planned obsolescence and give the book’s historical case.',
    a: 'Also called built-in obsolescence — a deliberate tactic to create products with a limited lifespan, forcing repeat purchase while refreshing the product line. In the 1930s General Electric improved the efficiency of flashlight lamps through a corresponding decrease in their lifespan; engineers were encouraged to build items with limited lifespans to increase sales and boost the economy.',
    hint: 'General Electric, 1930s flashlights',
  },
  {
    q: 'List the five design features of planned obsolescence.',
    a: 'Low durability; style obsolescence; not easily or cheaply repaired; difficult to disassemble, restricting maintenance; regular introduction of newer technologies or ‘improved’ models. Collectively this approach is called value engineering.',
  },
  {
    q: 'What does the 1950s vs 2000s computer pairing illustrate?',
    a: 'A 1950s computer with vacuum tubes was unreliable but repairable; a 2000s computer with integrated circuits is reliable but unrepairable. It captures the reliability-versus-repairability trade-off in one line.',
  },
  {
    q: 'Define the Veblen effect.',
    a: 'Named after Thorstein Bunde Veblen (1857–1929), it describes counter-intuitive consumer behaviour where a premium price increases desirability — because pricing is taken as an indication of quality, and conspicuous consumption of expensive items confers social prestige.',
    hint: 'Higher price → more desirable',
  },
  {
    q: 'Give two style obsolescence case studies with their decades.',
    a: 'Zoot suits (1930s–40s) — high-waisted baggy trousers, long watch chain, long coat with wide lapels, pork pie hat; worn by African American, Mexican American, Filipino American, Italian American and Japanese American men; Cab Calloway called them ‘totally and truly American’ while critics called them unpatriotic for wasting material during WWII. Shoulder pads (1930s–40s, again 1980s) — military styling, then ‘power dressing’ projecting authority, popularised by Dynasty, Dallas, Princess Diana, Margaret Thatcher and Joan Crawford.',
  },
  {
    q: 'Which fashion case shows that obsolescence is NOT always one-way?',
    a: 'Bell-bottom (flared) jeans — popular in the 1960s, fell out of fashion in the late 1970s as 1950s straight jeans returned, then came back in the mid-1990s to 2000s under the name ‘boot-cut’.',
    hint: 'They came back',
  },
  {
    q: 'Define functional obsolescence and give two examples.',
    a: 'When something becomes less useful or desirable due to an outdated design or functionality, even if the technology still works. It leads to loss of value or depreciation and is hard to correct because the design is not easily updated. Examples: a house where you walk through one bedroom to reach another; dwellings with inadequate electrical systems for modern appliances.',
  },
  {
    q: 'Define technological obsolescence and give its key timing distinction.',
    a: 'When a technology is no longer useful or efficient compared to newer alternatives, applying to hardware and software. Critically, technological obsolescence can occur WELL BEFORE functional obsolescence — the thing still works, but better alternatives exist.',
    hint: 'It arrives first',
  },
  {
    q: 'Trace the sound recording chain of technological obsolescence with dates.',
    a: 'Edison’s cylinders (1877) → shellac 78s (1898) → polyvinyl 45 and 33 rpm discs (1948) → magnetic tape (1960s) → Compact Disc (1980) → electronically stored digital files and streaming services.',
    hint: '1877 → 1898 → 1948 → 1960s → 1980 → streaming',
  },
  {
    q: 'Trace the steel making chain of technological obsolescence.',
    a: 'Bessemer Converter (1856) → Open Hearth Furnace (1860s) → Basic Oxygen Furnace (1948) and Electric Arc Furnace. The EAF was first introduced commercially in 1901 but became widely used from the 1960s, as steel scrap became more available.',
  },
]
