import type { Flashcard } from '../types'

export const ch2Flashcards: Flashcard[] = [
  // ── Section 2.1 — Straight lines ─────────────────────────────────
  {
    q: 'Give the formula for the gradient of a line through (x₁, y₁) and (x₂, y₂).',
    a: 'm = (y₂ − y₁) / (x₂ − x₁). Positive = rises left-to-right, negative = falls, zero = horizontal, undefined (division by zero) = vertical.',
    hint: 'Rise over run',
  },
  {
    q: 'Name the three forms of a straight line and what each lets you read off directly.',
    a: 'Slope–intercept y = mx + c (gradient m, y-intercept c). Point–slope y − y₁ = m(x − x₁) (line through (x₁, y₁) with gradient m). Standard/general ax + by + d = 0 (useful for finding intercepts).',
  },
  {
    q: 'What is the gradient relationship for parallel and for perpendicular lines?',
    a: 'Parallel: m₁ = m₂ (same gradient). Perpendicular: m₁ · m₂ = −1 (equivalently m₂ = −1/m₁). Does NOT apply if one line is horizontal or vertical — use geometric reasoning there.',
  },
  {
    q: 'Line L₁ passes through (2, 3) and (6, 11). Find its equation and the equation of a perpendicular line through (0, 4).',
    a: 'Gradient of L₁ = (11 − 3)/(6 − 2) = 2. Point–slope: y − 3 = 2(x − 2) → y = 2x − 1. Perpendicular gradient = −1/2, y-intercept 4 → y = −½x + 4.',
    hint: 'm = 2 → perpendicular m = −½',
  },

  // ── Section 2.2 — Functions & inverse ────────────────────────────
  {
    q: 'What are domain and range?',
    a: 'Domain — the set of all valid inputs to the function. Range — the set of all outputs the function actually produces.',
  },
  {
    q: 'Name the three common domain restrictions.',
    a: '1) Division — denominator cannot be zero. 2) Square roots (any even root) — radicand must be ≥ 0. 3) Logarithms — argument must be > 0.',
    hint: 'Zero-denom / negative-radicand / non-positive-log',
  },
  {
    q: 'What condition must a function satisfy to have an inverse function?',
    a: 'It must be one-to-one on its domain — each output value comes from at most one input value. f(x) = x² is not one-to-one on ℝ because 2 and −2 both map to 4; restrict domain to x ≥ 0 to make it one-to-one.',
    hint: 'One-to-one → invertible',
  },
  {
    q: 'What is the graphical relationship between f(x) and f⁻¹(x)?',
    a: 'The graph of f⁻¹(x) is the reflection of f(x) in the line y = x. Every point (a, b) on f corresponds to a point (b, a) on f⁻¹.',
  },
  {
    q: 'Give the four steps for finding f⁻¹(x) algebraically.',
    a: '1) Write y = f(x). 2) Swap x and y. 3) Solve for y. 4) Rewrite as f⁻¹(x). Verify: f(f⁻¹(x)) = x.',
  },
  {
    q: 'Find f⁻¹(x) if f(x) = 3x − 6.',
    a: 'y = 3x − 6. Swap: x = 3y − 6. Solve: y = (x + 6)/3. So f⁻¹(x) = (x + 6)/3. Check: f(f⁻¹(x)) = 3·(x+6)/3 − 6 = x ✓',
  },

  // ── Section 2.3 — GDC ────────────────────────────────────────────
  {
    q: 'Name the four GDC operations to master before SA1 for Maths AI.',
    a: 'Enter a function (Y= or equivalent), find a zero (root), find an intersection of two graphs (intersect), run a regression (LinReg / ExpReg / SinReg). These come up in almost every question.',
  },
  {
    q: 'How should you write a GDC answer to show working?',
    a: 'State the method briefly. Examples: "Using GDC, x = 3.47 (3 s.f.)." "Using GDC intersect, (2.14, 5.83) (3 s.f.)." Default accuracy is 3 significant figures unless the question specifies otherwise.',
    hint: 'Name the tool, give the answer to 3 s.f.',
  },

  // ── Section 2.4 — Key features ───────────────────────────────────
  {
    q: 'Name the standard checklist of graph features you should identify.',
    a: 'x-intercepts (roots/zeros), y-intercept, local maxima and minima, global max/min, vertical asymptotes, horizontal asymptotes, symmetry (even/odd), intersections with other graphs.',
  },
  {
    q: 'Find the intersections of f(x) = x² − 4 and g(x) = 2x − 1.',
    a: 'Set equal: x² − 4 = 2x − 1 → x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0. So x = 3 (y = 5) and x = −1 (y = −3). Points: (3, 5) and (−1, −3).',
  },
  {
    q: 'Where is a vertical asymptote of a rational function typically found?',
    a: 'Where the denominator equals zero (and the numerator does not). For f(x) = (ax + b)/(cx + d), the vertical asymptote is x = −d/c.',
  },

  // ── Section 2.5–2.6 modelling ────────────────────────────────────
  {
    q: 'Given a scatter of data, what heuristic picks the model family?',
    a: 'Plot first. Straight line → linear. Curve toward a horizontal asymptote → exponential. Periodic → sinusoidal. Symmetric U or ∩ → quadratic. Sharp inverse behaviour with asymptote → rational or inverse variation. Bounded S-shape → logistic. Different rules on different intervals → piecewise.',
  },
  {
    q: 'Name the seven modelling moves in order.',
    a: '1) Read the data and units. 2) Choose model family (justify). 3) Fit parameters (GDC regression or algebra). 4) Interpret parameters in context. 5) Check fit (R², visual). 6) State domain restrictions. 7) Comment on validity — where does the model break down?',
  },
  {
    q: 'Why is extrapolation dangerous in modelling?',
    a: 'A model fitted on limited data will happily predict far outside its window, but the assumptions almost certainly do not hold there. Always state where you would NOT trust the model — e.g., "valid for t ∈ [0, 20], extrapolation beyond this is unreliable".',
    hint: 'Models die at the edges',
  },
  {
    q: 'For y = a·sin(b(x − c)) + d, what does each parameter mean?',
    a: 'a = amplitude (half the vertical distance between max and min). b controls period; period = 2π/b. c = horizontal phase shift. d = vertical shift (mid-line).',
  },
  {
    q: 'For y = k·a^x + c, what does each parameter mean?',
    a: 'k = initial value above the horizontal asymptote. a = growth factor per unit of x (a > 1 → growth; 0 < a < 1 → decay). c = horizontal asymptote (long-run behaviour as x → −∞ if growing).',
  },

  // ── Section 2.7 — Composite functions ────────────────────────────
  {
    q: 'What does (f ∘ g)(x) mean, and does f ∘ g equal g ∘ f?',
    a: '(f ∘ g)(x) = f(g(x)) — apply g first, then f. In general f ∘ g ≠ g ∘ f; the order matters. Read composite functions from the inside out.',
  },
  {
    q: 'For f(x) = 2x + 1 and g(x) = x², find (f ∘ g)(x) and (g ∘ f)(x).',
    a: '(f ∘ g)(x) = f(g(x)) = f(x²) = 2x² + 1. (g ∘ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)² = 4x² + 4x + 1. Different — order matters.',
  },
  {
    q: 'What is the domain of f ∘ g?',
    a: 'The set of x in the domain of g such that g(x) lies in the domain of f. Two conditions: (1) x must be a valid input to g, AND (2) g(x) must be a valid input to f.',
  },
  {
    q: 'How do you find f⁻¹ for f(x) = x² when it is not one-to-one?',
    a: 'Restrict the domain first. On x ≥ 0, f is one-to-one. Then y = x² → x = y² → y = √x (positive root). So f⁻¹(x) = √x with domain x ≥ 0. Range of f becomes domain of f⁻¹.',
  },

  // ── Section 2.8 — Transformations ────────────────────────────────
  {
    q: 'What does f(x) + b do to the graph?',
    a: 'Vertical translation by +b. Whole graph moves UP if b > 0, DOWN if b < 0. Outside the bracket — acts as it looks.',
  },
  {
    q: 'What does f(x + a) do to the graph?',
    a: 'Horizontal translation by −a. If a > 0, graph moves LEFT (INVERTED from what it looks like). Inside the bracket — acts opposite.',
    hint: 'Inside bracket = inverted',
  },
  {
    q: 'What does p · f(x) do vs f(q · x)?',
    a: 'p · f(x) — vertical stretch by factor p (compression if 0 < p < 1). f(q · x) — horizontal stretch by factor 1/q (compression if q > 1). Outside is intuitive; inside is inverted.',
  },
  {
    q: 'For y = 2f(x − 3) + 4, describe the transformations in the correct order.',
    a: '1) Inside first — x − 3 shifts RIGHT by 3. 2) Vertical stretch outside — multiply outputs by 2. 3) Vertical shift outside — add 4. Order: horizontal → vertical stretch → vertical shift.',
  },
  {
    q: 'What is the single most common transformation mistake?',
    a: 'Inside-the-bracket inversion. f(x + 3) shifts LEFT, not right. f(2x) COMPRESSES horizontally, not stretches. Anything inside the bracket acts opposite to what it looks like; anything outside acts as expected.',
    hint: 'Inside bracket = inverted',
  },

  // ── Section 2.9 — HL modelling ───────────────────────────────────
  {
    q: 'Which model type is EXCLUDED from the Maths AI HL SA1 syllabus you have?',
    a: 'The logarithmic model. Focus revision on the other HL model types: rational, logistic, piecewise, extended polynomial, extended sinusoidal, direct/inverse variation.',
    hint: 'Except Log Model',
  },
  {
    q: 'Give the standard form of the logistic model and what each parameter means.',
    a: 'P(t) = L / (1 + C·e^(−kt)). L = carrying capacity (upper asymptote). k = growth-rate parameter (larger = steeper). C = shape parameter = (L − P₀)/P₀ where P₀ is initial value. Shape: S-curve, starts exponential, flattens toward L.',
  },
  {
    q: 'A rumour spreads through 500 students. Initially 5 know; k = 0.4/day. Give the logistic model and P at 10 days.',
    a: 'L = 500, P₀ = 5, C = (500 − 5)/5 = 99. Model: P(t) = 500/(1 + 99e^(−0.4t)). P(10) = 500/(1 + 99·e^(−4)) = 500/(1 + 99·0.0183) ≈ 500/2.813 ≈ 178 students.',
  },
  {
    q: 'For a rational function f(x) = (ax + b)/(cx + d), give the vertical and horizontal asymptotes.',
    a: 'Vertical asymptote: x = −d/c (where denominator = 0). Horizontal asymptote: y = a/c (ratio of leading coefficients as x → ±∞). Domain: all real numbers except x = −d/c. Range: all real numbers except y = a/c.',
  },
  {
    q: 'How do you check continuity of a piecewise function at a boundary point?',
    a: 'Evaluate both pieces at the boundary x-value and check whether they give the same y-value. If yes, continuous at that boundary. If no, discontinuous — a jump. A common exam-question focus.',
  },

  // ── Section 2.10–2.11 formulas and traps ─────────────────────────
  {
    q: 'Give the distance and midpoint formulas for two points (x₁, y₁) and (x₂, y₂).',
    a: 'Distance d = √((x₂ − x₁)² + (y₂ − y₁)²). Midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2).',
  },
  {
    q: 'Name three common exam traps in the SA1 Functions paper.',
    a: 'Any three: inside-bracket inversion in transformations; forgetting to restrict domain when inverting; using log model when the syllabus excludes it; skipping units in modelling; extrapolating without stating limits; not naming the GDC tool used; confusing composite order (f ∘ g ≠ g ∘ f).',
  },
]
