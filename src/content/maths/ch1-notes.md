# Chapter 1: Functions

> Maths AI HL — first topic of DP1. Covers the six function families you'll use across every future topic (calculus, statistics, modelling): **quadratic, rational, composite, inverse, exponential, logarithmic**.
>
> **How to use these notes:** each section has (1) the core theory, (2) the shapes and shortcuts you should memorise, (3) worked examples, and (4) the exam traps that cost easy marks. The flashcards drill the definitions; these notes drill the *reasoning*.

---

## Section 1.1 — Function Basics (Domain, Range, Notation)

A **function** *f* maps every input from a **domain** to exactly one output in a **range**. Written *f* : *x* ↦ *f*(*x*), or *y* = *f*(*x*).

**The one-in-one-out rule (vertical line test).** A curve represents a function only if every vertical line crosses it at most once. A circle is *not* a function of *x*. A parabola opening upward *is*.

**Domain** = the set of allowed inputs. When a domain is not stated, it is assumed to be the largest subset of ℝ for which *f*(*x*) is defined. Three restrictions do most of the work:

- **Division:** the denominator cannot be zero. For *f*(*x*) = 1/(*x* − 3), domain is *x* ∈ ℝ, *x* ≠ 3.
- **Square roots (and any even root):** the radicand must be ≥ 0. For *f*(*x*) = √(*x* − 5), domain is *x* ≥ 5.
- **Logarithms:** the argument must be > 0. For *f*(*x*) = ln(*x* + 2), domain is *x* > −2.

**Range** = the set of possible outputs. Find it by (a) inspecting the graph, (b) considering the vertex/asymptotes of the function family, or (c) letting *y* = *f*(*x*) and solving for *x* in terms of *y* — the *y*-values that yield a real *x* are the range.

**Notation conventions.**
- ℝ = all real numbers. ℝ⁺ = positive reals. ℝ⁺₀ = non-negative reals.
- Interval notation: [*a*, *b*] closed, (*a*, *b*) open, [*a*, ∞) half-open.
- Set-builder: { *x* ∈ ℝ : *x* > 3 } reads "*x* in the reals such that *x* > 3".

**Piecewise functions** are defined by different rules on different pieces of the domain. Check continuity at the join by testing left-hand and right-hand values.

---

## Section 1.2 — Quadratic Functions

Any function of the form *f*(*x*) = *ax*² + *bx* + *c*, *a* ≠ 0. The graph is a **parabola**.

**Three equivalent forms — choose based on what you want to read off.**

| Form | Expression | What it tells you directly |
|---|---|---|
| Standard | *f*(*x*) = *ax*² + *bx* + *c* | *y*-intercept = *c*; opens up if *a* > 0, down if *a* < 0 |
| Vertex | *f*(*x*) = *a*(*x* − *h*)² + *k* | Vertex is at (*h*, *k*); axis of symmetry *x* = *h* |
| Factored | *f*(*x*) = *a*(*x* − *p*)(*x* − *q*) | Roots at *x* = *p* and *x* = *q* |

**Axis of symmetry and vertex from standard form.**

- Axis: *x* = −*b* / (2*a*)
- Vertex *y*-value: substitute the axis back into *f*(*x*), or use *k* = *c* − *b*²/(4*a*).

**The discriminant Δ = *b*² − 4*ac*** decides how the parabola meets the *x*-axis:

- Δ > 0 → two distinct real roots (parabola crosses the axis)
- Δ = 0 → one repeated root (parabola touches the axis at the vertex)
- Δ < 0 → no real roots (parabola sits entirely above or below the axis)

