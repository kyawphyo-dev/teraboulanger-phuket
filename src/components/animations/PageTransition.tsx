"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { MOTION, MOTION_EASE, withRevealClass } from "@/lib/motion-presets";

/**
 * False during the first client render (server render + hydration), true from
 * the first navigation onwards. Keeping it false for the initial paint means
 * the landing page is never hidden behind JavaScript — important because the
 * page wrapper contains the largest contentful paint element.
 */
let hasNavigated = false;

/**
 * Route entrance transition for the App Router.
 *
 * ## Why this shape
 *
 * The App Router swaps the whole route tree in a single commit, so a classic
 * `AnimatePresence` exit (keeping the previous page mounted while it animates
 * out) is not reliable without React's `<ViewTransition>` — which is not
 * available in the React version installed here. Rather than ship a fragile
 * workaround, this component implements a dependable **entrance** transition:
 *
 * - `usePathname()` changes on every route change (including the `/menu/*`
 *   category pages, which a root `template.tsx` would not remount).
 * - keying the wrapper on the pathname remounts it, so the entrance animation
 *   replays on each navigation — the same mechanism Next.js uses internally
 *   for `template.tsx`.
 * - The outgoing page is replaced instantly; the incoming one fades up from the
 *   page background, which reads as a soft crossfade.
 *
 * It is mounted once in the root layout, below the navbar and above the footer,
 * so navigation chrome never re-animates and nested routes are covered.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFirstPaint = !hasNavigated;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      key={pathname}
      className={withRevealClass()}
      initial={
        isFirstPaint ? false : { opacity: 0, y: MOTION.page.distance }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: MOTION.page.duration, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  );
}
