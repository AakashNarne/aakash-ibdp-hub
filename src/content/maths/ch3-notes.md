---
title: "Maths AHL 2.10 — Log-Log and Semi-Log Graphs — Notes"
subject: Maths AI HL
topic: "AHL 2.10 Scaling very large/small numbers; log-log and semi-log graphs; linearization"
syllabus_ref: "AHL 2.10"
type: notes
source: "IB Maths AI HL formula booklet (first exams 2021), pp. 2–3; IB-question worksheet (Functions, 2020–22), PDF pp. 6–8; USGS Earthquake Hazards Program; NASA NSSDCA Planetary Fact Sheet; OpenStax College Physics 2e §17.3"
date: 2026-09-30
status: draft
tags: [class-notes, Maths, IBDP]
---

# Maths AHL 2.10 — Log-Log and Semi-Log Graphs

> [!tip] If you remember nothing else
> - **$\log y$ vs $x$ straight → exponential** $y = ab^x$: gradient $= \log b$, intercept $= \log a$. **$\log y$ vs $\log x$ straight → power** $y = ax^b$: gradient $= b$, intercept $= \log a$.
> - **Back-transform with the base you used.** $\log_{10}$ means $a = 10^{c}$; $\ln$ means $a = e^{c}$. Mixing them is the most common lost mark.
> - On a log-log graph the intercept sits at $\log x = 0$, so at **$x = 1$**, not $x = 0$.
> - On a **log scale**, equal steps mean equal *ratios*. +1 magnitude = ×10 seismogram amplitude (≈ ×32 energy); +10 dB = ×10 intensity; −1 pH = ×10 [H⁺].
> - None of these linearised forms are in the formula booklet. Topic 2 there only has $y = mx + c$ and the logistic function, so you have to know them yourself.

