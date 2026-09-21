# Chapter 2: SA1 Focus — Functions (SL 2.1–2.6 · AHL 2.7–2.9)

> **Maths AI HL — Summative Assessment 1.**
> Paper 1, 1h 15m, 70 marks. GDC required throughout.
>
> This chapter is scoped **exactly** to the SA1 syllabus you have:
> - SL 2.1 Straight lines · 2.2 Functions (notation, domain, range, inverse as reflection) · 2.3 Graphing with technology · 2.4 Key features of graphs · 2.5 Modelling · 2.6 Modelling skills
> - AHL 2.7 Composite functions and finding inverse with domain restriction · 2.8 Transformations · 2.9 HL modelling **except the Log model**
>
> Chapter 1 covers a wider function family, including logarithmic; this chapter targets what will actually be tested in SA1 and drills the calculation habits and GDC use that pick up the 70 marks fastest.

---

## Section 2.1 — Straight Lines: Gradient, Forms, Parallel & Perpendicular

### Gradient (slope)

The gradient of the line joining two points (*x*₁, *y*₁) and (*x*₂, *y*₂) is:

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

**Sign meaning.** Positive gradient = rises left-to-right. Negative gradient = falls. Zero gradient = horizontal line. Undefined gradient = vertical line (denominator zero).

### Three equivalent forms of a line

| Form | Expression | Read off directly |
|---|---|---|
| **Slope–intercept** | $$y = mx + c$$ | Gradient *m*, *y*-intercept *c* |
| **Point–slope** | $$y - y_{1} = m(x - x_{1})$$ | Line through (*x*₁, *y*₁) with gradient *m* |
| **Standard / general** | $$ax + by + d = 0$$ | Useful for finding intercepts by setting each variable to 0 |

**Convert point–slope to slope–intercept** by expanding and rearranging. **Convert slope–intercept to standard** by moving all terms to one side.

### Parallel and perpendicular

