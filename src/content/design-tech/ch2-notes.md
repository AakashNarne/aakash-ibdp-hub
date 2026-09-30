---
title: "DT A1.1 — Ergonomics — Notes"
subject: Design Technology SL
topic: "A1.1 Ergonomics"
syllabus_ref: "A1.1"
type: notes
source: "Metcalfe & Metcalfe, Design and Technology (3rd ed., IBID 2025), A1.1 Ergonomics, PDF pp. 8–19 (printed pp. 1–12); Gordon et al. (2014), 2012 Anthropometric Survey of U.S. Army Personnel, NATICK/TR-15/007 + ANSUR II public CSVs; HSE INDG143(rev4) Manual handling at work; old-guide deck Human Factors and Ergonomics.pdf (explanation only)"
date: 2026-09-30
status: draft
tags: [class-notes, DesignTech, IBDP]
---
# DT A1.1 — Ergonomics

**Guiding question (IB):** *How do ergonomic considerations influence the design of a product?*
**Sits in:** Theme A (Design in theory) · Strand 1 (People). See [[_Syllabus Index]].

> [!tip] If you remember nothing else
> - **Ergonomics** = the relationship and interaction between people and the products, systems and environments they use. It has three data families: **anthropometric** (size), **physiological** (body systems, strength, biomechanics), **psychological** (senses, mind, environment).
> - **Reach → 5th percentile** (smallest user must reach). **Clearance → 95th percentile** (largest user must fit). **Adjustability → 5th percentile female to 95th percentile male.**
> - Designing for the **50th percentile / "average" excludes most people** — Daniels found *none* of 4,063 USAF pilots was "average" on all 10 key dimensions.
> - 5th–95th of **one** sex = 90% accommodated; 5th female → 95th male in a 50:50 population ≈ 95% — but **only for one dimension at a time**. Across several dimensions at once, accommodation falls (multivariate problem).
> - Two strategies to cover a percentile range: **adjustability** and/or a **range of sizes**.

---

## Assessment context

| Paper | Weight | How A1.1 shows up |
|---|---|---|
| Paper 1 (1 h) | 20% | MCQ — definitions (ergonomics vs anthropometrics vs biomechanics), which percentile for reach/clearance, % accommodated |
| Paper 2 (1 h 30) | 40% | Short answer (*define, outline, state*) + extended response (*explain, discuss, evaluate*) on a given product |
| Design project (IA) | 40% | Your **redesign** must justify dimensions with named anthropometric data and percentiles — this is where A1.1 earns marks in Criteria A/B/D |

| Command term | What the examiner wants in A1.1 |
|---|---|
| **Define / State** | The textbook content statement, near-verbatim (boxes below) |
| **Outline** | One-sentence account + one feature, e.g. "outline one difference between static and dynamic data" |
| **Explain** | Cause → effect: *why* reach uses 5th %ile ("so that the smallest user can…, therefore larger users also can") |
| **Discuss / Evaluate** | Both sides + judgement: adjustability vs range of sizes (cost, complexity, fit, users outside range) |

---

## A1.1.1 Ergonomics

> [!example] Content statement (examiner-acceptable definition)
> **Ergonomics** is the relationship and interaction between people (aspects of the human body) and the products, systems and environments they use.

- Also called **human factors (engineering)** — P1 MCQ bait ("Human factors design is also known as: ergonomic design").
- Why it matters: functional, comfortable, **safe and efficient** products; strong ergonomics can command a **premium price**.
- Textbook application examples (use one per answer, tied to a feature):

| Product | Ergonomic feature → benefit |
|---|---|
| Office chair | Adjustable height (feet flat, thighs parallel), adjustable lumbar support (natural spinal curve), adjustable armrests (less neck/shoulder tension) |
| Microsoft Natural Ergonomic Keyboard 4000 | Split/angled layout + wrist support → less wrist strain |
| Car HUD (head-up display) | Info projected on windscreen → eyes stay on road |
| Chef's knife | Balance (weight distribution), non-slip textured handle → control and safety |

---

## A1.1.2 Anthropometrics

