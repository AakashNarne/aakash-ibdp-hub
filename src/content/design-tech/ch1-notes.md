# Chapter 1: SA1 Focus — Ergonomics, UCD, and Designer Responsibility

> **Design Technology SL — Summative Assessment 1.**
> Paper 1: 1h 15m, 30 marks. Multiple choice and short answer.
>
> Three foundational topics: **A 1.1 Ergonomics** (how humans physically interact with products), **B 1.1 User-Centred Design** (putting users at every stage), and **C 1.1 Responsibility of the Designer** (where the designer's obligations begin and end).
>
> These three topics show up together because they define the discipline: know the user's body (ergonomics), design with them (UCD), and take responsibility for the consequences (ethics).

---

## Section 1.1 — Overview: Topic A, B, C for SA1

The SA1 paper draws on three sub-topics, one from each of the first three units of the DT course. All three are conceptual — no calculations, no design brief, no drawing skills tested. You need clear definitions, worked understanding of frameworks, and real case studies.

| Sub-topic | What it covers | Weight of definitions vs cases |
|---|---|---|
| A 1.1 Ergonomics | Anthropometrics, physiology, psychology | Definitions heavy; percentile logic is testable |
| B 1.1 User-Centred Design | Process, methods, advantages, limitations | Process cycle + method comparisons |
| C 1.1 Responsibility | Ethical, moral, social, environmental, legal | Case studies carry most marks |

**Exam approach.** For each topic: (1) memorise the definitions verbatim, (2) know one framework (three domains of ergonomics; UCD iterative cycle; four responsibilities), (3) have two concrete case studies you can cite.

---

## Section 1.2 — A1.1 Ergonomics: The Three Domains

**Definition.** Ergonomics is the study of the relationship between humans and the objects, systems, and environments they interact with — with the goal of optimising **efficiency, safety, and comfort**.

Ergonomics splits into three domains. Every ergonomic design decision touches at least one.

| Domain | What it studies | Product example |
|---|---|---|
| **Anthropometrics** | Physical measurement of the human body — heights, reaches, grip strengths | Chair seat height, doorway clearance, phone width |
| **Physiological** | Fatigue, comfort, sensory limits (vision, hearing, touch), musculoskeletal load | Chair lumbar support, screen brightness, keyboard travel |
| **Psychological** | Perception, memory, mental models, cognitive load, error patterns | Interface layout, warning colours, button size |

**Common exam framing.** "This product's [feature] addresses which ergonomic domain?" — expect the answer to name one of the three, then explain the mechanism.

---

## Section 1.3 — Anthropometric Data

Anthropometric data comes in four flavours. Know the difference, because a common exam item asks you to identify which type is being used.

| Type | Definition | Example |
|---|---|---|
| **Static** | Measurements taken at rest, in a fixed posture | Standing height, seated eye height |
| **Dynamic** | Measurements taken during motion | Arm reach envelope, hand-grip stroke |
| **Structural** | Skeletal/anatomical measurements | Bone lengths, joint spacing |
| **Functional** | Task-based measurements — the force or reach required to do something | Grip force to open a jar, force to open a car door |

**Static vs dynamic** is the highest-yield distinction. A chair's seat height uses **static** data (seated body). A car steering wheel's reach uses **dynamic** data (arm in motion). Structural and functional appear less often but you should recognise them.

---

## Section 1.4 — Percentile Design Decisions

Designers cannot design for every body, so they choose which segment of the population to accommodate. The percentile system is the language of that choice.

| Percentile | Meaning | Used for |
|---|---|---|
| **5th** | Smaller than 95% of the population | **Reach** dimensions — shelves, controls, buttons |
| **50th** | The average | Rarely a good target on its own; ignores both tails |
| **95th** | Larger than 95% of the population | **Clearance** dimensions — doorway heights, seat widths, leg room |

### The rule in one sentence

Design **reach** for the 5th percentile, design **clearance** for the 95th, and design **adjustability** for everything in between (chairs, steering columns, monitor arms).

### Why this rule works

- If the smallest user can reach it, everyone larger can too.
- If the largest user fits through it or sits in it, everyone smaller does too.
- Adjustability bridges the range where a single dimension cannot serve both — most seating and viewing surfaces.

**Common exam prompt:** "A designer is sizing an emergency stop button on a factory workstation. Which percentile should they design to and why?" — 5th percentile reach, so even the smallest worker can hit it in an emergency.

---

## Section 1.5 — Physiological Considerations

- **Vision** — visual acuity, colour perception (about 8% of men are red-green colour-blind; **never encode information by colour alone** — add shape, label, or position). Field of view narrows with age and under stress.
- **Hearing** — audible frequency range (~20 Hz to 20 kHz, narrowing with age). Alarm design should avoid frequencies that get lost in the ambient noise of the environment.
- **Touch** — tactile feedback, temperature sensitivity, texture discrimination. Buttons with clear physical click reduce error rates vs flat capacitive.
- **Fatigue** — muscle groups tire; repetitive strain injury (RSI) from sustained load. Postural fatigue from static posture.
- **Force** — controls should require force within comfortable range (not too easy to trigger accidentally; not so heavy that they exclude weaker users).

**Design implication.** A physiologically-considered product respects the limits of the body across a work session — not just for one press.

---

## Section 1.6 — Psychological Considerations

- **Mental models** — the user's internal picture of how something works. A door that says "PUSH" but has a handle triggers the wrong mental model (Don Norman's classic *Norman door* example).
- **Cognitive load** — how much the user has to hold in working memory. Good designs minimise it.
- **Affordances** (Gibson, then Norman) — perceived properties that suggest how an object is used. A chair "affords" sitting; a knob affords turning; a slot affords insertion.
- **Signifiers** — explicit cues (labels, icons, arrows) telling the user what to do. Signifiers complement affordances.
- **Fitts's Law** — the time to hit a target is a function of its distance and its size. Larger, closer controls are faster to hit. Design implication: critical controls should be big and near.
- **Hick's Law** — the time to make a decision grows with the number of options. Design implication: menu simplification speeds decisions.

