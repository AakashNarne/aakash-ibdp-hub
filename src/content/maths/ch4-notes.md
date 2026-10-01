---
title: "Maths SL 1.5 and AHL 1.9 — Logarithm Fundamentals — Notes"
subject: Maths AI HL
topic: "SL 1.5: logarithms in base 10 and e; AHL 1.9: laws of logarithms"
syllabus_ref: "SL 1.5; AHL 1.9"
type: notes
source: "Haese, Mathematics: Applications and Interpretation HL 2 (2019), Ch. 2 Logarithms, OCR extract, PDF pp. 45–66 (printed pp. 44–65); IB Mathematics: applications and interpretation HL formula booklet (first exams 2021), vault _Sources/Math AI HL formula booklet.pdf, PDF pp. 2–4; Maths AI HL _Syllabus Index.md; NOAA, Ocean acidification"
date: 2026-09-30
status: draft
tags: [class-notes, Maths, IBDP]
---

# Maths SL 1.5 and AHL 1.9 — Logarithm Fundamentals — Notes

> [!tip] If you remember nothing else
> - A **logarithm** answers “what power?”: $a^x=b$ means $x=\log_a b$.
> - $\log$ means base 10; $\ln$ means base $e$. Keep the base clear.
> - Product becomes add, quotient becomes subtract, and a power becomes a multiplier. There is no rule for a log of a sum.
> - A real logarithm needs a positive argument. Check this before accepting a solution.

**Syllabus focus:** [[_Syllabus Index]] describes SL 1.5 as an introduction to logarithms in base 10 and $e$, and AHL 1.9 as the laws of logarithms. The longer log-graph and linearisation work belongs with [[Maths AHL 2.10 — Log-Log and Semi-Log Graphs — Notes]].

## 1. Read a logarithm as an exponent

Haese introduces logarithms by asking which power of 10 gives a chosen number, then writes the same idea for other bases (PDF pp. 47–49).

A **base** is the number being raised to a power. The **argument** is the number inside the log. The answer to the log is the missing exponent:

$$\log_a b=x \quad\Longleftrightarrow\quad a^x=b.$$

For real logarithms, the base must satisfy $a>0$ and $a\ne1$, and the argument must satisfy $b>0$. The base cannot be 1 because $1^x$ is always 1, so it cannot identify one unique exponent. The argument cannot be zero or negative because a positive base raised to a real power is positive.

| Exponential form | Logarithmic form | Read it as… |
|---|---|---|
| $2^3=8$ | $\log_2 8=3$ | 2 to what power gives 8? The answer is 3. |
| $10^{-2}=0.01$ | $\log 0.01=-2$ | 10 to the power −2 gives 0.01. |
| $5^{-2}=0.04$ | $\log_5 0.04=-2$ | 5 to what power gives 0.04? The answer is −2. |

Two useful results follow directly from powers: $\log_a 1=0$ because $a^0=1$, and $\log_a a=1$ because $a^1=a$.

> [!warning] A negative answer is allowed
> $\log 0.01=-2$ is valid: the argument is positive. It is the log of zero or a negative argument that is undefined.

## 2. Base 10, base e, and your calculator

- **Common logarithm**: $\log_{10}x$, usually written $\log x$ when no base is shown (Haese, PDF p. 47).
- **Natural logarithm**: $\log_e x$, written $\ln x$; its base is the constant $e$ (Haese, PDF p. 53).

The matching exponential undoes each logarithm:

$$\log_{10}(10^x)=x,\qquad 10^{\log_{10}x}=x\ (x>0),$$
$$\ln(e^x)=x,\qquad e^{\ln x}=x\ (x>0).$$

For a non-integer answer, estimate the range first, then use the GDC’s $\log$ or $\ln$ key. If your GDC has no any-base log function, use the **change-of-base formula** (valid for base $a>0$, $a\ne1$, and argument $b>0$):

$$\log_a b=\frac{\log b}{\log a}=\frac{\ln b}{\ln a}.$$

Why it works: if $x=\log_a b$, then $a^x=b$. Taking $\ln$ gives $x\ln a=\ln b$. This is a useful calculator method; it is not one of the three laws printed in the formula booklet’s 1.9 row.

## 3. Evaluate and estimate

If the argument is an easy power of the base, read off the exponent. For example, $\log 1000=3$ because $1000=10^3$, and $\log 0.01=-2$ because $0.01=10^{-2}$.

