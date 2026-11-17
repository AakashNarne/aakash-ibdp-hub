---
title: "Topic 1 — Number and Algebra"
subject: Maths AI HL
topic: "1.1 to 1.15 Number and Algebra"
syllabus_ref: "Topic 1"
type: notes
source: "IB Number and Algebra.pdf & Haese Mathematics"
date: 2026-09-28
status: draft
tags: [class-notes, Maths, IBDP]
---

# Topic 1 — Number and Algebra

> [!tip] If you remember nothing else
> - **Maths AI has no non-calculator paper.** Always know your GDC button sequences (especially the TVM Solver for financial apps and matrix/complex number solvers).
> - **Financial Maths (SL 1.4 / 1.7):** Always verify sign conventions in the GDC TVM Solver: money invested/borrowed is negative (cash outflow), money received/withdrawn is positive (cash inflow).
> - **Sequences & Series:** Arithmetic uses constant difference $d$; geometric uses constant ratio $r$. Always check if $|r| < 1$ before applying the infinite sum formula $S_\infty = \frac{u_1}{1-r}$.
> - **Logarithms & Exponents:** $\log_a(xy) = \log_a x + \log_a y$; change of base $\log_a b = \frac{\log_c b}{\log_c a}$ is essential when solving $a^x = b$ without base-10 logs.

---

## 1. Number Systems, Approximation, and Error (SL 1.1, 1.5, 1.6)

### Number Sets
- $\mathbb{N}$ (Natural numbers): Positive integers $\{1, 2, 3, \dots\}$
- $\mathbb{Z}$ (Integers): All whole numbers including negatives and zero $\{ \dots, -2, -1, 0, 1, 2, \dots \}$
- $\mathbb{Q}$ (Rational numbers): Numbers expressible as $\frac{a}{b}$ where $a, b \in \mathbb{Z}, b \neq 0$.
- $\mathbb{R}$ (Real numbers): All rational and irrational numbers.

### Rounding & Significant Figures
- **Significant Figures (s.f.):** Non-zero digits are always significant. Zeros between non-zero digits are significant. Leading zeros are not. Trailing zeros after a decimal point are significant. 
- **Default Rule:** Unless specified otherwise, give non-exact numerical answers to **3 significant figures**.
- **Percentage Error Formula:**
  $$\epsilon = \left| \frac{V_A - V_E}{V_E} \right| \times 100\%$$
  where $V_A$ is the approximate value and $V_E$ is the exact value.

---

## 2. Sequences and Series (SL 1.2, 1.3, AHL 1.11)

### Arithmetic Sequences & Series
- **Nth term:** $u_n = u_1 + d(n-1)$
- **Sum of $n$ terms:** $S_n = \frac{n}{2}(2u_1 + (n-1)d) = \frac{n}{2}(u_1 + u_n)$
- *Key identifier:* Constant common difference $d = u_{n+1} - u_n$.

### Geometric Sequences & Series
- **Nth term:** $u_n = u_1 r^{n-1}$
- **Finite sum:** $S_n = \frac{u_1(1-r^n)}{1-r}$ for $r \neq 1$
- **Infinite sum (Convergent Series):** $S_\infty = \frac{u_1}{1-r}$, valid **only** when $|r| < 1$.

---

## 3. Financial Mathematics & TVM Solver (SL 1.4, 1.7)

### Financial Mathematics Concept: Compound Interest & Annuities
Compound interest calculates interest on the principal plus accumulated interest. 

#### Formula & Variables (Compound Interest)
$$FV = PV \left(1 + \frac{r}{100k}\right)^{kn}$$
- $PV$: Present Value (initial principal)
- $FV$: Future Value
- $r$: Annual nominal interest rate (percentage)
- $k$: Number of compounding periods per year
- $n$: Number of years

---

### GDC TVM Solver Steps (TI-Nspire / Casio)
1. Navigate to **Financial Solver** (`Finance` $\rightarrow$ `TVM Solver`).
2. Enter the variables:
   - $N$: Total number of compounding periods ($n \times k$).
   - $I\%$: Annual interest rate (entered as a percentage, e.g., `5` for 5%).
   - $PV$: Present Value. *(Cash outflow/investment = negative)*.
   - $PMT$: Payment per period (0 for lump sum investments, non-zero for annuities/loans).
   - $FV$: Future Value. *(Cash inflow/payoff = positive)*.
   - $P/Y$: Payments per year (e.g., 12 for monthly).
   - $C/Y$: Compounding periods per year (matches $P/Y$ for IB questions).
