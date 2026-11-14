"use client";

import { motion, useReducedMotion } from "motion/react";
import { MOTION, MOTION_EASE } from "@/lib/motion-presets";

/**
 * Shared-layout groups.
 *
 * Motion treats two mounted elements that share a `layoutId` as the *same*
 * element, which is what makes the underline appear to travel from one item to
 * the next. That also means unrelated navigation menus must never share an id,
 * or their underlines would be pulled towards each other.
 *
 * - `navbar`        — the desktop links in `Navbar`.
 * - `navbar-mobile` — the links inside the mobile drawer. It needs its own
 *                     group because those links stay mounted (they fade out via
 *                     opacity) while the desktop links are hidden with
 *                     `display: none`; both are in the DOM at the same time.
 * - `menu-categories` — the category filter under the menu hero.
 */
export type NavGroup = "navbar" | "navbar-mobile" | "menu-categories";

export interface ActiveUnderlineProps {
  /** The navigation menu this underline belongs to. Selects the shared layout id. */
  group: NavGroup;
  /**
   * Positioning and sizing classes, e.g. `inset-x-4 -bottom-0.5 h-[1.5px]`.
   * Keep the height identical for every item in a group so the shared layout
   * animation only slides and stretches horizontally.
   */
  className?: string;
}

/**
 * The single animated underline shared by the items of one navigation group.
 *
 * Render it on the active item only. When the active item changes, Motion
 * matches the outgoing and incoming elements by `layoutId` and animates the
 * underline between them.
 *
 * Positioning is deliberately expressed with `inset` / `left` / `bottom`
 * instead of a CSS transform, because Motion drives shared layout animations
 * through `transform` and the two would otherwise fight each other.
 */
export default function ActiveUnderline({
  group,
  className,
}: ActiveUnderlineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      // Dropping the `layoutId` under reduced motion removes the shared layout
      // transition entirely: the underline simply appears under the active
      // item instead of sliding, which is what these visitors asked for.
      layoutId={reduceMotion ? undefined : `tb-active-underline-${group}`}
      transition={{ duration: MOTION.duration.fast, ease: MOTION_EASE }}
      className={["pointer-events-none absolute bg-brand", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