> [!example] Content statement
> **Anthropometrics** involves the measurement of human physical dimensions expressed in the percentile range, focusing on determining and presenting the range of individuals' physical characteristics.

| | **Static / structural data** | **Dynamic / functional data** |
|---|---|---|
| Definition | Measurements of a body **not moving**, typically between joints | Measurements taken **while the body moves/performs a task** |
| Examples | Stature, popliteal height, hip breadth, mass | Reach arcs, grip strength, reaction time, range of joint movement |
| Collection | Easy; standardised calibrated instruments (calipers, anthropometer) | Harder to quantify; video, motion capture, simulation |
| Use | Clearances, seat dimensions | Reach envelopes, controls — often **more useful** because it shows the range and ease of movement |

**Data quality** (a frequent *explain* question):
- Instruments must be **calibrated and sturdy** → reliable results.
- Height and mass are reliable; **skinfold body-fat data are often unreliable** across a population.
- Data should represent the **nude body**; if cultural norms require clothing, investigators apply **clothing allowances**.
- Data are only valid for the **population sampled** — e.g. ANSUR II is US Army personnel, and its own publisher warns it is *not* an approximation of US civilians ([OPEN Design Lab, Penn State](https://www.openlab.psu.edu/datasets/ansur2/)). For an Indian user group you'd need Indian data.

**Factors affecting anthropometric data** (textbook):
- **Gender** — men on average taller and heavier; male peak bone mass ≈ 50% greater; women higher % body fat.
- **Ethnicity** — body proportions and health indicators (e.g. waist-to-hip ratio) differ between groups.
- **Age** — children grow; older users lose bone/strength (links to physiology, below).
- **Disability** — e.g. cerebral palsy, muscular dystrophy; wheelchair users may differ in upper-body strength and proportions → different design data. → deeper treatment in [[DT C1.2 — Inclusive design — Notes]].

---

## A1.1.3 Percentiles

> [!example] Content statement
> **Percentiles** aid in the selection of appropriate anthropometric data to satisfy the majority of a user population.

- **Percentile** = one of 100 equal groups a sample is divided into by the value of a variable. A person at the **Nth percentile** is equal to or larger than N% of the sample on that dimension.
- **Percentile range** measures dispersion; written **P95 – P5**.
- **Normal (Gaussian) distribution**: bell curve, defined by the **mean** and **standard deviation (σ)**. ±1σ ≈ 68%, ±2σ ≈ 95%. The 5th and 95th percentiles lie at **mean ± 1.645σ**.

$$P_5 = \bar{x} - 1.645\sigma \qquad P_{95} = \bar{x} + 1.645\sigma$$

**Which percentile?**

| Constraint | Percentile | Logic | Examples |
|---|---|---|---|
| **Reach** (must get to it) | **5th** (female) | If the smallest can reach, everyone bigger can | Vehicle controls, shelf height, emergency stop |
| **Clearance** (must fit through/under/in) | **95th** (male, *usually*) | If the largest fits, everyone smaller fits | Doorways, legroom, seat width* |
| **Adjustable** | **5th F → 95th M** | Range covers both ends | Car seat, office chair, ironing board |
| **Average** | 50th | Only where one fixed value is unavoidable and the stakes are "typical" | Crash test dummy Hybrid I (GM, 1971, 50th %ile male) |

\*Seat width is a trap: sitting hip breadth is **larger in women** (see worked example), so clearance uses the 95th percentile **of whichever group is larger on that dimension**.

**Crash-test dummies (textbook case study, great for *discuss*):** Sierra Sam (95th %ile male, aviation) → Hybrid I (GM 1971, 50th %ile male) → 1980s female dummy that was just a scaled-down male → **THOR 5th** (5th %ile female, biofidelic) and the Hybrid III family (male, small female, 6-yr, 3-yr, 12-month). Point: designing from one percentile of one group left women and children outside safety data.

> [!example] "There is no average pilot" — Daniels (1952)
> Lt Gilbert S. Daniels (Aero Medical Laboratory, Wright Air Force Base) took data from **4,063 pilots** and the **10 dimensions** most relevant to cockpit design (incl. height, chest circumference, sleeve length). He defined "average" generously as the **middle 30% of the range** on each dimension. **Not one pilot was average on all 10**; on just three dimensions (e.g. neck, thigh, wrist circumference) **fewer than 3.5%** were average on all three. The Air Force responded by requiring fit to the individual → **adjustable seats, adjustable foot pedals, adjustable helmet straps**.
> Source: Daniels, G.S., *The "Average Man"?*, Technical Note WCRD 53-7, Wright Air Development Center, Dec 1952 (AD 10 203), as reported in Todd Rose, *The End of Average* (excerpt, [Toronto Star, 16 Jan 2016](http://www.thestar.com/news/insight/2016/01/16/when-us-air-force-discovered-the-flaw-of-averages.html)); report citation confirmed in [DTIC bibliography ADA198345](https://apps.dtic.mil/sti/pdfs/ADA198345.pdf) and [HFES Guidelines for Using Anthropometric Data](https://www.hfes.org/Portals/0/Publications/Guidelines_AnthropometricData.pdf). *(Original 1952 report not read directly.)*
>
> **Modern re-check (my own calculation, ANSUR II public male data, n = 4,082):** using the same idea (35th–65th percentile on 10 dimensions: stature, chest, sleeve length, crotch height, vertical trunk, neck, waist, thigh, buttock–knee length, hand circumference), only **4 of 4,082** soldiers were "average" on all ten. Daniels' conclusion still holds.

### Diagram: normal distribution / percentile curve — what earns marks
- **x-axis:** the body dimension with **units** (e.g. "Popliteal height / mm"). **y-axis:** "Frequency / number of people".
- Symmetrical **bell curve**; peak at centre labelled **mean = 50th percentile** (= median = mode for a normal curve).
- Vertical lines at **P5** and **P95** (at −1.645σ and +1.645σ); optionally σ marks −3σ…+3σ on the axis.
- **Shade between P5 and P95 → label "90% accommodated"**; label each tail **"5% excluded"**.
- For a mixed population: draw **two overlapping curves** (female left, male right), mark **F P5** and **M P95**, label the range between them "≈95% of a 50:50 population".
- Adjustability version (textbook Fig A1.1.4a): a bracket under the curve labelled "range accommodated by adjustment".

---

## A1.1.4 Product sizing

> [!example] Content statement
> To ensure products are appropriate to a range of percentiles, designers can choose to design products to be **adjustable** and/or to be produced in a **range of sizes**.

- **Designing for adjustability** = provision within the design to accommodate anthropometric variability between members of the user group — it **avoids anthropometric mismatch**. Mechanisms: mechanical, electrical, pneumatic (office-chair gas lift), hydraulic.
  - Examples: car seat height + steering wheel reach/rake; office chair height + backrest tilt; ironing board height positions.
- **Range of sizes** = discrete fixed sizes (clothing S/M/L, shoe sizes, bicycle frames).
- **Both:** garments in sizes *plus* drawstrings, elastic, belts, adjustable straps.
- **5th–95th is a trade-off**: covers almost everyone, excludes extremes; cost rises steeply beyond it. Users outside need **customised** solutions.

| | Adjustability | Range of sizes |
|---|---|---|
| + | One product fits many; fits the user as they change (growth, shoes, task) | Simple, robust, cheaper per unit, no moving parts |
| − | More parts, cost, weight, failure points; users may not adjust correctly | Stock/inventory of several SKUs; gaps between sizes; user must pick right size |

---

## A1.1.5 Sizing considerations

> [!example] Content statement
> In design, consideration must be given to **work envelopes, reach, clearance, adjustability and range of sizes**.

- **Work envelope** = the reach perimeter for a range of users, defined as a **three-dimensional space** (P1 MCQ wording). Textbook Fig A1.1.5b shows **normal** vs **maximum** working areas in the horizontal plane (desk, kitchen, bathroom layout).
- **Reach** — 5th percentile; data from tables, dynamic measurement, video or simulation; affected by clothing.
- **Clearance** — 95th percentile; space for the body to pass, fit or move.
- **Adjustability** — 5th %ile female to 95th %ile male ≈ 95% of a mixed population **per dimension**.
- **Multivariate problem:** a tall person can have short arms. Using 5th–95th on several dimensions at once excludes **more than 5%**. Accommodating every combination is not usually cost-justified.
- Workstation (textbook Fig A1.1.5a): viewing distance, straight wrists, lumbar support, adjustable seat height, feet on floor — the adjustable chair + screen make a fixed desk work for most users.

> [!example] Worked example — office chair seat-height range from ANSUR II (real, verified data)
> **Dataset:** ANSUR II (2012 Anthropometric Survey of U.S. Army Personnel), 1,986 women and 4,082 men. Gordon et al., NATICK/TR-15/007. Summary report: [PDF](http://tools.openlab.psu.edu/publicData/ANSURII-TR15-007.pdf) via [OPEN Design Lab](https://www.openlab.psu.edu/datasets/ansur2/).
>
> **Step 1 — pick the critical dimension.** Seat height is set by **popliteal height** (floor to the back of the knee, seated, knees at 90°). A seat higher than this leaves feet dangling and presses on the underside of the thigh; too low raises the knees.
>
> **Step 2 — read the percentiles** (TR-15-007, "(66) Popliteal height", report p. 175):
>
> | Popliteal height (mm, barefoot) | 5th | 50th | 95th | Mean | SD |
> |---|---|---|---|---|---|
> | Women | 350 | 387 | 428 | 388.2 | 23.6 |
> | Men | 390 | 430 | 471 | 429.8 | 24.8 |
>
> Check with the formula: women $P_5 = 388.2 - 1.645(23.6) = 349.4 \approx 350$ mm ✓.
>
> **Step 3 — set the range.** Lowest setting = **5th %ile female (350 mm)** so the smallest user can put feet flat. Highest = **95th %ile male (471 mm)** so the largest user's thighs are level. **Range ≈ 350–471 mm (adjustment travel ≈ 121 mm).**
>
> **Step 4 — check accommodation.** From the public ANSUR II data, 350–471 mm accommodates **95.2% of women and 95.1% of men** (my calculation) — the textbook's "≈95%" works for a single dimension.
>
> **Step 5 — allowances.** The data are **barefoot**, so add a **shoe allowance** to both ends. *(A value of ~25 mm is often used; this figure is an illustrative assumption, not verified from a source — state your own assumption in an exam.)* → ≈ 375–496 mm.
>
> **Step 6 — multivariate reality check.** On four seat dimensions at once (popliteal height, buttock–popliteal length, sitting hip breadth, sitting height), only **71.3% of women and 72.0% of men** fall inside their own 5th–95th range on **all four** (my calculation from the ANSUR II CSVs). That is why chairs adjust seat depth and backrest too, not just height.
>
> **Other ANSUR II values you can quote** (TR-15-007; mm):
>
> | Use | Dimension | Percentile used | Value | Report page |
> |---|---|---|---|---|
> | **Reach** (control position) | Thumbtip reach | **5th %ile female** | 674 | p. 203 |
> | **Clearance** (door/headroom) | Stature | **95th %ile male** | 1,870 | p. 193 |
> | **Clearance** (seat width) | Hip breadth, sitting | **95th %ile female** (> male 431) | 456 | p. 145 |
> | Seat depth (max, so short thighs don't hit the seat edge) | Buttock–popliteal length | **5th %ile female** | 441 | p. 83 |
>
> *Seat depth is a reach-type limit, so the small user decides it — not obvious, a good "explain" point.* Door and headroom also need allowances for shoes, headwear and walking gait on top of stature.

### Diagram: seat-height adjustability sketch — labels that earn marks
Side view of a seated figure on a gas-lift chair:
- Dimension line **floor → underside of knee = popliteal height**.
- **Double-headed arrow** on the seat column: **minimum = 5th %ile female popliteal height (+ shoe allowance)**, **maximum = 95th %ile male (+ shoe allowance)**, with numbers and **mm** units.
- Posture labels: **feet flat on floor**, **thighs horizontal/parallel**, **knees ≈ 90°**, **lumbar support**.
- Mechanism label (e.g. "pneumatic gas lift") and, for users below the range, **"footrest"**.
- Source of data named on the sketch ("ANSUR II, 2012") — naming the dataset is what lifts IA sketches.

---

## A1.1.6 Physiology

> [!example] Content statement
> **Physiology** is the study of systems and biomechanics within the human body, their responses, limitations and capabilities.

- **Physiological data** = functioning of major organ systems: heart (heart rate, blood pressure), brain/nervous system responses, sight (eye tracking), hearing (audiology, balance).
- **Biomechanics** = the study of the mechanical laws relating to the movement of living organisms, particularly the human body (P1 MCQ wording). Designers **assume** capabilities — enough force to press a button, turn a can opener — and those assumptions come from **population distributions** of strength, dexterity and fine motor control.
- Reduced capability: ageing muscle weakness, **arthritis, Parkinson's, multiple sclerosis** → adapt the design or add **assistive devices**. Applied across the whole population this is **design for inclusion** → [[DT C1.2 — Inclusive design — Notes]].
- **Jar openers (textbook):** lever arm gives **mechanical advantage**; serrated strip or rubber raises **friction**; four-in-one opener uses a **2nd-order lever**.
- **Sport:** responsive racquet/club materials, low-drag swimsuits, **damping** in javelins; helmets with night-vision/HUD add neck load.
- **Colour, visual and hearing thresholds** (textbook groups these here): high **contrast** for legibility; colour-blind-safe palettes; orange lifeboats (most visible against blue sea); push/pull signs on doors; volume limiters, soundproofing, alarm design, acoustic treatment.

> [!example] Real strength data — HSE lifting risk filter (UK)
> The UK Health and Safety Executive's lifting-and-lowering filter gives a maximum of **25 kg for men vs 16 kg for women** (load held close to the body, hands between knuckle and elbow height). Values drop when arms are extended or hands are at shoulder or floor level (men 5–10 kg, women 3–7 kg at the extremes). Seated handling: **men 5 kg, women 3 kg**. HSE says these are **not "safe limits"**; they are derived from **population lifting-capacity data** that differ between men and women.
> Sources: [HSE INDG143(rev4), Figure 1, p. 7](https://www.hse.gov.uk/pubns/indg143.pdf); [HSE risk filters page](https://www.hse.gov.uk/msd/manual-handling-risk-filters.htm).
> *Use:* a designer of a product to be lifted by a mixed workforce should design to the **lower (female) capability**, the physiology equivalent of "reach → 5th percentile".

---

## A1.1.7 Psychology

> [!example] Content statement
> **Psychology** is concerned with the study of the human mind and involves the study of all the human senses that may be involved in sending information to the brain.

- **Psychological factors** affect how people perform: **stress, lighting, temperature, humidity, noise, vibration**. Much of this data is **qualitative** or subjective, so it varies between people.
- **The senses:** sight (screen readability), hearing (pitch, volume), touch (texture, grip, temperature), taste (toxins in children's toys), smell (odours in workspaces).
- **Product example:** mobile phones — colour, shape, materials, backlighting, finish aimed at different consumer groups.
- **Environmental psychology** (office): lighting, acoustics, air quality, temperature, worker density.
  - **Thermal comfort:** "reasonable comfort" is reached when **80% of occupants** feel comfortable (textbook). Air temperature alone is not a valid indicator.
  - **Open-plan offices:** better communication, light and air movement vs more noise, less privacy, more visual distraction. Partitions give personal ("defensible") space.
  - Measuring satisfaction: **PWESQ** (Physical Work Environment Satisfaction Questionnaire).

> [!warning] Textbook attribution to check
> Metcalfe says "defensible space" was coined by **John Calhoun in the 1940s**. The term is usually credited to architect **Oscar Newman's *Defensible Space* (1972)** ([HUD User](https://www.huduser.gov/publications/pdf/def.pdf); [Univ. of Dayton eCommons](https://ecommons.udayton.edu/cgi/viewcontent.cgi?article=1026&context=soc_fac_pub)). Calhoun is known for crowding experiments on rats. In an exam, describe the **concept** (personal space) and don't lean on the attribution.

**Physiological vs psychological**, a textbook sample *outline* question: physiological = the body's **systems and physical capabilities**, mostly objective and measurable (heart rate, grip force). Psychological = the **mind and the senses' interpretation** of stimuli, often subjective (comfort, perception of colour, stress).

---

## Links (don't duplicate)
- Collecting human-factors data → [[DT A2.1 — User-centred research methods — Notes]]
- Ergonomics in UCD practice → [[DT B1.1 — User-centred design — Notes]]
- Ergonomic models/rigs/prototypes → [[DT B2.2 — Modelling and prototyping — Notes]]
- Designing for disability, age, exclusion → [[DT C1.2 — Inclusive design — Notes]]

---

## Common mistakes / examiner traps

> [!warning] Traps
> 1. **Designing for the 50th percentile.** It excludes most users on at least one dimension (Daniels). Only defend it when a single fixed value is unavoidable.
> 2. **Mixing up reach and clearance.** Reach → 5th (small user). Clearance → 95th (large user). Say *why*.
> 3. **Assuming "95th percentile person".** Someone at the 95th percentile for stature is not 95th on arm length or hip breadth. Percentiles apply **one dimension at a time**.
> 4. **"95th = male" by reflex.** For sitting hip breadth the 95th %ile **female** (456 mm) is larger than male (431 mm), ANSUR II.
> 5. **90% vs 95%.** 5th–95th within one sex = 90%. 5th F to 95th M in a 50:50 population ≈ 95%. Don't swap them.
> 6. **Static vs dynamic confusion.** Grip strength and reach arcs are **dynamic**; stature is **static**.
> 7. **Unnamed data.** "Use anthropometric data" scores little. Name the dataset, population, dimension, percentile and value, with **mm units**.
> 8. **Wrong population.** US Army (ANSUR II) data don't represent Indian schoolchildren. Say so when you evaluate data.
> 9. **Forgetting allowances.** Tables are nude or barefoot, so add clothing and shoe allowances.
> 10. **Mean = 50th percentile only for symmetric data.** Fine for most body lengths; not safe for skewed data such as body mass.

---

## Self-test

1. *Define* anthropometrics and *outline* one difference between static and dynamic data.
2. A car's handbrake lever must be operable by all drivers. State and *explain* which percentile and which sex you'd use.
3. Using ANSUR II, calculate the seat-height adjustment range for an office chair and state the percentage of a 50:50 population it accommodates on that dimension.
4. *Explain* why a chair that fits 5th–95th on popliteal height may still fail more than 5% of users.
5. *Discuss* adjustability versus a range of sizes for a school chair for 6–11-year-olds.

> [!question]- Answers
> 1. Measurement of human physical dimensions, expressed in the percentile range, to show the range of people's physical characteristics. Static = measured with the body still, between joints (e.g. stature). Dynamic = measured during movement (e.g. reach arc, grip strength); harder to collect but shows range and ease of movement.
> 2. **5th percentile female** reach (e.g. thumbtip reach, 674 mm in ANSUR II). If the smallest-reach user can operate it, everyone with a longer reach can. Reach is a "must get to" limit.
> 3. Popliteal height 5th %ile female 350 mm → 95th %ile male 471 mm (+ stated shoe allowance at both ends). About 95% (ANSUR II: 95.2% F, 95.1% M).
> 4. Human dimensions aren't in fixed proportion (multivariate). A user can be inside the range for popliteal height but outside for seat depth or hip breadth. In ANSUR II only ~71–72% are within 5th–95th on four seat dimensions at once. Hence adjust depth and backrest too, or offer sizes.
> 5. For **adjustability**: children grow through the year and one chair can follow them, and it avoids mismatch. Against it: cost, pinch points, children fiddling, and teachers must re-set chairs. For **sizes**: robust, cheap, simple, colour-coded by size. Against sizes: storage of several sizes and gaps between them. Judgement example: 2–3 fixed sizes suit a primary classroom (robustness, cost), with a footrest for the smallest users. Justify the choice with 5th–95th data across **both sexes and all ages** in the group (textbook).