For other values, use nearby powers to check that your calculator answer is sensible. Haese asks for $\log 237$: since $100<237<1000$, it must be between 2 and 3. A GDC gives $\log 237\approx2.37$ to 2 decimal places (Haese, PDF pp. 48–49).

For the common logarithm, this sign check is useful:

- If $x>1$, then $\log x>0$.
- If $x=1$, then $\log x=0$.
- If $0<x<1$, then $\log x<0$.
- If $x\le0$, then $\log x$ is undefined.

## 4. The three laws of logarithms

These laws require the **same base** throughout. Use a valid base $a>0$, $a\ne1$, and positive arguments $m,n$.

| Law | Rule | Memory cue |
|---|---|---|
| **Product law** | $\log_a(mn)=\log_a m+\log_a n$ | Multiply inside → add outside. |
| **Quotient law** | $\log_a\left(\frac{m}{n}\right)=\log_a m-\log_a n$ | Divide inside → subtract outside. |
| **Power law** | $\log_a(m^k)=k\log_a m$ | The exponent moves in front. |

Why the laws work: write $m=a^p$ and $n=a^q$. Multiplying powers adds exponents, dividing subtracts them, and raising a power to $k$ multiplies its exponent. The log laws are those same exponent rules written in log form. The formula booklet lists these three laws in AHL 1.9; its 1.9 condition is $a,x,y>0$, while the base restriction $a\ne1$ is stated in 1.5.

**Worked example:** write $\log 80-\log 8$ as one value.

$$\log 80-\log 8=\log\left(\frac{80}{8}\right)=\log 10=1.$$

There is **no sum law**: $\log(m+n)$ cannot be split into $\log m+\log n$. For example, $\log(2+3)=\log5$, while $\log2+\log3=\log6$.

## 5. The graph picture

The graphs make the “undo” idea visible. For $a>1$, $y=a^x$ and $y=\log_a x$ are **inverse functions**: swap the coordinates of every point, so the two curves reflect across the dashed line $y=x$.

If asked to sketch them, draw and label the same $x$- and $y$-axes and the line $y=x$; draw $y=a^x$ through $(0,1)$ and $(1,a)$ with horizontal asymptote $y=0$; draw $y=\log_a x$ through $(1,0)$ and $(a,1)$ with vertical asymptote $x=0$. The log curve exists only to the right of the $y$-axis because its input must be positive. Its domain is $x>0$ and its range is all real numbers; the exponential’s domain is all real numbers and its range is $y>0$ (Haese, PDF pp. 49 and 57).

For shifts and more complicated function graphs, use [[Topic 1 - Functions (Comprehensive Guide)]] rather than mixing those skills into the log laws.

## 6. Use a log to solve for an exponent

An **exponential equation** has the unknown in the exponent. If the equation is $a^x=b$, take the same logarithm of both sides and use the power law to bring $x$ down.

**Worked example:** solve $3^x=50$.

$$\ln(3^x)=\ln50\quad\Rightarrow\quad x\ln3=\ln50\quad\Rightarrow\quad x=\frac{\ln50}{\ln3}=\log_3 50.$$

The GDC gives $x\approx3.5608768$, so $x\approx3.56$ to 3 significant figures. Substituting the unrounded value gives $3^x=50$.

For a log equation, write the domain restriction first, then use the laws and convert back to exponential form.

**Worked example:** solve $\log_2x+\log_2(x-2)=3$.

1. The arguments need $x>0$ and $x-2>0$, so the original equation requires $x>2$.
2. Combine the logs: $\log_2[x(x-2)]=3$, so $x(x-2)=2^3=8$.
3. $x^2-2x-8=0$, hence $(x-4)(x+2)=0$ and the algebraic candidates are $x=4$ and $x=-2$.
4. Keep $x=4$ because it satisfies $x>2$. Reject $x=-2$ because it is outside the original domain. Check: $\log_2 4+\log_2 2=2+1=3$.

## 7. One real-world example: pH

A **logarithmic scale** turns multiplicative changes into additive steps. Haese uses the classroom model $\mathrm{pH}=-\log_{10}C$, where $C$ is the hydronium-ion concentration (PDF p. 62).

NOAA reports that surface-ocean pH has fallen by 0.1 units over the 200-plus years since the Industrial Revolution began, and describes the change as approximately a 30% increase in acidity.[1] Using Haese’s formula, a pH drop of exactly 0.1 means:

