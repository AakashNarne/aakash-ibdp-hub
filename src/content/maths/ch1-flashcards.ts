import type { Flashcard } from '../types'

export const ch1Flashcards: Flashcard[] = [
  // ── Section 1.1 — Function Basics ─────────────────────────────
  {
    q: 'What is the formal definition of a function?',
    a: 'A rule that assigns exactly one output to each input from a specified domain. Written f : x ↦ f(x). Every input has one and only one output — the "one-in-one-out" rule.',
    hint: 'One-in-one-out',
  },
  {
    q: 'What is the vertical line test?',
    a: 'A curve represents a function only if every vertical line crosses it at most once. A circle fails; a parabola opening upward passes.',
  },
  {
    q: 'What are the three most common restrictions on the domain?',
    a: '1. Denominator ≠ 0 (division). 2. Radicand ≥ 0 (even roots). 3. Argument > 0 (logarithms).',
  },
  {
    q: 'Find the domain of f(x) = √(x − 5) + 1/(x − 8).',
    a: 'Need x − 5 ≥ 0 AND x − 8 ≠ 0. So x ≥ 5 and x ≠ 8. Domain: [5, 8) ∪ (8, ∞).',
    hint: 'Two restrictions — combine them',
  },
  {
    q: 'What is the difference between domain and range?',
    a: 'Domain = allowed INPUTS (x-values). Range = possible OUTPUTS (y-values). Domain is what you feed in; range is what comes out.',
  },

  // ── Section 1.2 — Quadratic Functions ─────────────────────────
  {
    q: 'Name the three forms of a quadratic and what each reveals immediately.',
    a: 'Standard: ax² + bx + c → y-intercept c. Vertex: a(x − h)² + k → vertex (h, k). Factored: a(x − p)(x − q) → roots at p and q.',
  },
  {
    q: 'What is the axis of symmetry of y = ax² + bx + c?',
    a: 'x = −b / (2a). The vertex sits on this line. Substitute back to get the vertex y-coordinate.',
  },
  {
    q: 'State the discriminant and what each case tells you.',
    a: 'Δ = b² − 4ac. Δ > 0 → two distinct real roots (crosses x-axis). Δ = 0 → one repeated root (touches at vertex). Δ < 0 → no real roots (does not cross x-axis).',
    hint: 'Δ = b² − 4ac',
  },
  {
    q: 'State the quadratic formula.',
    a: 'x = (−b ± √(b² − 4ac)) / (2a). Solves ax² + bx + c = 0 for any a, b, c.',
  },
  {
    q: 'Sum and product of roots (Vieta\'s formulas) for ax² + bx + c = 0?',
    a: 'Sum of roots p + q = −b / a. Product of roots pq = c / a. Useful when the question gives a relationship between roots without needing you to solve.',
  },
  {
    q: 'Convert f(x) = 2x² − 8x + 5 into vertex form.',
    a: '2(x² − 4x) + 5 = 2((x − 2)² − 4) + 5 = 2(x − 2)² − 3. Vertex (2, −3), opens upward. Range: y ≥ −3.',
    hint: 'Complete the square',
  },
  {
    q: 'How do you decide if a parabola opens upward or downward?',
    a: 'Look at the coefficient a in ax² + bx + c. a > 0 → opens UP (vertex is a minimum). a < 0 → opens DOWN (vertex is a maximum).',
  },

  // ── Section 1.3 — Rational Functions ──────────────────────────
  {
    q: 'How do you find the vertical asymptote of a rational function?',
    a: 'Set the denominator equal to zero (after cancelling any common factors with the numerator). Solutions are vertical asymptotes — unless they also make the numerator zero after simplification (those are holes).',
  },
  {
    q: 'How do you find the horizontal asymptote of a rational function?',
    a: 'Compare degrees. If deg(num) < deg(den): HA is y = 0. If deg(num) = deg(den): HA is the ratio of leading coefficients. If deg(num) > deg(den): no HA (a slant asymptote exists if the degree difference is 1).',
  },
  {
    q: 'For f(x) = (2x − 3)/(x + 1), state VA, HA, domain, range.',
    a: 'VA: x = −1 (denominator zero). HA: y = 2 (ratio of leading coefficients). Domain: x ∈ ℝ, x ≠ −1. Range: y ∈ ℝ, y ≠ 2.',
  },
  {
    q: 'What is the difference between a vertical asymptote and a hole?',
    a: 'Both come from denominator = 0. If that factor also cancels with a factor of the numerator, you get a HOLE (removable discontinuity). If it does not cancel, you get a vertical ASYMPTOTE.',
  },
  {
    q: 'What are the key features of f(x) = 1/x?',
    a: 'Domain x ≠ 0. Range y ≠ 0. VA x = 0, HA y = 0. Odd function (symmetric about origin). Sits in quadrants I and III. It is its own inverse.',
  },

  // ── Section 1.4 — Composite Functions ─────────────────────────
  {
    q: 'What does (f ∘ g)(x) mean?',
    a: 'f(g(x)) — apply g FIRST, then feed the result into f. Read right-to-left. Composition is NOT commutative: in general f(g(x)) ≠ g(f(x)).',
  },
  {
    q: 'If f(x) = √x and g(x) = x − 3, find both composites and their domains.',
    a: 'f(g(x)) = √(x − 3), domain x ≥ 3. g(f(x)) = √x − 3, domain x ≥ 0 (range y ≥ −3). Different functions, different domains.',
  },
  {
    q: 'What are the two conditions for f(g(x)) to be defined at x?',
    a: '(1) x must be in the domain of g. (2) g(x) must be in the domain of f. BOTH conditions must hold — checking only the first is a common exam-mark loss.',
    hint: 'Two conditions, both must hold',
  },
  {
    q: 'Decompose h(x) = (2x + 1)⁵ into f(g(x)).',
    a: 'The inner operation is 2x + 1, so let g(x) = 2x + 1. The outer operation is raising to the 5th power, so f(x) = x⁵. Then h = f ∘ g.',
  },

  // ── Section 1.5 — Inverse Functions ───────────────────────────
  {
    q: 'What does it mean for f⁻¹ to be the inverse of f?',
    a: 'f⁻¹ undoes f. Formally: f⁻¹(f(x)) = x for all x in the domain of f, and f(f⁻¹(x)) = x for all x in the domain of f⁻¹.',
  },
  {
    q: 'When does f⁻¹ exist as a function?',
    a: 'Only when f is ONE-TO-ONE (injective) — each output comes from at most one input. Test with the horizontal line test: every horizontal line hits the graph at most once.',
    hint: 'Horizontal line test',
  },
  {
    q: 'What is the domain–range swap for inverses?',
    a: 'Domain of f⁻¹ = Range of f. Range of f⁻¹ = Domain of f. The inputs and outputs literally swap places.',
  },
  {
    q: 'State the four-step method for finding f⁻¹(x) algebraically.',
    a: '1. Write y = f(x). 2. Swap x and y. 3. Solve the new equation for y. 4. That y IS f⁻¹(x). State the domain (= range of original f).',
  },
  {
    q: 'Find the inverse of f(x) = 3x − 5.',
    a: 'y = 3x − 5 → swap → x = 3y − 5 → solve → y = (x + 5)/3. So f⁻¹(x) = (x + 5)/3, domain ℝ.',
  },
  {
    q: 'How does the graph of y = f⁻¹(x) relate to y = f(x)?',
    a: 'It is the reflection of y = f(x) in the line y = x. So (a, b) on f corresponds to (b, a) on f⁻¹.',
  },
  {
    q: 'What is a self-inverse function? Give three examples.',
    a: 'A function equal to its own inverse: f⁻¹(x) = f(x). Its graph is symmetric about y = x. Examples: f(x) = x; f(x) = 1/x; f(x) = a − x (for any constant a).',
  },
  {
    q: 'Common trap: does f⁻¹(x) mean 1/f(x)?',
    a: 'NO. f⁻¹(x) is the functional inverse, not the reciprocal. If you want the reciprocal, write 1/f(x) or [f(x)]⁻¹ explicitly.',
    hint: '−1 is NOT an exponent here',
  },

  // ── Section 1.6 — Exponential Functions ───────────────────────
  {
    q: 'What is the general form of an exponential function?',
    a: 'f(x) = a · bˣ, where a is a constant, b > 0, and b ≠ 1. Variable in the exponent (not the base). Domain ℝ, range y > 0 (or y < 0 if a is negative).',
  },
  {
    q: 'How do you tell exponential growth from decay by looking at the base?',
    a: 'b > 1 → growth (curve rises to the right). 0 < b < 1 → decay (curve falls to the right). The point (0, a) is on the curve in both cases.',
  },
  {
    q: 'What is the horizontal asymptote of f(x) = a · bˣ?',
    a: 'y = 0. The curve approaches but never touches the x-axis (on one side). If you shift by adding a constant c, the asymptote moves to y = c.',
  },
  {
    q: 'State the six laws of exponents.',
    a: 'bᵐ · bⁿ = b^(m+n). bᵐ / bⁿ = b^(m−n). (bᵐ)ⁿ = b^(mn). (ab)ⁿ = aⁿbⁿ. b⁰ = 1. b⁻ⁿ = 1/bⁿ.',
  },
  {
    q: 'What is special about the number e?',
    a: 'e ≈ 2.71828… is the unique base for which the tangent to y = bˣ at x = 0 has slope 1. It arises in continuous compounding, decay processes, and calculus (d/dx eˣ = eˣ).',
  },
  {
    q: 'Half-life problem: 200 g of an isotope, half-life 8 years. Amount after 30 years?',
    a: 'N(30) = 200 · (1/2)^(30/8) = 200 · 0.5^3.75 ≈ 14.9 g.',
    hint: 'N(t) = N₀ · (1/2)^(t/T)',
  },
  {
    q: 'What is the formula for continuous compounding?',
    a: 'A = P · e^(rt), where P is principal, r is annual rate (as decimal), t is time in years. For discrete compounding: A = P(1 + r/n)^(nt).',
  },

  // ── Section 1.7 — Logarithmic Functions ───────────────────────
  {
    q: 'State the defining equivalence of a logarithm.',
    a: 'log_b(x) = y ⟺ bʸ = x. The log answers "to what power do I raise b to get x?"',
    hint: 'log and exponential are two sides of the same coin',
  },
  {
    q: 'What is the difference between log(x) and ln(x)?',
    a: 'log(x) by convention means log₁₀(x) (common log — base 10). ln(x) means log_e(x) (natural log — base e). Both are just logs with specific bases.',
  },
  {
    q: 'State the three main laws of logs.',
    a: 'Product: log_b(xy) = log_b(x) + log_b(y). Quotient: log_b(x/y) = log_b(x) − log_b(y). Power: log_b(xⁿ) = n · log_b(x). All same base.',
  },
  {
    q: 'State the change of base formula.',
    a: 'log_b(x) = log(x)/log(b) = ln(x)/ln(b). Useful for calculating logs of arbitrary bases on a calculator that only has log and ln.',
  },
  {
    q: 'What are the key features of y = log_b(x) for b > 1?',
    a: 'Domain x > 0. Range ℝ. Vertical asymptote x = 0. Passes through (1, 0) because log_b(1) = 0 for every b. Mirror of bˣ across y = x. Grows very slowly.',
  },
  {
    q: 'Solve 3^(x+1) = 50.',
    a: 'Take ln of both sides: (x + 1) · ln 3 = ln 50. So x = (ln 50 / ln 3) − 1 ≈ 3.561 − 1 = 2.561.',
  },
  {
    q: 'Solve log₂(x) + log₂(x − 2) = 3.',
    a: 'Combine: log₂(x(x − 2)) = 3 → x(x − 2) = 8 → x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0 → x = 4 or x = −2. REJECT x = −2 (log of negative is undefined). Answer: x = 4.',
    hint: 'Always check that all logs have positive arguments in your final answer',
  },
  {
    q: 'What is the common trap when using log laws?',
    a: 'log(x + y) is NOT log x + log y. The product law is for log(xy), not log(x + y). There is no simplification for log of a sum.',
  },

  // ── Section 1.8 — Transformations ─────────────────────────────
  {
    q: 'How does y = f(x − h) transform y = f(x)?',
    a: 'Shift RIGHT by h units (opposite sign — the counter-intuitive one). If h is negative, that means shift left. Inside changes go the "wrong" way.',
  },
  {
    q: 'How does y = f(x) + k transform y = f(x)?',
    a: 'Shift UP by k units (down if k is negative). Outside changes go the intuitive way.',
  },
  {
    q: 'How does y = a · f(x) transform y = f(x)?',
    a: 'Vertical stretch by factor a. If a < 0, also reflects in the x-axis. If |a| < 1, it is a vertical squash.',
  },
  {
    q: 'What is the order of operations for a combined transformation a · f(b(x − h)) + k?',
    a: 'HSRT: Horizontal shift, then horizontal Stretch/reflect; then vertical Reflect/stretch, then vertical Translate. Inside operations before outside.',
  },

  // ── General Exam Traps ────────────────────────────────────────
  {
    q: 'Exam trap: what do you almost always need to state after finding an inverse?',
    a: 'THE DOMAIN of f⁻¹. Marks are explicitly awarded for the domain statement in most inverse-function questions.',
  },
  {
    q: 'Exam trap: what should you always check after solving a log equation?',
    a: 'That every log in the original equation still has a positive argument at your solution. Reject any solution that makes log(negative) or log(0) appear.',
  },
  {
    q: 'Exam trap: does cancelling (x − 2) top and bottom in a rational function remove a vertical asymptote?',
    a: 'It removes the asymptote at x = 2 but leaves a HOLE there. The function is still undefined at x = 2. Always note the hole in your sketch.',
  },
]
