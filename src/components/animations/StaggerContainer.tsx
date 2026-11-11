"use client";

import { motion } from "motion/react";
import {
  MOTION,
  staggerContainerVariants,
  withRevealClass,
  type ViewportAmount,
} from "@/lib/motion-presets";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

export type StaggerContainerProps = Omit<
  MotionDivProps,
  "variants" | "initial" | "whileInView" | "viewport" | "transition"
> & {
  /** Seconds between each child's entrance. */
  stagger?: number;
  /** Seconds to wait before the first child starts. */
  delayChildren?: number;
  once?: boolean;
  amount?: ViewportAmount;
};

/**
 * Orchestrates a sequential reveal for a group of <StaggerItem /> children.
 *
 * Put the layout classes (`grid`, `flex`, gaps) on the container; wrap each
 * card in a <StaggerItem />. The children animate in order once the container
 * scrolls into view. Any other `motion.div` prop (`ref`, `style`, `onScroll`,
 * ARIA attributes…) is forwarded, so the container can double as an existing
 * layout element such as a scroll rail.
 */
export default function StaggerContainer({
  children,
  stagger = MOTION.stagger.base,
  delayChildren = 0,
  once = MOTION.viewport.once,
  amount = MOTION.viewport.amount,
  className,
  ...rest
}: StaggerContainerProps) {
  return (
    <motion.div
      className={withRevealClass(className)}
      variants={staggerContainerVariants(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