**Syllabus scope** (from [[_Syllabus Index]]): *scaling very large/small numbers using logarithms; log–log and semi-log graphs; linearization.*
Builds on: laws of logs → [[Topic 1 - Number and Algebra#4. Exponents, Logarithms, and Complex Numbers (SL 1.5, AHL 1.9–1.13)|Topic 1 · Laws of logarithms (AHL 1.9)]]; exponential and log families → [[Topic 1 - Functions (Comprehensive Guide)#Section 1.7 — Logarithmic Functions|Functions guide §1.6–1.7]].
Leads to: AHL 2.9 logarithmic/logistic models and AHL 4.13 non-linear regression / $R^2$. Neither has a note yet (see [[_Syllabus Index]]). This note covers the transformation only, not the regression theory.

---

## 1. Key terms (examiner-acceptable definitions)

- **Logarithmic scale**: a scale where each equal step is a multiplication by the same factor (usually 10), not an addition of the same amount.
- **Order of magnitude**: the power of 10 of a number. $3.2\times10^{5}$ has order of magnitude 5, and $\log_{10}(3.2\times10^5) \approx 5.51$.
- **Linearization**: transforming one or both variables (usually by taking logs) so a non-linear relationship becomes a straight line $Y = mX + c$. You can then fit it by linear regression and read the parameters off $m$ and $c$.
- **Semi-log graph**: one axis is logarithmic and the other is linear. It can be $\log y$ vs $x$ or $y$ vs $\log x$.
- **Log-log graph**: both axes are logarithmic ($\log y$ vs $\log x$).
- **Exponential model** $y = ab^x$ (or $y = ke^{mx}$), **power model** $y = ax^b$, **logarithmic model** $y = a + b\ln x$.

---

## 2. Scaling very large and small numbers with logarithms

Some quantities cover many orders of magnitude, such as ground-motion amplitude, sound intensity and ion concentration. For these, people report the **log** of the quantity. The log turns a factor of 10 into a step of 1 (or 10 for dB).

| Scale | Formula | What a change means | Verified source |
|---|---|---|---|
| Earthquake magnitude (Richter idea) | $M = \log_{10}(A/A_0)$ (simplified: log of seismogram amplitude $A$ relative to a reference $A_0$) | $+1$ in $M$ ⇒ amplitude ×10 | USGS: "each whole number increase in magnitude represents a tenfold increase in measured amplitude" |
| Earthquake energy | $\log E \propto 1.5M$ | $+1$ in $M$ ⇒ energy $\times10^{1.5} \approx 31.6$ ("≈ 32") | USGS "How much bigger…?" page |
| Moment magnitude | $M_W = \tfrac{2}{3}(\log_{10} M_0 - 9.1)$, where $M_0$ = seismic moment | $+1$ in $M_W$ ⇒ $M_0 \times 10^{1.5}$ | USGS magnitude page |
| Sound level (dB) | $\beta = 10\log_{10}(I/I_0)$, $I_0 = 10^{-12}\ \text{W m}^{-2}$ (threshold of hearing) | $+10$ dB ⇒ intensity ×10 | OpenStax College Physics 2e §17.3 |
| pH | $\text{pH} = -\log_{10} C$, where $C$ = hydronium-ion concentration (mol L⁻¹) | $C \times 10$ ⇒ pH **falls** by 1 (more acidic) | Formula as printed in IB question 22M.1.SL.TZ2.4 |

> [!example] Worked example: Bhuj 2001 vs Sumatra 2004 (real magnitudes)
> USGS lists the 26 Jan 2001 Bhuj (Gujarat) earthquake as **M 7.7** and the 26 Dec 2004 Sumatra–Andaman earthquake as **M 9.1**.
> - Difference: $\Delta M = 9.1 - 7.7 = 1.4$.
> - Amplitude ratio $= 10^{1.4} \approx \mathbf{25.1}$. The seismogram trace is about 25× larger.
> - Energy ratio $= (10^{1.5})^{1.4} = 10^{2.1} \approx \mathbf{126}$. Sumatra released about 126× the energy.
> - **Interpret:** a difference that "looks small" (1.4) means about 25× the amplitude and about 126× the energy, because the scale is logarithmic.
> - Check with USGS's own example: M 8.7 vs M 5.8 gives $10^{2.9} \approx 794$× amplitude and $10^{4.35} \approx 22\,387$× energy.
> - Caveat: USGS also gives the rougher conversion $\log E = 5.24 + 1.44M_W$, which gives ≈ 27.5× per unit. Use whichever relationship the question gives you.

> [!example] Quick dB and pH checks
> - 70 dB vs 40 dB: $\Delta\beta = 30$ dB ⇒ $I$ ratio $= 10^{30/10} = 10^{3} = 1000$.
> - pH 7 ⇒ $C = 10^{-7}$ mol L⁻¹. A liquid with 10× that concentration has $\text{pH} = -\log_{10}(10^{-6}) = 6$, so it is more acidic.

### Reading a log-scaled axis (graphs in the question)
- Ticks 1, 10, 100, 1000 are **equally spaced**. Each gap is one order of magnitude, called a **decade** (sometimes a "cycle").
- The point **halfway** between 10 and 100 is $10^{1.5} \approx 31.6$, **not** 55.
- Minor ticks 2, 3, …, 9 bunch together toward the top of each decade. The tick for 2 sits $\log_{10}2 \approx 0.30$ of the way along the decade.
- To get a gradient from a log-scaled axis, take logs of the read-off values first: $m = \dfrac{\log y_2 - \log y_1}{x_2 - x_1}$ (semi-log) or $\dfrac{\log y_2 - \log y_1}{\log x_2 - \log x_1}$ (log-log). **Never** use differences of the raw tick labels.

---

## 3. Which plot straightens which model?

| Plot that is straight | Model | Linearised form (base 10) | Gradient | Vertical intercept |
|---|---|---|---|---|
| $\log y$ vs $x$ (semi-log) | exponential $y = ab^x$ | $\log y = \log a + x\log b$ | $\log b$ | $\log a$ (at $x = 0$) |
| $\ln y$ vs $x$ (semi-log) | exponential $y = ke^{mx}$ | $\ln y = \ln k + mx$ | $m$ | $\ln k$ |
| $\log y$ vs $\log x$ (log-log) | power $y = ax^b$ | $\log y = \log a + b\log x$ | $b$ | $\log a$ (at $x = 1$) |
| $y$ vs $\log x$ (semi-log) | logarithmic $y = a + b\log x$ | already linear in $\log x$ | $b$ | $a$ (at $x = 1$) |

The derivations use the laws of logs from AHL 1.9. For example, $\log(ax^b) = \log a + \log x^b = \log a + b\log x$.

**Back-transforming (gradient $m$, intercept $c$ from the regression):**

| You regressed on… | Exponential | Power |
|---|---|---|
| $\log_{10}$ | $b = 10^{m}$, $a = 10^{c}$ | $b = m$, $a = 10^{c}$ |
| $\ln$ | $b = e^{m}$ (or keep $y = e^{c}e^{mx}$), $a = e^{c}$ | $b = m$, $a = e^{c}$ |

The power exponent $b$ is the same in either base. Only the intercept changes.

**Deciding which model to use:** plot both $\log y$ vs $x$ and $\log y$ vs $\log x$. Pick the one that is closer to straight (higher $r$ / $R^2$, with no curve in the residuals). Context helps too: growth by a constant **factor per unit time** suggests exponential, and **scaling laws** (area, volume, orbits) suggest a power model.

---

## 4. Diagrams: what to label for marks

**Semi-log (exponential data):**
- Horizontal axis: $x$ with units, on a linear scale (e.g. "$t$ (hours)").
- Vertical axis: labelled **"$\log_{10} P$"** with plain numbers (0, 1, 2, 3), *or* labelled "$P$" on a log scale with ticks 1, 10, 100, 1000 equally spaced. Don't mix the two.
- Plotted points, a ruled line of best fit, the **gradient $= \log b$**, and the **intercept at $x = 0$** $= \log a$.
- For comparison, the untransformed $P$ vs $t$ sketch is a J-curve through $(0, a)$ with the horizontal asymptote $P = 0$ as $t \to -\infty$.

**Log-log (power data):**
- Both axes are logs: "$\log_{10} x$" and "$\log_{10} y$", or both drawn as log scales with decade ticks.
- The line, the **gradient $= b$** (the exponent), and the intercept at **$\log x = 0$ (i.e. $x = 1$)** $= \log a$. This point is often off the plotted range, so extend the line or calculate it.
- The untransformed $y = ax^b$ curve passes through $(1, a)$. For $b > 1$ it curves up, for $0 < b < 1$ it curves down (concave), and for $b < 0$ it decreases toward the axes.

**$y$ vs $\log x$ (logarithmic data):** the vertical axis is linear, the horizontal axis is $\log x$, and the intercept is at $x = 1$. The raw curve rises ever more slowly and has a vertical asymptote at $x = 0$.

---

## 5. Worked example 1: exponential growth, semi-log (illustrative data, not real)

A colony's population $P$ (thousands) at time $t$ (hours):

| $t$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| $P$ | 2.1 | 4.5 | 9.8 | 21 | 45 | 96 | 205 | 440 |
| $\log_{10}P$ | 0.3222 | 0.6532 | 0.9912 | 1.3222 | 1.6532 | 1.9823 | 2.3118 | 2.6435 |

**GDC steps (TI-84 / Casio, same idea):**
1. L1 = $t$, L2 = $P$, L3 = $\log(\text{L2})$.
2. Run LinReg ($ax+b$) with Xlist L1 and Ylist L3.
3. Output: gradient $m = 0.33149$, intercept $c = -0.006776$, $r = 0.999995$, $r^2 = 0.99999$.

**Back-transform (base 10):**
- $b = 10^{0.33149} \approx \mathbf{2.145}$
- $a = 10^{-0.006776} \approx \mathbf{0.985}$
- **Model:** $P \approx 0.985 \times 2.145^{t}$

**Check with $\ln$ instead:** regressing $\ln P$ on $t$ gives $m = 0.76329$ and $c = -0.015601$. Then $P = e^{-0.0156}e^{0.7633t} = 0.985\,e^{0.763t}$, and $e^{0.7633} = 2.145$. Same model, but you must use $e^{c}$, **not** $10^{c}$. The GDC's ExpReg should return the same $a$ and $b$ directly, so compare it with your manual answer.

**Test the model:** the fitted values are 2.11, 4.53, 9.72, 20.85, 44.74, 95.98, 205.9, 441.7. They are within 2 of every data point, and $P(8) \approx 442$ vs 440 observed.

**Interpret:**
- The growth factor is 2.145 per hour, i.e. about **+114.5% per hour**.
- The doubling time is $\dfrac{\ln 2}{\ln 2.145} \approx 0.91$ h. That is slightly *less* than an hour, so the colony grows a bit faster than "doubling each hour".

**Use (with a warning):** $P(10) = 0.985 \times 2.145^{10} \approx \mathbf{2030}$ thousand, about 2.03 million. This is **extrapolation** beyond $t = 8$. Real colonies run out of nutrients, so over longer times a logistic model (AHL 2.9) is the better reflection.

---

## 6. Worked example 2: Kepler's third law, log-log (real NASA data)

$a$ = mean distance from the Sun (semi-major axis, $10^{6}$ km). $T$ = orbital period (days). Source: NASA NSSDCA Planetary Fact Sheet.

| Planet | $a$ ($10^6$ km) | $T$ (days) | $\log_{10}a$ | $\log_{10}T$ |
|---|---|---|---|---|
| Mercury | 57.9 | 88.0 | 1.763 | 1.944 |
| Venus | 108.2 | 224.7 | 2.034 | 2.352 |
| Earth | 149.6 | 365.2 | 2.175 | 2.563 |
| Mars | 228.0 | 687.0 | 2.358 | 2.837 |
| Jupiter | 778.5 | 4331 | 2.891 | 3.637 |
| Saturn | 1432.0 | 10 747 | 3.156 | 4.031 |
| Uranus | 2867.0 | 30 589 | 3.457 | 4.486 |
| Neptune | 4515.0 | 59 800 | 3.655 | 4.777 |

**GDC:** L3 = $\log(\text{L1})$, L4 = $\log(\text{L2})$, then LinReg on (L3, L4).
- Output: gradient $m = 1.4978$, intercept $c = -0.69510$, $r^2 = 0.9999985$.

**Back-transform (power):**
- $b = m \approx \mathbf{1.50}$
- $a = 10^{-0.6951} \approx \mathbf{0.202}$
- **Model:** $T \approx 0.202\,a^{1.498}$ ($T$ in days, $a$ in $10^6$ km)

**Interpret:**
- The gradient is about $\tfrac{3}{2}$, so $T \propto a^{3/2}$, i.e. $T^2 \propto a^3$. That is Kepler's third law.
- Redo the fit in AU and years (divide by Earth's 149.6 and 365.2). The intercept becomes ≈ 0, so $k = 10^{0} \approx 1.000$ and $T = a^{1.5}$.
- The intercept 0.202 is $T$ when $a = 1$ (i.e. $10^6$ km, since $\log a = 0$), **not** when $a = 0$. It is well outside the data.

**Test the model on data it wasn't fitted to:** Pluto has $a = 5906.4$. The model predicts $T \approx 89\,900$ days, and NASA lists 90 560 days, so the prediction is **0.8% low**. That is good for a mild extrapolation.

---

## 7. Command terms you will see

| Task | Typical command term | What earns the mark |
|---|---|---|
| Transform data / fill table of logs | **Write down**, **Calculate** | Correct base, 3–4 s.f. |
| Find the regression line on transformed data | **Find**, **Write down** (GDC) | Equation in the *transformed* variables, e.g. $\log T = 1.50\log a - 0.695$ |
| Recover $a$, $b$ | **Show that**, **Hence find** | Explicit $10^{c}$ / $e^{c}$ step shown |
| Choose semi-log vs log-log | **Justify**, **Explain** | Refer to linearity / $r$ / context |
| Meaning of gradient or intercept | **Interpret** | Units and context ("growth factor per hour") |
| Using the model outside the data | **Comment**, **Discuss** (reliability) | Say it is extrapolation and give a limitation |
| Magnitude/dB/pH comparisons | **Determine**, **Calculate**, **Justify** | Show $10^{\Delta}$ reasoning |
| Draw the linearised graph | **Sketch**, **Draw** | Axis labels ($\log$!), scale, intercept, gradient |

---

## 8. Common mistakes / examiner traps

> [!warning] Traps
> 1. **Mixing $\ln$ and $\log$ when back-transforming.** If you regressed on $\ln y$, then $a = e^{c}$. Writing $10^{c}$ gives the wrong model. Decide on one base at the start and label your axes with it.
> 2. **Reading the log-log intercept at $x = 0$.** $\log x = 0$ means $x = 1$. ($x = 0$ can't even be plotted, because $\log 0$ is undefined.)
> 3. **Taking a gradient from tick labels on a log-scaled axis.** Convert readings to logs first (see §2). The midpoint of 10 and 100 on a log axis is 31.6.
> 4. **Logs of zero or negative values.** Log transforms need strictly positive data. Remove, justify or rethink the model; don't just delete points quietly.
> 5. **Extrapolation.** A near-perfect $r^2$ inside the data says nothing about $t = 1000$. Always add a limitation (e.g. resources run out, so logistic growth).
> 6. **Wrong row in the table.** $y$ vs $\log x$ straight means a *logarithmic* model, not a power law. Power laws need logs on **both** axes.
> 7. **Semi-log gradient is $\log b$, not $b$.** $m = 0.3315$ gives $b = 10^{0.3315} = 2.145$, not 0.3315.
> 8. **Rounding early.** Keep full GDC values of $m$ and $c$ until the final answer, and round to 3 s.f. at the end.
> 9. **Log scales are ratios, not differences.** M 8 is not "a bit more" than M 7: it is ×10 the amplitude and ≈ ×32 the energy. 80 dB is not "double" 40 dB: it is ×10⁴ the intensity.

---

## 9. Past-paper hits (in `_Sources/worksheet-aihl-ibq-paper-12-20-22-2009-year-2023.pdf`, PDF pp. 6–8)

- **22M.1.SL.TZ1.11** and **22M.1.AHL.TZ1.12**: Gutenberg–Richter relation $\log_{10}N = a - M$. You find $a$, rewrite it as $N = b/10^{M}$, and use a range/Poisson follow-on. Scaling with logs.
- **22M.1.SL.TZ2.4**: pH $= -\log_{10}C$. You calculate a pH, then justify which liquid is more acidic after a ×10 change in concentration.

Try these before looking at a mark scheme.

---

## 10. Self-test

1. For $y = 5x^{3}$, state the gradient and vertical intercept of the graph of $\log_{10} y$ against $\log_{10} x$.
2. Data follow $y = 2\cdot 10^{0.5x}$. Find the gradient and intercept of $\log_{10} y$ against $x$.
3. A log-log graph (base 10) of data has gradient $-2$ and intercept $3$. Find the model and use it to estimate $y$ when $x = 5$.
4. A graph of $\ln y$ against $x$ is a straight line with gradient $0.2$ and intercept $1.5$. Write $y$ in the form $y = ab^x$.
5. Using the USGS magnitudes, Bhuj 2001 was M 7.7 and Sumatra 2004 was M 9.1. How many times greater was Sumatra's (a) seismogram amplitude, (b) energy release? Use energy $\propto 10^{1.5M}$.

> [!question]- Answers
> 1. $\log y = \log 5 + 3\log x$ ⇒ gradient **3**, intercept $\log_{10}5 \approx$ **0.699**.
> 2. $\log y = \log 2 + 0.5x$ ⇒ gradient **0.5**, intercept $\log_{10}2 \approx$ **0.301**.
> 3. $\log y = 3 - 2\log x$ ⇒ $y = 10^{3}x^{-2} = 1000x^{-2}$. At $x = 5$: $y = 1000/25 =$ **40**.
> 4. $y = e^{1.5}\,e^{0.2x} = e^{1.5}(e^{0.2})^x \approx$ **$4.48 \times 1.22^{x}$**. (Using $10^{1.5}$ here is trap 1.)
> 5. $\Delta M = 1.4$. (a) $10^{1.4} \approx$ **25.1×**. (b) $10^{1.5\times1.4} = 10^{2.1} \approx$ **126×**.

---

**Sources actually used**
- IB, *Mathematics: applications and interpretation HL formula booklet* (first examinations 2021), pp. 2–3 (1.5, 1.9 log laws; Topic 2 has only 2.1 straight line, 2.5 and 2.9 logistic, with no 2.10 entry). Vault `_Sources/Math AI HL formula booklet.pdf`.
- IB-question worksheet (Functions, 2020–22), `_Sources/worksheet-aihl-ibq-paper-12-20-22-2009-year-2023.pdf`, PDF pp. 6–8.
- USGS, *Earthquake Magnitude, Energy Release, and Shaking Intensity*: https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity
- USGS, *How much bigger is a magnitude 8.7 earthquake than a magnitude 5.8?*: https://earthquake.usgs.gov/education/how_much_bigger.php
- USGS event pages: M 7.7 Bhuj 2001, https://earthquake.usgs.gov/earthquakes/eventpage/usp000a8ds/executive; M 9.1 Sumatra–Andaman 2004, https://earthquake.usgs.gov/earthquakes/eventpage/official20041226005853450_30/executive
- NASA NSSDCA, *Planetary Fact Sheet – Metric*: https://nssdc.gsfc.nasa.gov/planetary/factsheet/ (distance-from-Sun = semi-major axis per the fact-sheet notes)
- OpenStax, *College Physics 2e*, §17.3 Sound Intensity and Sound Level: https://openstax.org/books/college-physics-2e/pages/17-3-sound-intensity-and-sound-level
- Syllabus wording: vault [[_Syllabus Index]] (IB *Mathematics: applications and interpretation guide*, first assessment 2021). The guide itself was not read directly.
- The Haese 2019 textbooks were **not** used: they are image-only and were not OCR'd.
