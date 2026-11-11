"use client";

import { motion } from "motion/react";
import {
  DEFAULT_DISTANCE,
  DEFAULT_DURATION,
  staggerItemVariants,
  withRevealClass,
} from "@/lib/motion-presets";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

export type StaggerItemProps = Omit<
  MotionDivProps,
  "variants" | "initial" | "whileInView" | "viewport" | "transition" | "animate"
> & {
  /** `"fade-up"` adds the vertical drift, `"fade"` is opacity only. */
  effect?: "fade" | "fade-up";
  duration?: number;
  distance?: number;
};

/**
 * A single child of a <StaggerContainer />.
 *
 * It carries no trigger of its own — it inherits the `hidden` / `visible`
 * state from the container, which is what produces the sequence. Extra props
 * are forwarded to the underlying `motion.div`.
 */
export default function StaggerItem({
  children,
  effect = "fade-up",
  duration = DEFAULT_DURATION,
  distance = DEFAULT_DISTANCE,
  className,
  ...rest
}: StaggerItemProps) {
  return (
    <motion.div
      className={withRevealClass(className)}
      variants={staggerItemVariants(distance, duration, effect)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
