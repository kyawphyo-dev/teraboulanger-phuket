import type { Transition, Variants } from "motion/react";

/**
 * Tera Boulanger — centralised motion tokens.
 *
 * Every animation on the site is derived from the values below so timing,
 * easing and travel distance stay consistent across sections. Tune the design
 * here once and the whole site follows.
 *
 * Brand direction: premium, elegant, warm, editorial — slow-out easing, modest
 * travel distances and no overshoot or bounce.
 */

/** Shared editorial easing: brisk start, gentle settle, never overshoots. */
export const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const MOTION = {
  /** Seconds. */
  duration: {
    fast: 0.35,
    base: 0.7,
    slow: 0.9,
    image: 1.1,
  },
  /** Pixels of travel used by the reveal effects. */
  distance: {
    sm: 16,
    md: 24,
    lg: 32,
  },
  /** Seconds between staggered siblings. */
  stagger: {
    tight: 0.08,
    base: 0.12,
    loose: 0.18,
  },
  /**
   * Scroll-trigger defaults.
   *
   * `amount: "some"` fires as soon as any part of the element is inside the
   * viewport. A numeric ratio would never be reached by elements taller than
   * the viewport, which would leave content permanently hidden — "some" is the
   * safe choice for both small headings and full-height sections.
   */
  viewport: {
    once: true,
    amount: "some",
  },
  /** Route-change entrance. */
  page: {
    duration: 0.4,
    distance: 10,
  },
} as const;

export const DEFAULT_DURATION: number = MOTION.duration.base;
export const DEFAULT_DISTANCE: number = MOTION.distance.md;

/** General-purpose scroll reveal effects. */
export type RevealEffect =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale";

/** Text entrance effects (kept intentionally limited). */
export type TextEffect = "fade" | "fade-up" | "fade-down";

/** Image entrance effects. */
export type ImageRevealEffect = "fade" | "scale" | "clip";

/** Accepted values for the `amount` viewport option. */
export type ViewportAmount = number | "some" | "all";

/**
 * Marker class placed on every animated wrapper. It has no styling of its own;
 * it exists so the site can reveal animated content when JavaScript is not
 * available (see the `<noscript>` rule in the root layout).
 */
export const REVEAL_CLASS = "tb-reveal";

/** Prefixes `className` with the reveal marker class. */
export function withRevealClass(className?: string): string {
  return className ? `${REVEAL_CLASS} ${className}` : REVEAL_CLASS;
}

/** Shorthand for the site-wide transition signature. */
export function motionTransition(
  duration: number = DEFAULT_DURATION,
  delay = 0,
): Transition {
  return { duration, delay, ease: MOTION_EASE };
}

/** Off-screen state for a reveal effect. */
function hiddenFor(effect: RevealEffect, distance: number) {
  switch (effect) {
    case "fade":
      return { opacity: 0 };
    case "fade-up":
      return { opacity: 0, y: distance };
    case "fade-down":
      return { opacity: 0, y: -distance };
    case "fade-left":
      return { opacity: 0, x: distance };
    case "fade-right":
      return { opacity: 0, x: -distance };
    case "scale":
      return { opacity: 0, scale: 0.96 };
  }
}

/** Variant pair used by <Reveal />. */
export function revealVariants(
  effect: RevealEffect,
  distance: number,
  duration: number,
  delay = 0,
): Variants {
  return {
    hidden: hiddenFor(effect, distance),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: motionTransition(duration, delay),
    },
  };
}

/** Variant pair used by <TextReveal /> in block mode. */
export function textRevealVariants(
  effect: TextEffect,
  distance: number,
  duration: number,
  delay = 0,
): Variants {
  return revealVariants(effect, distance, duration, delay);
}

/** Container variant that drives a sequential (staggered) reveal. */
export function staggerContainerVariants(
  staggerChildren: number,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}

/** Variant used by <StaggerItem /> — inherits its trigger from the container. */
export function staggerItemVariants(
  distance: number,
  duration: number,
  effect: "fade" | "fade-up" = "fade-up",
): Variants {
  return {
    hidden: effect === "fade" ? { opacity: 0 } : { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionTransition(duration),
    },
  };
}

/** Variant used by <StaggerItem /> in word mode. */
export function staggerWordVariants(distance: number, duration: number): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition: motionTransition(duration) },
  };
}

/** Variant pair used by <ImageReveal /> for the frame itself. */
export function imageRevealVariants(
  effect: ImageRevealEffect,
  duration: number,
  delay = 0,
): Variants {
  const transition = motionTransition(duration, delay);

  switch (effect) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition },
      };
    case "clip":
      return {
        hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0.35 },
        visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, transition },
      };
  }
}

/** Optional slow push-in applied to the image inside <ImageReveal />. */
export function imageZoomVariants(duration: number, delay = 0): Variants {
  return {
    hidden: { scale: 1.08 },
    visible: { scale: 1, transition: motionTransition(duration, delay) },
  };
}