**Quadratic formula.** For *ax*² + *bx* + *c* = 0:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Sum and product of roots (Vieta's).** If *p* and *q* are the roots of *ax*² + *bx* + *c* = 0:

- *p* + *q* = −*b* / *a*
- *pq* = *c* / *a*

Use this when a question gives you a relationship between the roots without asking you to solve for them.

**Completing the square** converts standard form → vertex form. Take the coefficient of *x*, halve it, square it, add-and-subtract:

*x*² − 6*x* + 11 = (*x*² − 6*x* + 9) − 9 + 11 = (*x* − 3)² + 2. Vertex (3, 2).

**Worked example.** Find the range of *f*(*x*) = 2*x*² − 8*x* + 5.
Vertex form: 2(*x*² − 4*x*) + 5 = 2((*x* − 2)² − 4) + 5 = 2(*x* − 2)² − 3.
Vertex (2, −3), opens upward. **Range: *f*(*x*) ≥ −3.**

**Applications in Maths AI HL:** quadratic models for projectile motion, revenue/profit maximisation, area optimisation. The vertex almost always corresponds to the "best" answer (max profit, max height, min cost).

---

## Section 1.3 — Rational Functions

A function of the form *f*(*x*) = *P*(*x*) / *Q*(*x*), where *P* and *Q* are polynomials and *Q*(*x*) is not the zero polynomial. In this course you mostly see linear-over-linear and quadratic-over-linear.

### The reciprocal function *f*(*x*) = 1/*x*

The prototype. Domain *x* ≠ 0, range *y* ≠ 0. Two asymptotes: vertical *x* = 0, horizontal *y* = 0. The curve sits in the first and third quadrants (odd function; symmetric about the origin).

### Linear-over-linear: *f*(*x*) = (*ax* + *b*) / (*cx* + *d*)

- **Vertical asymptote (VA):** set the denominator to zero. *cx* + *d* = 0 ⇒ *x* = −*d*/*c*.
- **Horizontal asymptote (HA):** ratio of leading coefficients. *y* = *a*/*c*.
- **Domain:** *x* ≠ −*d*/*c*.
- **Range:** *y* ≠ *a*/*c*.
- **Intercepts:** *y*-intercept at (0, *b*/*d*) (if *d* ≠ 0). *x*-intercept at (−*b*/*a*, 0) (if *a* ≠ 0).

**Worked example.** *f*(*x*) = (2*x* − 3) / (*x* + 1). VA: *x* = −1. HA: *y* = 2. Domain *x* ∈ ℝ, *x* ≠ −1. Range *y* ∈ ℝ, *y* ≠ 2. *y*-intercept (0, −3). *x*-intercept (3/2, 0).

### Rational functions with a quadratic on top or bottom

- If the **degree of numerator > degree of denominator by 1**, there is an **oblique (slant) asymptote**. Find it by polynomial long division; the quotient (ignoring the remainder) is the equation of the asymptote.
- If **numerator and denominator share a common factor**, that value of *x* is a **hole** in the graph, not a vertical asymptote. Cancel the factor before analysing.
- **Sketching:** plot the asymptotes as dashed lines first. Then plot the intercepts. Then decide which of the four "regions" separated by the asymptotes the curve lives in, using a single test point in each region.

### Asymptote rules (all rational functions), in one table

| Degree comparison | Horizontal asymptote |
|---|---|
| deg(*P*) < deg(*Q*) | *y* = 0 |
| deg(*P*) = deg(*Q*) | *y* = ratio of leading coefficients |
| deg(*P*) > deg(*Q*) | none — slant if difference is 1 |

---

## Section 1.4 — Composite Functions

The **composition** of *f* and *g* is (*f* ∘ *g*)(*x*) = *f*(*g*(*x*)) — apply *g* first, then feed the result into *f*. Read right-to-left.

**Order matters:** in general *f*(*g*(*x*)) ≠ *g*(*f*(*x*)). Composition is *not* commutative.

**Domain of a composite.** *f*(*g*(*x*)) is defined only when (a) *x* is in the domain of *g*, and (b) *g*(*x*) is in the domain of *f*. You have to check *both* — the second is where marks get lost.

**Worked example.** *f*(*x*) = √*x*, *g*(*x*) = *x* − 3.

- *f*(*g*(*x*)) = √(*x* − 3). Domain: *x* − 3 ≥ 0 ⇒ *x* ≥ 3.
- *g*(*f*(*x*)) = √*x* − 3. Domain: *x* ≥ 0 (from √*x*). Range: *y* ≥ −3.

The two composites are different functions with different domains.

**A three-step recipe for finding *f*(*g*(*x*)):**

1. Write down *f*(*x*) with a box wherever *x* appears: *f*(☐) = 2☐² + 5.
2. Fill every box with *g*(*x*).
3. Simplify.

**Decomposing a composite** (splitting *h*(*x*) back into *f* ∘ *g*): identify the "inner" operation and call that *g*; whatever wraps around it is *f*. Example: *h*(*x*) = (2*x* + 1)⁵. Let *g*(*x*) = 2*x* + 1 and *f*(*x*) = *x*⁵; then *h* = *f* ∘ *g*.

**Identity composition.** For any function *f*, *f*(*f*⁻¹(*x*)) = *x* on the domain of *f*⁻¹, and *f*⁻¹(*f*(*x*)) = *x* on the domain of *f*. This is the definition of an inverse — see next section.

---

## Section 1.5 — Inverse Functions

The **inverse** of *f*, written *f*⁻¹, "undoes" *f*. If *f* sends *a* to *b*, then *f*⁻¹ sends *b* to *a*.

Formally: *f*⁻¹(*f*(*x*)) = *x* for all *x* in the domain of *f*.

**Existence — the one-to-one rule.** *f*⁻¹ exists as a function only if *f* is **one-to-one** (each output comes from at most one input). Test with the **horizontal line test**: any horizontal line meets the graph at most once. *y* = *x*² on all of ℝ fails; restrict to *x* ≥ 0 and it passes.

**The domain-range swap.**

- Domain of *f*⁻¹ = Range of *f*.
- Range of *f*⁻¹ = Domain of *f*.

**Finding *f*⁻¹(*x*) algebraically — the four-step method.**

1. Write *y* = *f*(*x*).
2. Swap *x* and *y*.
3. Solve the new equation for *y*.
4. That *y* is *f*⁻¹(*x*). State the domain (which is the range of the original *f*).

**Worked example.** *f*(*x*) = 3*x* − 5.

1. *y* = 3*x* − 5.
2. *x* = 3*y* − 5.
3. *y* = (*x* + 5)/3.
4. *f*⁻¹(*x*) = (*x* + 5)/3. Domain ℝ.

**Worked example (with a restricted domain).** *f*(*x*) = *x*² for *x* ≥ 0.

1. *y* = *x*².
2. *x* = *y*².
3. *y* = √*x* (take the positive root because the original domain was *x* ≥ 0).
4. *f*⁻¹(*x*) = √*x*. Domain *x* ≥ 0.

**Graphical property.** The graph of *y* = *f*⁻¹(*x*) is the reflection of *y* = *f*(*x*) in the line *y* = *x*. So (*a*, *b*) on *f* corresponds to (*b*, *a*) on *f*⁻¹.

**Self-inverse functions** satisfy *f*⁻¹(*x*) = *f*(*x*). Examples: *f*(*x*) = *x*, *f*(*x*) = 1/*x*, *f*(*x*) = *a* − *x* (for any constant *a*). Their graphs are symmetric about *y* = *x*.

**Warning about notation.** *f*⁻¹(*x*) does **not** mean 1/*f*(*x*). The −1 is a functional-inverse symbol, not an exponent. If you want the reciprocal, write [*f*(*x*)]⁻¹ or 1/*f*(*x*).

---

## Section 1.6 — Exponential Functions

A function of the form *f*(*x*) = *a* · *b*ˣ, where *a* is a constant, *b* > 0 and *b* ≠ 1. The variable is in the *exponent* — that's what makes it exponential (not *x*², which is polynomial).

**The shape.**

- *b* > 1: **exponential growth** — curve rises steeply to the right, flattens toward *y* = 0 on the left.
- 0 < *b* < 1: **exponential decay** — mirror image; falls toward *y* = 0 on the right.
- Passes through (0, *a*) regardless of *b*.
- Horizontal asymptote: *y* = 0 (for the pure form; shifted if you add a constant).
- Domain: ℝ. Range: *y* > 0 (or *y* < 0 if *a* is negative).

**Laws of exponents** (memorise cold — these underpin every log/exp manipulation):

- *b*ᵐ · *bⁿ* = *b*⁽ᵐ⁺ⁿ⁾
- *b*ᵐ / *bⁿ* = *b*⁽ᵐ⁻ⁿ⁾
- (*b*ᵐ)ⁿ = *b*⁽ᵐⁿ⁾
- (*ab*)ⁿ = *aⁿ* · *bⁿ*
- *b*⁰ = 1
- *b*⁻ⁿ = 1 / *bⁿ*
- *b*^(1/*n*) = ⁿ√*b*

**The natural exponential *e*ˣ.** *e* ≈ 2.71828… is the unique base for which the tangent to *y* = *bˣ* at *x* = 0 has slope 1. It arises naturally in continuous compounding, radioactive decay, and (later) calculus — the derivative of *eˣ* is *eˣ*.

**Growth/decay models.**

- **Doubling / halving form:** *N*(*t*) = *N*₀ · 2^(*t*/*T*) where *T* is the doubling time (or use 1/2 for halving).
- **Continuous form:** *N*(*t*) = *N*₀ · *e*^(*kt*) where *k* > 0 for growth, *k* < 0 for decay.
- **Compound interest:** final value = *P*(1 + *r*/*n*)^(*nt*), where *r* is the annual rate, *n* the compounding periods per year, *t* the years. Continuous compounding: *A* = *Pe*^(*rt*).

**Worked example.** A radioactive isotope has a half-life of 8 years. Starting mass 200 g. How much remains after 30 years?

*N*(30) = 200 · (1/2)^(30/8) = 200 · 0.5^3.75 ≈ 200 · 0.0744 ≈ **14.9 g**.

**Applications in AI HL:** population growth, viral spread (early stage), radioactive decay, drug elimination pharmacokinetics, unrestricted savings growth, learning/forgetting curves, Newton's law of cooling.

---

## Section 1.7 — Logarithmic Functions

The **logarithm** is the inverse of the exponential. log*ᵦ*(*x*) answers the question "to what power must I raise *b* to get *x*?"

The defining equivalence:

**log*ᵦ*(*x*) = *y*   ⟺   *bʸ* = *x***

Read both ways until it's automatic — half of log problems solve themselves once you rewrite in exponential form (or vice versa).

**Two special bases with their own names.**

- **Common log:** log(*x*) means log₁₀(*x*). Used in pH, decibels, Richter scale.
- **Natural log:** ln(*x*) means log*ₑ*(*x*). Used everywhere in calculus and continuous-time modelling.

**Laws of logs** (same base throughout):

- log*ᵦ*(*xy*) = log*ᵦ*(*x*) + log*ᵦ*(*y*)   *(product law)*
- log*ᵦ*(*x*/*y*) = log*ᵦ*(*x*) − log*ᵦ*(*y*)   *(quotient law)*
- log*ᵦ*(*xⁿ*) = *n* · log*ᵦ*(*x*)   *(power law)*
- log*ᵦ*(1) = 0
- log*ᵦ*(*b*) = 1
- log*ᵦ*(*b*ˣ) = *x*   and   *b*^(log*ᵦ*(*x*)) = *x*   *(inverse identities)*