- **Parallel** lines have the same gradient: *m*₁ = *m*₂.
- **Perpendicular** lines have gradients whose product is −1: *m*₁ · *m*₂ = −1 (equivalently *m*₂ = −1/*m*₁).

**Special cases the rule breaks on.** A horizontal line (*m* = 0) has as its perpendicular a *vertical* line (undefined gradient), not *m* = 0. The rule *m*₁·*m*₂ = −1 does not apply when one line is horizontal or vertical — use geometric reasoning instead.

### Worked example

Line *L*₁ passes through (2, 3) and (6, 11).

1. **Gradient.** $$m = \frac{11 - 3}{6 - 2} = \frac{8}{4} = 2$$.
2. **Equation of *L*₁.** Using point–slope through (2, 3): *y* − 3 = 2(*x* − 2) → *y* = **2*x* − 1**.
3. **Line through (0, 4) perpendicular to *L*₁.** Perpendicular gradient = −1/2. Line: *y* = **−½*x* + 4**.

### Distance and midpoint (useful adjacent facts)

Between points (*x*₁, *y*₁) and (*x*₂, *y*₂):

- **Distance**: $$d = \sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2}}$$
- **Midpoint**: $$M = (\frac{x_{1} + x_{2}}{2}, \frac{y_{1} + y_{2}}{2})$$

---

## Section 2.2 — Functions: Notation, Domain, Range, Inverse

### Definitions

- **Function** — a rule assigning exactly one output *y* to each input *x*.
- **Domain** — the set of all valid inputs.
- **Range** — the set of all outputs the function actually produces.
- **Notation** $$— f(x) = 2x + 3,$$ or $$f : x \mapsto 2x + 3$$.

### Common domain restrictions

Three restrictions do most of the work:

- **Division:** the denominator cannot be zero. For *f*(*x*) = 1/(*x* − 3), domain is *x* ∈ ℝ, *x* ≠ 3.
- **Square roots (and any even root):** the radicand must be ≥ 0. For *f*(*x*) = √(*x* − 5), domain is *x* ≥ 5.
- **Logarithms:** the argument must be > 0 (not in SA1 scope, but standard).

### Range: three ways to find it

1. **Inspect the graph** (GDC or sketch).
2. **Use the shape** of the family (parabola vertex, exponential asymptote).
3. **Algebraically** — let *y* = *f*(*x*), solve for *x* in terms of *y*, and the values of *y* that yield a real *x* are the range.

### Inverse function

**Definition.** *f*⁻¹(*x*) undoes *f*(*x*). If *f*(*a*) = *b*, then *f*⁻¹(*b*) = *a*.

**Existence.** An inverse function exists only when *f* is **one-to-one** on its domain (each output comes from at most one input). *f*(*x*) = *x*² is not one-to-one on ℝ because 2 and −2 both map to 4. Restrict domain to make it one-to-one (see Section 2.7).

**Inverse as reflection in *y* = *x*.** Every point (*a*, *b*) on *f* corresponds to a point (*b*, *a*) on *f*⁻¹. Graph *f*⁻¹ by reflecting *f* across the line *y* = *x*.

### Method to find *f*⁻¹(*x*)

1. Write *y* = *f*(*x*).
2. Swap *x* and *y*.
3. Solve for *y*.
4. Rewrite as *f*⁻¹(*x*).
5. Verify: $$f(f^{-1}(x)) = x$$ and $$f^{-1}(f(x)) = x$$.

**Worked example.** If *f*(*x*) = 3*x* − 6, find *f*⁻¹(*x*).

- $$Let y = 3x - 6$$.
- Swap: $$x = 3y - 6$$.
- Solve for *y*: *y* = (*x* + 6) / 3.
- $$So f^{-1}(x) = \frac{x + 6}{3}$$.
- Verify: $$f(f^{-1}(x)) = 3\cdot \frac{x + 6}{3} - 6 = x + 6 - 6 = x ✓$$

---

## Section 2.3 — Graphing with Technology (GDC)

Maths AI is a GDC-first course. Fluency with your calculator is a scored competence — every SA1 question that says "using technology" wants you to name the built-in tool you used.

### GDC habits to build

- **Enter functions in Y=** (TI-84) or the equivalent input line (Nspire / Casio). Use brackets around exponents and negatives to avoid ambiguity.
- **Set the viewing window** to capture the features asked about (intercepts, maxima, asymptotes). `ZoomFit` is a fallback, not a habit — you should choose the window deliberately.
- **Use built-in solvers**, not visual estimation:
  - `zero` (TI-84) / `intersection with x-axis` (Nspire) — for roots.
  - `maximum` / `minimum` — for turning points.
  - `intersect` — for intersections of two graphs.
  - `value` — for a *y*-value at a specified *x*.
- **Sketch results neatly** on the answer sheet: draw axes with labels, mark identified points with coordinates.

### Writing GDC answers

Always state the method briefly. Two standard phrases:

- "Using GDC, *x* = 3.47 (3 s.f.)."
- "Using GDC intersect, (2.14, 5.83) (3 s.f.)."

Give coordinates to the accuracy requested (3 significant figures is the default in Maths AI unless the question says otherwise).

---

## Section 2.4 — Key Features of Graphs

Any graphed function has a standard checklist of features you should be able to identify and label:

| Feature | Definition | How to find with GDC |
|---|---|---|
| **x-intercepts (roots / zeros)** | Where *f*(*x*) = 0 — the curve crosses the *x*-axis | `zero` |
| **y-intercept** | Value of *f*(0) — where the curve crosses the *y*-axis | `value` at *x* = 0 |
| **Local maximum** | A point higher than all nearby points (turning point, curve rising then falling) | `maximum` |
| **Local minimum** | A point lower than all nearby points | `minimum` |
| **Global (absolute) max / min** | Highest/lowest value over the full domain | Compare all local max/min and endpoint values |
| **Vertical asymptote** | A vertical line *x* = *a* such that *f*(*x*) → ±∞ as *x* → *a* — usually where the denominator = 0 in a rational function | Inspect denominator |
| **Horizontal asymptote** | A horizontal line *y* = *L* such that *f*(*x*) → *L* as *x* → ±∞ | Limit behaviour |
| **Symmetry** | Even functions symmetric about the *y*-axis; odd functions rotationally symmetric about the origin | Inspect graph or algebraic test |
| **Intersections with another graph** | Points where two curves cross — solve *f*(*x*) = *g*(*x*) | `intersect` |

### Worked example — finding an intersection

Find the intersections of *f*(*x*) = *x*² − 4 and *g*(*x*) = 2*x* − 1.

**Algebraic.** *x*² − 4 = 2*x* − 1 → *x*² − 2*x* − 3 = 0 → (*x* − 3)(*x* + 1) = 0 → *x* = 3 or *x* = −1.

Points: (3, 5) and (−1, −3).

**On GDC.** Graph both, use `intersect` twice (once for each crossing). Confirms the algebra.

---

## Section 2.5 — Modelling: Choosing a Function Family

Modelling is the SA1 mark-earner. Given a real-world dataset or scenario, identify which function family best captures the behaviour.

| Family | Form | Real-world shape |
|---|---|---|
| **Linear** | $$f(x) = mx + c$$ | Constant rate of change (fixed pay per hour, taxi meter after base fare) |
| **Quadratic** | $$f(x) = ax^{2} + bx + c$$ | Projectile motion; profit-maximisation curves |
| **Cubic** | $$f(x) = ax^{3} + bx^{2} + cx + d$$ | Volume with a length; some cost curves |
| **Exponential** | $$f(x) = k\cdot a^x + c$$ | Growth (compound interest, populations), decay (radioactive, cooling) |
| **Sinusoidal** | $$f(x) = a\cdot sin(b(x - c)) + d$$ | Tides, daylight hours, sound waves |
| **Direct variation** | $$y = kx$$ (or *y* = *kx*ⁿ) | Simple proportionality |
| **Inverse variation** | $$y = \frac{k}{x}$$ | Time and speed at fixed distance; pressure and volume of a gas |

### Model-choosing heuristic

1. **Plot the data first.** Always.
2. Straight line → **linear**.
3. Curve toward a horizontal asymptote → **exponential** (or logistic — see 2.9).
4. Periodic (repeats) → **sinusoidal**.
5. Symmetric U or ∩ → **quadratic**.
6. Sharp inverse behaviour with asymptotes → **rational** or **inverse variation**.
7. Bounded growth flattening toward a ceiling → **logistic** (AHL 2.9).
8. Different rules on different intervals → **piecewise** (AHL 2.9).

---

## Section 2.6 — Modelling Skills

From data to model to interpretation — with domain sense throughout.

### The seven modelling moves

1. **Collect / read the data.** Understand the units and the context.
2. **Choose a model family.** Justify the choice (shape + physical reasoning).
3. **Fit parameters.** Use GDC regression (`LinReg`, `ExpReg`, `SinReg`) or algebraic fitting through known points.
4. **Interpret parameters in context.** "The 0.03 is the monthly growth rate" — not just the number.
5. **Check the fit.** *R*² value (linear/exponential regressions); visual inspection.
6. **Identify domain restrictions.** Time cannot be negative; population cannot exceed carrying capacity; angles have periods.
7. **Comment on validity.** Where does the model break down? Extrapolation risks.

### Extrapolation is where models die

A model fitted on 5 years of data will happily predict year 50 — but the assumptions almost certainly do not hold that far out. Always state where you would *not* trust the model.

**Exam habit:** in any modelling question, add one sentence at the end naming a limitation ("valid for *t* ∈ [0, 20]; extrapolation beyond this is unreliable because…").

### Interpreting parameters in context — the mark-earner

For any model, name what each parameter *means physically*:

- Linear *y* = *mx* + *c*: *m* = rate of change per unit of *x*; *c* = value when *x* = 0.
- Exponential *y* = *k*·*a*^*x* + *c*: *k* = initial value above the horizontal asymptote *y* = *c*; *a* = growth factor per unit of *x*.
- Sinusoidal *y* = *a*·sin(*b*(*x* − *c*)) + *d*: *a* = amplitude, *b* controls period (period = 2π/*b*), *c* = horizontal phase shift, *d* = vertical shift (mid-line).

---

## Section 2.7 — Composite Functions and Inverses (AHL)

### Composite functions

$$
(f \circ g)(x) = f(g(x)) \qquad (g \circ f)(x) = g(f(x))
$$

**Order matters.** *f* ∘ *g* ≠ *g* ∘ *f* in general. Read from the inside out — apply *g* first, then *f*.

**Domain of *f* ∘ *g*.** The set of *x* in the domain of *g* such that *g*(*x*) lies in the domain of *f*. Two conditions, applied in order.

### Worked example — composite

*f*(*x*) = 2*x* + 1, *g*(*x*) = *x*². Find (*f* ∘ *g*)(*x*) and (*g* ∘ *f*)(*x*).

- $$(f \circ g)(x) = f(g(x)) = f(x^{2}) = 2x^{2} + 1$$.
- $$(g \circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^{2} = 4x^{2} + 4x + 1$$.

Different — order matters.

### Finding inverse with domain restriction

**When a function is not one-to-one** on its natural domain, restrict the domain to make it one-to-one before inverting.

**Worked example.** *f*(*x*) = *x*² is not one-to-one on ℝ (both 2 and −2 map to 4). Restrict domain to *x* ≥ 0. Now:

- Let *y* = *x*². Swap: *x* = *y*².
- Solve: *y* = √*x* (positive root only, matching the restriction).
- *f*⁻¹(*x*) = √*x* with domain *x* ≥ 0.

**Range of *f* becomes domain of *f*⁻¹, and vice versa.**

### Common composite + inverse patterns

- (*f* ∘ *f*⁻¹)(*x*) = *x* — the definition of inverse.
- (*f*⁻¹ ∘ *f*)(*x*) = *x* — also, on the domain of *f*.
- If *g* undoes *f*, then *g* = *f*⁻¹.

---

## Section 2.8 — Transformations of Graphs (AHL)

Every transformation is either **horizontal** (inside the bracket, acts on *x* before the function) or **vertical** (outside the bracket, acts on the output after the function).

**The trap:** transformations *inside* the bracket act *opposite* to what they look like.

### The six basic transformations

| Transformation | Effect on graph |
|---|---|
| *f*(*x*) + *b* | Vertical translation by +*b* (up if *b* > 0) |
| *f*(*x* + *a*) | Horizontal translation by −*a* (left if *a* > 0 — **inverted**) |
| −*f*(*x*) | Reflection in the *x*-axis |
| *f*(−*x*) | Reflection in the *y*-axis |
| *p* · *f*(*x*) | Vertical stretch by factor *p* (compression if 0 < *p* < 1) |
| *f*(*q* · *x*) | Horizontal stretch by factor 1/*q* (compression if *q* > 1 — **inverted**) |

### Composite transformations — order matters

For a composite like *y* = 2*f*(*x* − 3) + 4, apply in this order:

1. **Inside the bracket first**: *x* − 3 shifts the graph *right* by 3.
2. **Vertical stretch outside**: multiply outputs by 2 (points move away from the *x*-axis).
3. **Vertical shift outside**: add 4 (whole graph moves up by 4).

**Rule of thumb.** Horizontal transformations (inside the bracket) act on *x* *before* the function; vertical transformations (outside) act on the output *after*. Apply inside first, then outside.

### The inversion trap — memorise

- *f*(*x* + 3) shifts LEFT, not right.
- *f*(2*x*) COMPRESSES horizontally, not stretches.
- Anything *outside* the bracket acts as it looks.

**Diagnostic question.** "How does *y* = *f*(2(*x* − 3)) + 1 differ from *y* = *f*(*x*)?" Order: horizontal compress by factor 1/2, then translate right by 3, then translate up by 1.

---

## Section 2.9 — HL Modelling Functions (AHL, except Log)

**Syllabus note.** Your SA1 syllabus reads "Except Log Model" — do not spend revision time on log-model fitting for this paper.

### HL model types in scope

| Model | Form | Real-world use |
|---|---|---|
| **Direct & inverse variation (extended)** | $$y = kx^{n}, y = \frac{k}{x^{n}}$$ | Physics laws, engineering |
| **Cubic & polynomial** | Higher-degree polynomials | Complex cost/revenue curves; interpolation |
| **Rational** | $$f(x) = \frac{ax + b}{cx + d}$$ | Concentration-response; efficiency curves with asymptotes |
| **Logistic** | $$f(x) = \frac{L}{1 + C\cdot e^{-kx}}$$ | Bounded growth — population with carrying capacity, product adoption S-curve, epidemic spread |
| **Piecewise** | Different rules on different intervals | Tax brackets, tariff structures, shipping cost tiers |
| **Sinusoidal (HL depth)** | $$y = a\cdot sin(b(x - c)) + d$$ | Extended amplitude/period/phase analysis |

### The logistic model — worth extra attention

$$
P(t) = \frac{L}{1 + C \cdot e^{-kt}}
$$

- *L* = carrying capacity (upper asymptote as *t* → ∞).
- *k* = growth-rate parameter (larger *k* = steeper curve).
- *C* = shape parameter: *C* = (*L* − *P*₀) / *P*₀, where *P*₀ is the initial value.

**Shape.** Starts near-exponential, then flattens toward *L*. Classic S-shape. Inflection point where growth rate is maximum: *P* = *L*/2.

### Logistic worked example

A rumour spreads through a school of 500 students. Initially 5 students know it. Growth rate *k* = 0.4 per day.

- $$L = 500, P_{0} = 5$$.
- $$C = \frac{500 - 5}{5} = 99$$.
- Model: $$P(t) = \frac{500}{1 + 99\cdot e^{-0.4t}}$$.
- After 10 days: *P*(10) = 500 / (1 + 99·*e*^(−4)) = 500 / (1 + 99·0.0183) ≈ 500 / 2.813 ≈ **178 students**.

### Piecewise functions

Different function definitions on different sub-domains, glued together. Written with a brace:

$$
f(x) = \begin{cases}
2x & \text{if } 0 \le x < 5 \\
x + 5 & \text{if } 5 \le x < 10 \\
15 & \text{if } x \ge 10
\end{cases}
$$

**Check continuity at boundaries.** Do the pieces meet at *x* = 5 and *x* = 10?

- At *x* = 5: first piece gives 2·5 = 10; second gives 5 + 5 = 10 ✓
- At *x* = 10: second piece gives 10 + 5 = 15; third gives 15 ✓

Both boundaries are continuous. Discontinuity at a boundary is often the point of an exam question — check whether the pieces match.

### Rational functions

For *f*(*x*) = (*ax* + *b*) / (*cx* + *d*):

- **Vertical asymptote** where denominator = 0: *x* = −*d*/*c*.
- **Horizontal asymptote** as *x* → ±∞: *y* = *a*/*c* (ratio of leading coefficients).
- Domain: all real numbers except *x* = −*d*/*c*.
- Range: all real numbers except *y* = *a*/*c*.

---

## Section 2.10 — Exam-Ready Formulas and Definitions

### Formulas you should have memorised (not on the formula booklet for AI HL)

- Gradient: $$m = \frac{y_{2} - y_{1}}{x_{2} - x_{1}}$$
- Parallel: *m*₁ = *m*₂. Perpendicular: *m*₁·*m*₂ = −1.
- Distance: $$d = \sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2}}$$
- Midpoint: $$(\frac{x_{1} + x_{2}}{2}, \frac{y_{1} + y_{2}}{2})$$

