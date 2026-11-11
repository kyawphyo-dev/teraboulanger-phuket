"use client";

import { MotionConfig } from "motion/react";
import { MOTION, MOTION_EASE } from "@/lib/motion-presets";

/**
 * Global animation configuration for Tera Boulanger.
 *
 * Wraps the app so every Motion animation shares the same defaults and honours
 * the user's `prefers-reduced-motion` setting. With `reducedMotion="user"`
 * Motion keeps opacity transitions but jumps transform animations straight to
 * their end value, which matches what the CSS fallback does for the reveal
 * wrappers.
 *
 * This is the only client boundary the animation system adds near the root —
 * the page content passed through `children` is still rendered on the server.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: MOTION.duration.base, ease: MOTION_EASE }}
    >
      {children}
    </MotionConfig>
  );
}
