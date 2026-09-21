/**
 * A tiny spring engine, in Apple's parameterisation.
 *
 * Apple deliberately dropped mass/stiffness/damping in favour of two numbers a
 * designer can reason about (WWDC 2018, "Designing Fluid Interfaces"):
 *
 *   damping  — 1.0 is critically damped (settles, never overshoots).
 *              Below 1.0 it overshoots. Only go below 1.0 when the gesture
 *              itself carried momentum; bounce on a menu that merely faded in
 *              reads as a bug.
 *   response — roughly how long it takes to get there, in seconds. Not a
 *              duration: a spring has no fixed duration, the settle emerges
 *              from the parameters.
 *
 * The whole point of using springs rather than CSS transitions is
 * interruptibility. `setTarget` re-aims the spring from wherever it currently
 * is, at whatever velocity it currently has, so a value can be grabbed and
 * reversed mid-flight with no jump and no velocity discontinuity.
 *
 * No dependency: this is ~60 lines of rAF, which is cheaper than adding a
 * motion library to the bundle.
 */

export type SpringOpts = {
  /** 1.0 = critically damped. Below 1.0 overshoots. */
  damping?: number
  /** Seconds to approximately reach the target. */
  response?: number
}

/** Apple's shipped values, named so call sites read as intent. */
export const SPRING = {
  /** Default for anything that just appears. No overshoot. */
  ui: { damping: 1.0, response: 0.35 },
  /** Repositioning something on screen. */
  move: { damping: 1.0, response: 0.4 },
  /** Sheets and drawers — a little life, because they are dragged. */
  sheet: { damping: 0.8, response: 0.3 },
  /** Momentum releases: a flick or a throw. */
  flick: { damping: 0.8, response: 0.4 },
} as const satisfies Record<string, Required<SpringOpts>>

export class Spring {
  value: number
  velocity = 0
  private target: number
  private damping: number
  private response: number
  private raf: number | null = null
  private last = 0
  private onChange: (v: number) => void

  constructor(initial: number, onChange: (v: number) => void, opts: SpringOpts = {}) {
    this.value = initial
    this.target = initial
    this.onChange = onChange
    this.damping = opts.damping ?? SPRING.ui.damping
    this.response = opts.response ?? SPRING.ui.response
  }

  /**
   * Re-aim the spring. Crucially this does NOT reset position or velocity —
   * the motion continues from the current presentation value, which is what
   * makes an interrupted animation look continuous instead of jumping.
   */
  setTarget(target: number, opts: SpringOpts = {}) {
    this.target = target
    if (opts.damping !== undefined) this.damping = opts.damping
    if (opts.response !== undefined) this.response = opts.response
    this.start()
  }

  /** Hand off a gesture's release velocity so drag → animate has no seam. */
  setVelocity(v: number) {
    this.velocity = v
    this.start()
  }

  /** Jump with no animation — for reduced-motion, or initial layout. */
  snapTo(value: number) {
    this.stop()
    this.value = value
    this.target = value
    this.velocity = 0
    this.onChange(value)
  }

  private start() {
    if (this.raf !== null) return
    this.last = performance.now()
    const tick = (now: number) => {
      // Clamp dt: a backgrounded tab returns a huge delta that would explode
      // the integration.
      const dt = Math.min((now - this.last) / 1000, 1 / 30)
      this.last = now

      const omega = (2 * Math.PI) / this.response
      const zeta = this.damping
      const dx = this.value - this.target

      // Semi-implicit Euler. Stable at the timesteps a display gives us.
      const accel = -2 * zeta * omega * this.velocity - omega * omega * dx
      this.velocity += accel * dt
      this.value += this.velocity * dt

      const settled = Math.abs(this.value - this.target) < 0.001 && Math.abs(this.velocity) < 0.01
      if (settled) {
        this.value = this.target
        this.velocity = 0
        this.onChange(this.value)
        this.raf = null
        return
      }
      this.onChange(this.value)
      this.raf = requestAnimationFrame(tick)
    }
    this.raf = requestAnimationFrame(tick)
  }

  stop() {
    if (this.raf !== null) cancelAnimationFrame(this.raf)
    this.raf = null
  }
}

/**
 * Apple's momentum projection (from the Designing Fluid Interfaces sample).
 * Given a release velocity, where would this come to rest? Snap to the target
 * nearest THAT point, not nearest the release point — which is what makes a
 * flick feel like it throws the thing.
 *
 * Note this is the exponential-decay form, not the textbook v²/2a.
 */
export function project(initialVelocity: number, decelerationRate = 0.998) {
  return ((initialVelocity / 1000) * decelerationRate) / (1 - decelerationRate)
}

/**
 * Progressive resistance past a boundary. A hard stop reads as "frozen";
 * resistance reads as "responsive, but there is nothing more here."
 */
export function rubberband(overshoot: number, dimension: number, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot))
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