### Definitions

| Term | Meaning |
|---|---|
| Function | A rule assigning exactly one output to each input in the domain. |
| Domain | Set of allowed inputs. |
| Range | Set of outputs the function actually produces. |
| Inverse function *f*⁻¹ | Undoes *f*: if *f*(*a*) = *b* then *f*⁻¹(*b*) = *a*. Exists when *f* is one-to-one. |
| One-to-one function | Each output comes from at most one input. |
| Composite function | (*f* ∘ *g*)(*x*) = *f*(*g*(*x*)) — apply *g* first, then *f*. |
| Vertical asymptote | A vertical line the graph approaches but never crosses; *f*(*x*) → ±∞ there. |
| Horizontal asymptote | A horizontal line the graph approaches as *x* → ±∞. |
| Amplitude (sinusoidal) | Half the vertical distance between max and min: *a* in *y* = *a*·sin(*b*(*x* − *c*)) + *d*. |
| Period (sinusoidal) | Horizontal distance for one full cycle: 2π/*b*. |
| Carrying capacity (logistic) | The upper asymptote *L* — the ceiling on growth. |

---

## Section 2.11 — Common Exam Traps

- **Inside-the-bracket inversion.** *f*(*x* + 3) shifts LEFT, not right. *f*(2*x*) COMPRESSES, not stretches. This is the single most common transformation mistake.
- **Forgetting the perpendicular special case.** *m*₁·*m*₂ = −1 does not apply when one line is horizontal or vertical.
- **Not restricting the domain when inverting.** If *f* is not one-to-one, you cannot just "swap and solve". State the restriction that makes the inverse exist.
- **Skipping units / context in modelling.** A number without units earns fewer marks. "*a* = 2.4" is worth less than "amplitude is 2.4 metres — the tide rises 2.4 m above the mean".
- **Extrapolation without a note.** Predicting far beyond your data window without stating the assumption cost.
- **Reading GDC coordinates off the screen.** Always use built-in `zero` / `intersect` / `maximum` / `minimum` — never eyeball a value.
- **Log model when the syllabus excludes it.** The SA1 syllabus reads "Except Log Model" — do not use it.
- **Missing "using technology" acknowledgment.** State your GDC method ("Using GDC intersect, (2.14, 5.83)") — brief but essential.
- **Confusing composite order.** *f* ∘ *g* means apply *g* first, then *f*. Read composite functions from the inside out.
- **Forgetting the domain of a composite.** The domain of *f* ∘ *g* requires *x* in the domain of *g* AND *g*(*x*) in the domain of *f*.
- **Piecewise continuity error.** When a boundary point matches from one side but not the other, the function is discontinuous — say so.
- **Range vs codomain.** Range = outputs actually produced. Codomain = the target set the function maps into. Maths AI uses range in most questions.

---

## Section 2.12 — GDC Tips (SA1 essentials)

### TI-84

- `Y=` to enter functions. Use `2ND` + `TRACE` to open `CALC` menu.
- `zero`, `maximum`, `minimum`, `intersect`, `value` all live in `CALC`.
- For regressions: `STAT` → `EDIT` to enter data in L1, L2 → `STAT` → `CALC` → `LinReg`, `ExpReg`, `SinReg`.
- Set window with `WINDOW`; `ZoomFit` (7 in `ZOOM`) auto-fits Y-range.

### TI-Nspire

- Insert Graphs page → type function → `menu` → `Analyze Graph` → `Zero`/`Maximum`/`Minimum`/`Intersection`.
- For regressions: Lists & Spreadsheet page → enter data → Statistics → Regression.

### Casio (fx-CG or fx-9860)

- `Graph` mode → `Y=` → enter function → `EXE` to graph.
- `SHIFT` + `G-Solv` for `ROOT`, `MAX`, `MIN`, `ISCT` (intersect).
- For regressions: `STAT` mode → enter data → `CALC` → `REG`.

**Whichever machine you use, drill the four essential operations before SA1:** enter a function, find a zero, find an intersection, run a regression. These come up in almost every question.

---

## Section 2.13 — Connections

Where this chapter touches the rest of the course. Cross-subject links are the ones
worth chasing: examiners reward a candidate who can carry a concept between papers.

- **[[Chapter 1: Functions|Maths AI · Functions]]** — The fuller treatment, including the parts not in the SA1 window.
- **[[Chapter 2: Demand and Supply|Economics · Demand and Supply]]** — Where these functions show up with units attached. Modelling marks in Maths AI reward exactly this kind of context.
- **[[Chapter 1: Introduction to Economics|Economics · PPC]]** — Non-linear modelling with a real interpretation of gradient.