**Change of base formula** — how to compute log₇(20) on a calculator that only has log and ln:

$$\log_b(x) = \frac{\log(x)}{\log(b)} = \frac{\ln(x)}{\ln(b)}$$

**The shape of *y* = log*ᵦ*(*x*), *b* > 1:**

- Domain: *x* > 0. Range: ℝ.
- Passes through (1, 0) — because log*ᵦ*(1) = 0 for every *b*.
- Vertical asymptote: *x* = 0.
- Mirror image of *y* = *bˣ* across *y* = *x*.
- Grows without bound but *very slowly*.

**Solving exponential equations by logging both sides.**

*Solve* 3^(*x*+1) = 50.
Take ln of both sides: (*x* + 1) · ln 3 = ln 50 ⇒ *x* = (ln 50 / ln 3) − 1 ≈ 3.561 − 1 = **2.561**.

**Solving logarithmic equations.**

*Solve* log₂(*x*) + log₂(*x* − 2) = 3.
Combine: log₂(*x*(*x* − 2)) = 3 ⇒ *x*(*x* − 2) = 2³ = 8 ⇒ *x*² − 2*x* − 8 = 0 ⇒ (*x* − 4)(*x* + 2) = 0.
*x* = 4 or *x* = −2. **Reject *x* = −2** (log of a negative is undefined). Answer: *x* = 4.

