"use client";

import { motion } from "motion/react";
import {
  DEFAULT_DISTANCE,
  DEFAULT_DURATION,
  MOTION,
  revealVariants,
  withRevealClass,
  type RevealEffect,
  type ViewportAmount,
} from "@/lib/motion-presets";

export type RevealProps = {
  children: React.ReactNode;
  /** Direction / style of the entrance. Defaults to `"fade-up"`. */
  effect?: RevealEffect;
  /** Seconds to wait after the element enters the viewport. */
  delay?: number;
  /** Seconds the animation runs for. */
  duration?: number;
  /** Pixels of travel for the directional effects. */
  distance?: number;
  /** Extra classes for the wrapper (layout classes such as `grid` live here). */
  className?: string;
  /** When `false` the reveal replays every time the element re-enters view. */
  once?: boolean;
  /** How much of the element must be visible before animating. */
  amount?: ViewportAmount;
};

/**
 * General-purpose scroll reveal.
 *
 * The building block for every entrance animation on the site — headings,
 * copy blocks, collages, whole sections. Animation values come from
 * `motion-presets` so timing stays consistent everywhere.
 */
export default function Reveal({
  children,
  effect = "fade-up",
  delay = 0,
  duration = DEFAULT_DURATION,
  distance = DEFAULT_DISTANCE,
  className,
  once = MOTION.viewport.once,
  amount = MOTION.viewport.amount,
}: RevealProps) {
  return (
    <motion.div
      className={withRevealClass(className)}
      variants={revealVariants(effect, distance, duration, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