---

## Section 1.7 — B1.1 User-Centred Design: Definition and Cycle

**Definition.** User-Centred Design (UCD) is a design philosophy and process in which users' needs, wants, and limitations are given extensive attention at each stage — through research, involvement, and testing.

The core commitment: users are in the room from the first day, not brought in at the end for approval.

### The iterative UCD cycle

1. **Understand context of use** — who, where, how, why.
2. **Specify user requirements** — turn research into design constraints.
3. **Design solutions** — sketches, wireframes, prototypes.
4. **Evaluate against requirements** — usability tests, feedback.
5. **Loop back** — the cycle repeats until requirements are met.

**Iterative** is the load-bearing word. UCD is not a waterfall (understand → specify → design → done). Every prototype gets tested, and the results feed back into the next iteration.

---

## Section 1.8 — UCD Methods

| Method | What it is | Best for | Limitations |
|---|---|---|---|
| **Interviews** | One-to-one, deep, semi-structured | Discovering motivations, pain points | Small N; interviewer bias |
| **Surveys / questionnaires** | Structured questions, scale-friendly | Statistical validation across large samples | Poor at open discovery; questions frame answers |
| **Personas** | Fictional archetypes of user segments | Design shorthand across the team | Can become stereotypes if not grounded in real data |
| **Usability testing** | Watch a real user complete a task with the design | Finding usability problems — Nielsen: 5 users catch ~85% | Requires a working prototype |
| **Focus groups** | Group conversations | Surfacing shared reactions to concepts | Groupthink; loud voices dominate |
| **Ethnography / observation** | Watching users in their real environment | Revealing what people DO vs what they SAY | Time-consuming; observer effect |

**Exam-friendly distinction.** Interviews and surveys are what users **say**. Observation and usability testing are what users **do**. The gap between the two is exactly why UCD needs both.

---

## Section 1.9 — UCD Advantages and Limitations

### Advantages