> **Trap:** always check that every log in the original equation has a positive argument at your final answer. Half of full-mark solutions get docked because a candidate keeps a solution that makes log(negative) appear.

---

## Section 1.8 — Combining the Families: Transformations

Every function you've met can be shifted, stretched, and reflected. There are four moves; each one lives on the "inside" (affecting *x*) or the "outside" (affecting *y*), and inside moves are backwards.

Let *y* = *f*(*x*). Then:

| Transformation | Effect |
|---|---|
| *y* = *f*(*x*) + *k* | shift **up** by *k* (down if *k* < 0) |
| *y* = *f*(*x* − *h*) | shift **right** by *h* (opposite sign — this is the counter-intuitive one) |
| *y* = *a* · *f*(*x*) | vertical stretch by factor *a*; if *a* < 0, reflect in the *x*-axis |
| *y* = *f*(*bx*) | horizontal stretch by factor 1/*b*; if *b* < 0, reflect in the *y*-axis |

**Order of operations for a combined transformation** *y* = *a* · *f*(*b*(*x* − *h*)) + *k*: inside first (horizontal shift, then horizontal stretch/reflection), then outside (vertical stretch/reflection, then vertical shift). Mnemonic: **HSRT** — Horizontal shift, Stretch, then Reflect (vertical), Translate (vertical).

**Worked example.** Sketch *y* = 2 · *e*⁻ˣ + 3.

Start with *y* = *eˣ*. Reflect in *y*-axis → *y* = *e*⁻ˣ. Stretch vertically ×2 → *y* = 2*e*⁻ˣ. Shift up 3 → *y* = 2*e*⁻ˣ + 3. New asymptote is *y* = 3.

---

## Section 1.9 — Summary Table (The Six Families at a Glance)

| Family | Standard form | Domain | Range | Key features |
|---|---|---|---|---|
| Linear | *y* = *mx* + *c* | ℝ | ℝ | slope *m*, *y*-int *c* |
| Quadratic | *y* = *ax*² + *bx* + *c* | ℝ | *y* ≥ *k* (or ≤ *k*) | vertex, parabola |
| Rational (1/x type) | *y* = (*ax*+*b*)/(*cx*+*d*) | *x* ≠ −*d*/*c* | *y* ≠ *a*/*c* | vertical + horizontal asymptotes |
| Exponential | *y* = *a* · *bˣ* | ℝ | *y* > 0 (or < 0) | HA at *y* = 0; passes (0, *a*) |
| Logarithmic | *y* = log*ᵦ*(*x*) | *x* > 0 | ℝ | VA at *x* = 0; passes (1, 0) |
| Composite/Inverse | *f*(*g*(*x*)) / *f*⁻¹ | depends | depends | domain-range swap for inverse |

---

## Section 1.10 — Exam-Ready Definitions

- **Function** — a rule that assigns *exactly one* output to each input from a specified domain.
- **Domain** — the set of allowed inputs for a function.
- **Range** — the set of possible outputs of a function.
- **One-to-one function** — a function where each output comes from exactly one input (passes the horizontal line test).
- **Vertical asymptote** — a vertical line *x* = *a* such that *f*(*x*) → ±∞ as *x* → *a*.
- **Horizontal asymptote** — a horizontal line *y* = *L* such that *f*(*x*) → *L* as *x* → ±∞.
- **Discriminant** — the quantity *b*² − 4*ac* for a quadratic *ax*² + *bx* + *c*; determines the number of real roots.
- **Composite function *f* ∘ *g*** — the function defined by (*f* ∘ *g*)(*x*) = *f*(*g*(*x*)); apply *g* first, then *f*.
- **Inverse function *f*⁻¹** — a function that undoes *f*, so that *f*⁻¹(*f*(*x*)) = *x*; exists as a function only if *f* is one-to-one.
- **Exponential function** — a function of the form *f*(*x*) = *a* · *bˣ* with *b* > 0, *b* ≠ 1; the variable sits in the exponent.
- **Logarithm log*ᵦ*(*x*)** — the exponent to which *b* must be raised to yield *x*; the inverse of *bˣ*.
- **Natural log ln(*x*)** — the logarithm with base *e*.
- **Self-inverse** — a function equal to its own inverse; graph is symmetric about *y* = *x*.

---

## Section 1.11 — Common Exam Traps (Learn These Now)

1. **Forgetting to state the domain** after finding an inverse. Marks are awarded for the domain statement in most inverse-function questions.
2. **Keeping extraneous solutions** from log equations (values that make log(negative) or log(0)). Always check both sides.
3. **Writing "*x* ≠ 0" as domain when it should be "*x* > 0"** for logs.
4. **Confusing *f*⁻¹(*x*) with 1/*f*(*x*)**. They are almost never the same.
5. **Using product law when there's no product** — log(*x* + *y*) is NOT log *x* + log *y*. The law is for log(*xy*).
6. **Mis-reading the "inside" horizontal shift.** *f*(*x* − 3) shifts right by 3, not left.
7. **Cancelling in rational functions without noting the hole.** (*x* − 2)(*x* + 1) / (*x* − 2) simplifies to (*x* + 1), but there's still a hole at *x* = 2.
8. **Dropping the ± when taking a square root.** Especially in vertex-form problems.
9. **Assuming a composite has the same domain as the outer function.** *f*(*g*(*x*)) needs *x* to be valid for *g*, then *g*(*x*) to be valid for *f*.
10. **Ignoring GDC exact-form requirements.** Some questions demand exact values; a decimal from the calculator loses accuracy marks.

---

## Section 1.12 — GDC Tips (TI-84 / TI-Nspire / Casio)

- **Solve any equation graphically** by graphing both sides and using the intersection tool. Faster than algebra when the equation is ugly.
- **Find domain and range** by graphing and using the trace/analyze menu for max/min, roots, asymptotes.
- **Verify inverses** by graphing *f* and *f*⁻¹ and adding *y* = *x*; the two curves should mirror across the line.
- **For logs of unusual bases**, use the change-of-base formula: log₇(20) → LN(20)/LN(7).
- **Store constants** (like a half-life value) in a letter so a family of related calculations doesn't compound rounding error.

---

*Notes compiled August 2026 for Maths AI HL, DP1. Update after each teacher clarification or past-paper insight.*
