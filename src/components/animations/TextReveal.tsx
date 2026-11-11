"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import {
  DEFAULT_DISTANCE,
  DEFAULT_DURATION,
  MOTION,
  staggerContainerVariants,
  staggerWordVariants,
  textRevealVariants,
  withRevealClass,
  type TextEffect,
  type ViewportAmount,
} from "@/lib/motion-presets";

/** Semantic tags that make sense for headings, copy and captions. */
export type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

export type TextRevealProps = {
  children: React.ReactNode;
  /** Rendered element — keeps correct semantics for headings and paragraphs. */
  as?: TextTag;
  effect?: TextEffect;
  /**
   * `"block"` reveals the whole text as one unit.
   * `"words"` reveals it word by word (only applies when `children` is a string).
   */
  mode?: "block" | "words";
  delay?: number;
  duration?: number;
  distance?: number;
  /** Seconds between words in `"words"` mode. */
  stagger?: number;
  className?: string;
  once?: boolean;
  amount?: ViewportAmount;
};

/**
 * Text entrance for headings, descriptions and captions.
 *
 * Deliberately limited to a whole-block fade or a word-by-word fade — no
 * character-level animation — so it stays editorial and calm.
 */
export default function TextReveal({
  children,
  as = "div",
  effect = "fade-up",
  mode = "block",
  delay = 0,
  duration = DEFAULT_DURATION,
  distance = DEFAULT_DISTANCE,
  stagger = MOTION.stagger.tight,
  className,
  once = MOTION.viewport.once,
  amount = MOTION.viewport.amount,
}: TextRevealProps) {
  /**
   * `motion` exposes one component per HTML tag; the tag is chosen at runtime
   * so headings keep their semantics. All of these share the same motion prop
   * signature, hence the single assertion.
   */
  const Tag = motion[as] as unknown as typeof motion.div;

  if (mode === "words" && typeof children === "string") {
    const words = children.split(/\s+/).filter(Boolean);

    return (
      <Tag
        className={withRevealClass(className)}
        variants={staggerContainerVariants(stagger, delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
      >
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <motion.span
              variants={staggerWordVariants(distance, duration)}
              className="inline-block"
            >
              {word}
            </motion.span>
            {/* A regular space (not a non-breaking one) between the word boxes
                so the line can still wrap naturally. */}
            {index < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      className={withRevealClass(className)}
      variants={textRevealVariants(effect, distance, duration, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </Tag>
  );
}