- Products fit real user needs — higher adoption and satisfaction.
- Fewer errors and safety issues in use.
- Reduced training and support costs (fewer help-desk calls).
- Legal and ethical robustness (accessibility, safety).
- Competitive advantage — users tell others about good design.

### Limitations

- **Time-consuming and expensive** — multiple iterations, ongoing research.
- **User bias** — users often say they want features they will never use.
- **Small samples** may not represent whole populations.
- Users cannot conceive of what does not yet exist (Ford's apocryphal "faster horses"); UCD can incrementalise design and miss radical innovation.
- Requires skilled facilitators — bad interviews or usability tests give worse data than none.

### UCD vs alternative philosophies

| Philosophy | Who is centred | Contrast |
|---|---|---|
| **User-Centred Design** | The specific target user | Baseline |
| **Designer-Centred** | The designer's own vision (Jobs-era Apple) | Can produce leaps; risky without validation |
| **Human-Factors / systems ergonomics** | The whole human-machine system | Broader; safety-critical (aviation, medical devices) |
| **Universal Design** | All users regardless of ability, age, culture | Explicitly inclusive; e.g., curb cuts, subtitle-first video |

---

## Section 1.10 — C1.1 Designer's Four Responsibilities

A designer is not a neutral technician. Every choice has weight across four categories:

| Responsibility | What it covers |
|---|---|
| **Ethical** | Honesty, informed consent, avoidance of manipulation ("dark patterns"), transparency about limitations |
| **Moral** | Broader value-alignment — is this design good for people, communities, future generations? |
| **Social** | Cultural sensitivity, accessibility, addressing inequality, avoiding exclusion by design |
| **Environmental** | Material sourcing, energy use, emissions, end-of-life disposal — the full product lifecycle |

**Exam approach.** When a question asks "discuss the designer's responsibility in the case of [product]", identify which of the four categories are engaged, then apply specifically. Do not stop at "the designer should care about sustainability".

---

## Section 1.11 — Product Life Cycle and Sustainability

### The five stages of a product life cycle

1. **Raw material extraction** — mining, farming, drilling. Environmental damage often invisible to the end user.
2. **Manufacturing** — energy, water, labour conditions, chemical processes.
3. **Distribution** — transport emissions, packaging, warehousing.
4. **Use phase** — energy in use, safety, longevity, maintenance.
5. **End-of-life** — landfill, incineration, recycling, upcycling.

Environmental impact is not concentrated in any one stage — different products have different hotspots. A cotton t-shirt's biggest impact is raw material (water in cotton farming). A car's biggest impact is the use phase (fuel over years of driving). An electric kettle's biggest impact is manufacturing. Good designers know which stage matters for their product.

### Sustainability strategies

- **Cradle-to-cradle** (McDonough & Braungart) — designing so end-of-life becomes input to a new cycle, either biological (compostable materials) or technical (recyclable materials) nutrients.
- **Circular design** — reuse, repair, refurbish, recycle. Contrast with linear "take-make-dispose".
- **Design for disassembly** — products that can be taken apart for repair or material recovery.
- **Right-to-repair** — legislating access to spare parts, manuals, and diagnostic tools. EU has led; Apple has responded.
- **Material choice** — bio-based, recycled content, avoidance of hazardous substances.
- **Modular design** — replace a single failing component instead of the whole product (Fairphone, Framework laptops).

---

## Section 1.12 — Planned Obsolescence

The anti-pattern. Planned obsolescence is the deliberate design of products to have a limited useful life. Comes in four types:

| Type | Mechanism | Example |
|---|---|---|
| **Technical / functional** | Product engineered to fail or degrade | Battery-glued smartphones; Apple's iPhone throttling controversy |
| **Systemic** | Software updates make older hardware unusable | OS updates drop support for older devices |
| **Aesthetic / stylistic** | Frequent redesigns make older versions feel dated | Fast fashion; annual smartphone models |
| **Notification** | User is told a product is obsolete when it's technically still fine | Fitness tracker "end of support" nudges |

**Why designers are drawn to it.** Repeat sales, revenue predictability, marketing simplicity. **Why it is under attack.** Environmental cost (mountains of e-waste), consumer backlash, right-to-repair legislation, brand risk.

**A designer's response.** Modular architecture, longer software support windows, transparent battery replacement paths, standardised connectors. The Fairphone is the worked example.

---

## Section 1.13 — Legal Responsibilities and Case Studies

### Legal responsibilities

- **Product safety standards** — ISO, BIS (India), CE (EU), UL (US). Compliance is non-optional; failure is criminal and civil liability.
- **Product liability** — designer and manufacturer may be legally responsible for harm caused by design flaws, even without proven intent.
- **Intellectual property** — patents (functional inventions), trademarks (brand identifiers), copyrights (creative works), design registrations (product appearance).
- **Consumer protection** — labelling, disclosures, warranty obligations, honest advertising.
- **Environmental regulation** — RoHS (hazardous substances), WEEE (waste electronics), extended producer responsibility.

### Case studies — memorise these

| Case | Key issue | What it illustrates |
|---|---|---|
| **Ford Pinto (1970s)** | Fuel-tank rupture risk; internal cost-benefit memo weighing recall against expected wrongful-death payouts | Ethical failure: monetising human life in a design decision |
| **Volkswagen Dieselgate (2015)** | Software "defeat device" hid emissions during testing | Engineers deliberately engineered non-compliance; billions in fines, criminal charges |
| **Apple right-to-repair** | Historical resistance to third-party repair; recent Self Service Repair | Environmental responsibility, legal pressure from EU forcing change |
| **IKEA flat-pack** | Products designed to ship in flat boxes with user assembly | Reduces transport emissions dramatically; trade-off: user assembly errors, sometimes durability |
| **Fairphone** | Modular smartphone designed for repair and long life | Worked example of circular design and cradle-to-cradle in practice |
| **Nike / Adidas sweatshop scandals** | Manufacturing labour conditions | Social responsibility at the manufacturing stage |
| **Boeing 737 MAX (MCAS)** | Automated system pushed nose down; two crashes; 346 deaths | Systemic ergonomic failure — pilots' mental models did not include the MCAS behaviour |

**Answering a case study question.** Name the case, identify the type of responsibility engaged (ethical / social / environmental / legal), state what the designer did or failed to do, and evaluate what a responsible alternative would have looked like.

---

## Section 1.14 — Exam-Ready Definitions

| Term | Definition |
|---|---|
| Ergonomics | Study of the relationship between humans and the objects, systems, and environments they interact with, aimed at efficiency, safety, and comfort. |
| Anthropometrics | Measurement of the human body and its parts. |
| Static anthropometric data | Body measurements taken at rest. |
| Dynamic anthropometric data | Body measurements taken during motion. |
| 5th percentile | Smaller than 95% of the population — used for reach dimensions. |
| 95th percentile | Larger than 95% of the population — used for clearance dimensions. |
| Affordance | A perceived property of an object that suggests how it is used. |
| Signifier | An explicit cue (label, icon) telling the user what to do. |
| Mental model | The user's internal picture of how something works. |
| Cognitive load | The demand on working memory imposed by a task or interface. |
| Fitts's Law | Target acquisition time is a function of distance and size — larger, closer targets are faster to hit. |
| User-Centred Design | A design philosophy and process in which users' needs are given attention at each stage. |
| Usability testing | Observing real users completing tasks with a design to find problems. |
| Persona | A fictional archetype representing a user segment. |
| Product life cycle | The stages a product moves through: extraction, manufacture, distribution, use, disposal. |
| Cradle-to-cradle | Design where end-of-life materials become inputs to a new cycle. |
| Circular design | Design that keeps materials in use through reuse, repair, refurbish, recycle. |
| Planned obsolescence | Deliberate design to limit a product's useful life. |
| Right-to-repair | Legislation requiring manufacturers to provide access to parts, tools, and manuals for repair. |
| Product liability | Legal responsibility for harm caused by product design flaws. |
