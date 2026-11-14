"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import ActiveUnderline, { type NavGroup } from "./ActiveUnderline";

export interface AnimatedNavLinkProps
  extends Omit<ComponentProps<typeof Link>, "href" | "children" | "className"> {
  href: string;
  children: ReactNode;
  /**
   * Whether this link matches the current route. The caller derives it from
   * `usePathname()` — the component never guesses, so the same link can live in
   * a navbar, a dropdown or a footer without changing.
   */
  active: boolean;
  /**
   * Classes for the link itself. It must be positioned (`relative`) so the
   * underline can anchor to it.
   */
  className?: string;
  /** Positioning and sizing classes for the shared underline. */
  underlineClassName?: string;
  /**
   * Classes for the subtle underline revealed on hover for *inactive* items.
   * Pass `null` in menus where a growing horizontal line does not fit (for
   * example the vertical mobile drawer).
   */
  hoverUnderlineClassName?: string | null;
  /**
   * The navigation menu this link belongs to. Every link in one menu shares a
   * group; separate menus use separate groups (see `ActiveUnderline`).
   */
  group: NavGroup;
}

const DEFAULT_HOVER_UNDERLINE =
  "absolute left-1/2 -bottom-0.5 h-[1.5px] w-0 -translate-x-1/2 bg-brand transition-all duration-300 ease-out group-hover:w-7";

/**
 * Navigation link with the site's shared active/hover underline.
 *
 * Active items render the single shared-layout underline for their group, so
 * the line slides between items as the route (or the selected filter) changes.
 * Inactive items keep the original subtle hover line. Everything else — `Link`
 * behaviour, prefetching, focus styles, `onClick`, extra props such as `style`
 * — is preserved by forwarding the remaining props to `next/link`.
 */
export default function AnimatedNavLink({
  href,
  children,
  active,
  className,
  underlineClassName,
  hoverUnderlineClassName = DEFAULT_HOVER_UNDERLINE,
  group,
  ...rest
}: AnimatedNavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={className}
      {...rest}
    >
      {children}
      {active ? (
        <ActiveUnderline group={group} className={underlineClassName} />
      ) : (
        hoverUnderlineClassName && (
          <span aria-hidden="true" className={hoverUnderlineClassName} />
        )
      )}
    </Link>
  );
}
