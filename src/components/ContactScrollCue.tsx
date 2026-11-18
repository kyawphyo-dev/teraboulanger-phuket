"use client";

import { motion } from "motion/react";
import { MOTION_EASE } from "@/lib/motion-presets";

/**
 * Circular scroll cue for the contact hero.
 *
 * A gentle looping bob hints that there is more below, and clicking it eases
 * the page down to the target section instead of jumping. Users who prefer
 * reduced motion get an instant jump (and the CSS media query in globals.css
 * neutralises the bob).
 */
export default function ContactScrollCue({ targetId }: { targetId: string }) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to contact information"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.3, ease: MOTION_EASE }}
      className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/70 text-cream transition-colors hover:border-brand hover:bg-brand hover:text-brand-contrast focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-inverse cursor-pointer"
    >
      <motion.span
        aria-hidden="true"
        className="flex"
        animate={{ y: [0, 4, 0] }}
        transition={{
          duration: 1.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.3,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M12 4v15m-6-6 6 6 6-6" />
        </svg>
      </motion.span>
    </motion.button>
  );
}