$$\frac{C_{\mathrm{new}}}{C_{\mathrm{old}}}=10^{0.1}\approx1.2589.$$

So the concentration is about 1.26 times as large, an increase of about 25.9% (roughly 26%). NOAA’s 30% is an approximate rounded description, not the exact result of treating the reported 0.1 as exact. The important log idea is that a small change on the scale represents a multiplicative change in concentration.

## 8. Command terms

| Command term | What to do for logarithms |
|---|---|
| **Define** | State that a log is the exponent, and give the valid base and argument conditions. |
| **Convert / express** | Keep the base fixed and rewrite $a^x=b$ as $\log_a b=x$, or vice versa. |
| **Simplify / write as a single logarithm** | Name the product, quotient, or power law used; do not split a sum. |
| **Calculate / solve** | Show the equation, use the GDC if needed, round as instructed, then check the original domain. |
| **Sketch** | Label axes, both curves, the reflection line, intercepts, and asymptotes. |

## 9. Common mistakes / examiner traps

- **Changing the base by accident:** $\log_2 8$ and $\log_8 2$ are different questions. Keep the subscript attached to the base.
- **Inventing a sum law:** $\log(m+n)\ne\log m+\log n$ in general.
- **Using the wrong log key:** $\log$ is base 10; $\ln$ is base $e$. Use the same base on both sides of a change-of-base fraction.
- **Ignoring the domain:** before combining logs, each original argument must be positive; test every candidate in the original equation.
- **Applying the power law to the wrong expression:** $\log(x^2)=2\log x$ requires $x>0$ for the right-hand side to be defined. It is not the same as $(\log x)^2$.
- **Rounding too early:** keep the full GDC value until the final answer.
- **Reading a log as multiplication:** $\log_a b$ is an exponent, not $a$ multiplied by $b$.

## 10. Self-test

1. Write $10^{-2}=0.01$ in logarithmic form.
2. Without a GDC, find $\log_4 32$.
3. Simplify $2\log3+\log4-\log6$ to a single logarithm.
4. Solve $\log_3x+\log_3(x+8)=2$. State the original domain and reject any invalid root.
5. Surface-ocean pH drops by 0.1. Using $\mathrm{pH}=-\log_{10}C$, by what factor does $C$ change, and what is the approximate percentage increase?

> [!question]- Answers
> 1. $\log_{10}(0.01)=-2$.
> 2. Let $4^x=32$. Then $2^{2x}=2^5$, so $x=\frac52=2.5$.
> 3. $\log9+\log4-\log6=\log(36/6)=\log6$.
> 4. The domain is $x>0$. Combine to get $x(x+8)=9$, so $(x-1)(x+9)=0$. Reject $x=-9$; the solution is $x=1$.
> 5. $C_{\mathrm{new}}/C_{\mathrm{old}}=10^{0.1}\approx1.26$, so the increase is about 25.9%, or 26%.

## Connections

- [[Maths AHL 2.10 — Log-Log and Semi-Log Graphs — Notes]] uses logarithms to compare scales and linearise models.
- [[Topic 1 - Number and Algebra]] is the broader Topic 1 overview; this note develops its SL 1.5 and AHL 1.9 log rules.
- [[Topic 1 - Functions (Comprehensive Guide)]] covers function graphs, inverses, and transformations beyond the basic sketch here.
- [[_Syllabus Index]] lists the current SL 1.5 and AHL 1.9 syllabus points.

## References used

- Haese, *Mathematics: Applications and Interpretation HL 2* (2019), Ch. 2 “Logarithms”, OCR extract, PDF pp. 45–66 (printed pp. 44–65); especially base-10 logs pp. 47–50, laws pp. 51–53, natural logs pp. 53–56, inverse graphs pp. 49 and 57, and pH p. 62.
- IB, *Mathematics: applications and interpretation HL formula booklet* (first examinations 2021), vault `_Sources/Math AI HL formula booklet.pdf`, PDF pp. 2–4; verified the 1.5 and 1.9 rows from the rendered booklet page.
- Maths AI HL `_Syllabus Index.md`, SL 1.5 and AHL 1.9 entries.

## Sources

[1] https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-acidification — NOAA, Ocean acidification
    > "During this time, the pH of surface ocean waters has fallen by 0.1 pH units."
    > "This might not sound like much, but the pH scale is logarithmic, so this change represents approximately a 30 percent increase in acidity."