3. Place the cursor on the unknown variable (e.g., $FV$ or $N$) and press **[ENTER]** (or `Alpha` + `Solve`).

---

### Worked Example: Loan Repayment & Amortization
> **Problem:** A student takes out a car loan of $\$25,000$ at a nominal annual interest rate of $6.5\%$ compounded monthly. The loan is to be paid off with equal monthly payments over 4 years.
> 1. Find the monthly payment amount ($PMT$).
> 2. Find the total interest paid over the life of the loan.

**Solution:**
1. **TVM Solver Setup:**
   - $N = 4 \times 12 = 48$
   - $I\% = 6.5$
   - $PV = -25000$ (Money borrowed / cash outflow)
   - $FV = 0$ (Loan fully paid off)
   - $P/Y = 12$, $C/Y = 12$
   - Solve for $PMT$: **$\$592.58$** per month.
2. **Total Payments:** $\$592.58 \times 48 = \$28,443.84$
3. **Total Interest Paid:** $\$28,443.84 - \$25,000 = \mathbf{\$3,443.84}$

---

## 4. Exponents, Logarithms, and Complex Numbers (SL 1.5, AHL 1.9–1.13)

### Logarithm Rules
- $\log_a(xy) = \log_a x + \log_a y$
- $\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y$
- $\log_a(x^n) = n \log_a x$
- **Change of Base:** $\log_a b = \frac{\log_c b}{\log_c a}$

### Complex Numbers (AHL)
- **Cartesian form:** $z = a + bi$ where $i^2 = -1$.
- **Modulus-Argument (Polar) form:** $z = r(\cos\theta + i\sin\theta) = r\text{cis}\,\theta$
- **Euler form:** $z = re^{i\theta}$

---

## 5. Matrices and Transformations (AHL 1.14, 1.15)
- Operations: addition, multiplication, determinants ($\det(A)$), and inverse matrices ($A^{-1}$).
- **Eigenvalues and Eigenvectors:** Solutions to $\det(A - \lambda I) = 0$.

---

## ⚠️ Common Mistakes / Examiner Traps
1. **Sign convention in TVM Solver:** Forgetting to make $PV$ negative when depositing/borrowing, leading to sign errors in calculations.
2. **Compound frequency mismatch:** Forgetting to set $P/Y$ and $C/Y$ to 12 when payments are monthly.
3. **Divergent geometric series:** Applying $S_\infty = \frac{u_1}{1-r}$ when $|r| \ge 1$. Always verify $|r| < 1$ first.
4. **Rounding prematurely:** Rounding intermediate steps in financial calculations instead of keeping full calculator precision.

---

## 🧠 Self-Test

1. Find the sum of the first 10 terms of the arithmetic sequence: $4, 9, 14, \dots$
2. Solve for $x$: $3^{2x} = 27^{x-1}$.
3. An investment of $\$10,000$ is compounded quarterly at an annual rate of $4.2\%$. What is the value of the investment after 5 years?
4. Find the exact value of the infinite geometric sum: $12 + 4 + \frac{4}{3} + \dots$
5. Convert $z = 1 + i\sqrt{3}$ into polar form ($r\text{cis}\,\theta$).

> [!question]- Answers
> 1. **$u_1 = 4, d = 5, n = 10$**: $S_{10} = \frac{10}{2}(2(4) + (9)(5)) = 5(8 + 45) = 5(53) = \mathbf{265}$.
> 2. **$3^{2x} = (3^3)^{x-1} \implies 2x = 3(x-1) \implies 2x = 3x - 3 \implies \mathbf{x = 3}$**.
> 3. **TVM Solver**: $N = 20, I\% = 4.2, PV = -10000, P/Y = 4, C/Y = 4$. Solving for $FV$ gives $\mathbf{\$12,311.45}$.
> 4. **$u_1 = 12, r = \frac{1}{3}$**: $S_\infty = \frac{12}{1 - 1/3} = \frac{12}{2/3} = \mathbf{18}$.
> 5. **$r = \sqrt{1^2 + (\sqrt{3})^2} = 2$**, $\theta = \arctan(\sqrt{3}) = \frac{\pi}{3}$. Polar form: $\mathbf{2\text{cis}\left(\frac{\pi}{3}\right)}$.
