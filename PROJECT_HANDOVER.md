# PROJECT HANDOVER — Teraboulanger Phuket

> Handover document generated from a direct audit of the repository at commit
> `990959c` (branch `main`, working tree clean).
> All statements below are backed by file paths and/or executed commands.
> Confidence markers follow Section O: **[Verified]**, **[Inference]**, **[Unknown]**.

---

## A. Project Overview

| Item | Value | Evidence |
| --- | --- | --- |
| Project name | `teraboulanger-phuket` | `package.json` (`name`) **[Verified]** |
| Type | Marketing / brand website (single-page home) | `src/app/page.tsx` **[Verified]** |
| Purpose | Present a French artisan bakery ("Teraboulanger") located in Phuket, Thailand, with a premium editorial design | `src/app/layout.tsx` metadata, `README.md` **[Verified]** |
| Problem it solves | Gives the brand a public web presence: brand story, signature products, craft/ingredients, store info | `src/components/*` **[Verified]** |
| Target users | Prospective customers in Phuket and tourists; the brand owner as client | `src/app/layout.tsx` description, `src/components/Footer.tsx` **[Inference]** |
| Main business goals | Drive visits ("Visit Us", "Get Directions"), showcase menu and brand identity | `Navbar.tsx#L132-L137`, `Footer.tsx#L243-L270` **[Verified]** |
| Current development stage | **Frontend visual build-out, early stage.** Home page only. No backend, no database, no auth, no tests. Most nav targets (About/Menu/Our Story/Contact/legal) do not exist yet. | Executed `next build` route list; `Glob src/app/**` **[Verified]** |

---

## B. Technology Stack

Verified from `package.json` (and confirmed by a successful `next build`).

| Layer | Choice | Version | Actual purpose |
| --- | --- | --- | --- |
| Framework | Next.js (App Router, Turbopack) | `16.3.8` | Routing, rendering, build |
| UI library | React / React DOM | `19.2.8` | Component runtime |
| Language | TypeScript | `^5` | Typed source (strict mode) |
| Styling | Tailwind CSS | `^4` | Utility-first CSS via PostCSS plugin |
| Tailwind PostCSS bridge | `@tailwindcss/postcss` | `^4` | Tailwind v4 integration (`postcss.config.mjs`) |
| Linting | ESLint + `eslint-config-next` | `^9` / `16.3.8` | Core-web-vitals + TS rules |
| React Compiler | `babel-plugin-react-compiler` | `1.0.0` | Enabled via `reactCompiler: true` in `next.config.ts` |
| Fonts | `next/font/google` (Playfair Display, Inter) | bundled with Next | Heading/body faces with local fallbacks |
| Types | `@types/node`, `@types/react`, `@types/react-dom` | `^20` / `^19` | TypeScript types |

**Not present (important negative facts)** — confirmed by `Grep` over `src/` returning no matches and by `Glob`:
- No database / ORM (no Prisma, Drizzle, MySQL, Postgres, Supabase).
- No API routes (`src/app/api/**` does not exist).
- No Server Actions (`"use server"` not present).
- No authentication or authorization code.
- No test framework or test files (`**/*.{test,spec}.*` → none).
- No `.env*` files in the repo (`.gitignore` excludes `.env*`).
- No `middleware.ts`.
- No state-management library (state is local React state; theme is a React Context).

Runtime toolchain on the machine used for verification: Node `v20.19.5`, npm `11.13.0`. **[Verified]**

---

## C. Architecture and Folder Structure

```
teraboulanger-phuket/
├─ AGENTS.md                # Workspace rule: "This is NOT the Next.js you know" (must read Next 16 docs)
├─ CLAUDE.md                # Single line: "@AGENTS.md"
├─ README.md                # Untouched create-next-app boilerplate (still mentions Geist font)
├─ eslint.config.mjs        # flat config: next core-web-vitals + typescript
├─ next.config.ts           # reactCompiler: true; images.remotePatterns: images.unsplash.com
├─ postcss.config.mjs       # @tailwindcss/postcss
├─ tsconfig.json            # strict, path alias @/* -> ./src/*
├─ public/
│  └─ Brand_Identity/       # Real brand artwork (logos, key visuals, patterns)
│     ├─ Key_Visual/        # 01..11 + Tera_Phuket_Yellow_Building
│     ├─ Logo/              # logo_symbol_orange + master_logo_{black,cream,orange}
│     └─ Tera_Pattern/      # 12_pattern_light, 13_pattern_orange
└─ src/
   ├─ app/
   │  ├─ layout.tsx         # Root layout: fonts, metadata/SEO, theme, chrome
   │  ├─ page.tsx           # Home page (composes 4 sections)
   │  ├─ globals.css        # Tailwind import + semantic token design system
   │  ├─ robots.ts          # /robots.txt route
   │  ├─ sitemap.ts         # /sitemap.xml route
   │  └─ favicon.ico
   ├─ components/
   │  ├─ ThemeScript.tsx    # Blocking inline script: sets .dark before paint
   │  ├─ ThemeProvider.tsx  # Client context: mode (dark|light|system) + persistence
   │  ├─ ThemeToggle.tsx    # Cycles dark → light → system
   │  ├─ AnnouncementBar.tsx# Rotating promo bar (dismissible)
   │  ├─ Navbar.tsx         # Sticky header + mobile dialog menu
   │  ├─ Hero.tsx           # Editorial split hero + slideshow
   │  ├─ BrandIntro.tsx     # Philosophy section + photo collage
   │  ├─ SignatureProducts.tsx # Horizontal product carousel
   │  ├─ CraftIngredients.tsx  # Craft/collage section
   │  └─ Footer.tsx         # CTA + nav + visit info + legal
   └─ lib/
      └─ theme.ts           # Theme types, storage key, resolve/apply helpers
```

### Architecture
- **Frontend-only, static-rendered.** Every page is prerendered as static content (`○ (Static)` in the build output). There is no server, backend, or database tier.
- **Rendering model:** `layout.tsx`, `page.tsx`, `BrandIntro.tsx`, `CraftIngredients.tsx` are Server Components (no `"use client"`). Interactive components (`ThemeProvider`, `ThemeScript`, `ThemeToggle`, `AnnouncementBar`, `Navbar`, `Hero`, `SignatureProducts`, `Footer`) are Client Components marked `"use client"`.
- **Composition:** `app/layout.tsx` wraps everything in `ThemeProvider` and renders `AnnouncementBar → Navbar → <main> → Footer`. `app/page.tsx` renders `Hero → BrandIntro → SignatureProducts → CraftIngredients`.
- **Styling:** a single semantic token system in `globals.css`. Components use semantic Tailwind utilities (`bg-bg`, `text-text`, `text-muted`, `text-brand`, `bg-surface`, `border-border`, `bg-inverse`…) rather than hardcoded colors.
- **"How parts communicate":** only via props and React Context (theme). No network calls inside the app except `next/image` fetching Unsplash URLs at runtime.

**[Verified]** by reading every file above and by the build route list.

---

## D. Features and Current Implementation Status

Legend: **Completed** = implemented and verified working where verification is possible · **Partially completed** · **In progress** · **Not implemented** · **Needs verification**.

### D1. Root layout, chrome & SEO plumbing — **Completed** (static output verified)
- What: Sets fonts (Playfair Display → `--font-didot`, Inter → `--font-adman`), global `<title>`/template, description, keywords, OpenGraph, Twitter card, canonical, robots directives, icons, `lang="en"`, `suppressHydrationWarning`, and mounts chrome.
- Files: [layout.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/app/layout.tsx)
- Evidence: `next build` succeeded; `/`, `/robots.txt`, `/sitemap.xml` generated.
- Limitation: OG/Twitter/icon images point at `master_logo_orange.png` (declared `968×563` in metadata — **not verified against the actual asset dimensions**). Canonical/OG `url` is `/` for all pages (only one page exists).

### D2. Design system (semantic theme tokens) — **Completed**
- What: Defines light/dark palettes and exports Tailwind v4 `@theme inline` tokens; adds reduced-motion handling and Hero entrance animations.
- Files: [globals.css](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/app/globals.css)
- Note: Immutable palette is `--cream #fff1cc`, `--orange #f77908`, `--black #000000`. Default `:root` is the **light** palette; `.dark` switches to black canvas. (This differs from `brand-orange` naming referenced in older memory — the active token is `--color-brand` / `ring`.)
- Extras: Footer palette is scoped via `footer[aria-label="Site footer"]` and `.dark footer[...]` so the footer can invert independently.

### D3. Theme switching (dark / light / system) — **Needs verification** (code complete, browser behavior unverified)
- What: Persists mode under `localStorage` key `teraboulanger.theme`, applies the `.dark` class + `colorScheme`, supports "system" via `matchMedia`.
- Files: [theme.ts](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/lib/theme.ts), [ThemeProvider.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/ThemeProvider.tsx), [ThemeScript.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/ThemeScript.tsx), [ThemeToggle.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/ThemeToggle.tsx)
- Default mode: `dark` (`DEFAULT_MODE`), also passed as `defaultMode="dark"` in the layout. The blocking `ThemeScript` avoids a flash.
- Cycle order: `dark → light → system`.
- Why "needs verification": not executed in a browser during this audit. Logic appears coherent, but the anti-FOUC script and toggle are unproven at runtime.

### D4. Announcement bar — **Completed** (code-complete; runtime not exercised)
- What: Rotates 4 hardcoded announcements every `4200ms`, pauses on hover/focus, dismissible (hides via `isDismissed`).
- Files: [AnnouncementBar.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/AnnouncementBar.tsx)
- Limitation: `isDismissed` is **not persisted** — the bar returns on reload. CTAs link to `/menu` and `/contact`, which do not exist yet (dead links). Clicking a CTA does not dismiss the bar.

### D5. Navbar + mobile menu — **Completed** (code-complete; runtime not exercised)
- What: Sticky header; background transitions from solid to translucent blur after `scrollY > 12`; desktop nav links, theme toggle and "Visit Us" button; mobile hamburger opening a full-screen `role="dialog"` menu with backdrop, staggered link animation, Escape-to-close, and body-scroll lock.
- Files: [Navbar.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/Navbar.tsx)
- A11y: `aria-expanded`, `aria-controls="mobile-menu"`, `aria-modal`, `aria-label` present.
- Limitations: `MASTER_LOGO_BLACK` and `MASTER_LOGO_CREAM` are declared but unused (lint warnings) — both `<Image>` branches render the **same** `MASTER_LOGO_ORANGE`, so light/dark logo variants are effectively identical. Nav targets `/about`, `/menu`, `/our-story`, `/contact` do not exist yet → 404.

### D6. Hero section with manual slideshow — **Partially completed**
- What: Editorial split layout — text column `lg:col-span-5`, slideshow column `lg:col-span-7`. Slideshow has prev/next buttons, dot tablist, keyboard `←`/`→`, `aria-roledescription="carousel"`, 4:3 frame, crossfade via opacity transition. Caption shows `category` + `caption`.
- Files: [Hero.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/Hero.tsx)
- Limitation: **No auto-advance** (intentional per prior decisions). Slides are **Unsplash placeholder photos**, not brand photography (`images.unsplash.com/...`). A stats `<dl>` block (Oven 06.30 / Ferment 72h / Flour T65) exists but is **commented out** (`Hero.tsx#L195-L223`). CTAs point to `/menu` and `/contact` (non-existent).

### D7. Brand Intro (philosophy) — **Needs verification**
- What: 3-column × 5-slot asymmetric photo collage on the left (desktop), text on the right; renders the phoenix key visual above the eyebrow, plus H2, paragraph and a "Discover Our Story" CTA.
- Files: [BrandIntro.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/BrandIntro.tsx)
- Notes: Phoenix image uses `alt=""` (decorative). The header comment claims the phoenix is "centred"; the actual wrapper (`BrandIntro.tsx#L128`) uses `flex justify-center`, while the rest of the text column is left-aligned. `PNG` is rendered with **no flip** (prior memory mentioned a vertical flip; the current code has **no** transform classes). Collage grid uses `grid-rows-10` with `aspect-4/5 sm:aspect-5/6`.
- Why "needs verification": the collage spans were tuned visually; not screenshot-verified in this audit. CTA `/our-story` does not exist.

### D8. Signature Products carousel — **Partially completed / bug present**
- What: Left intro column (with cherub key visual) + right horizontal scroll strip of product cards; arrows appear only when scrollable in that direction; arrow geometry derived from measured card pitch; "snap" scrolling; hidden scrollbar.
- Files: [SignatureProducts.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/SignatureProducts.tsx)
- **Bug:** `PRODUCTS` has 6 entries but two share `id: 5` ("Croissant Waffle" duplicated at `#L17-L45` and `#L64-L72`), so `key={product.id}` is **not unique** → React duplicate-key warning, and the same product renders twice. **[Verified]**
- Limitation: images are Unsplash placeholders; `product.href` anchors (`/menu#viennoiserie`, `#bread`, `#pastries`, `#cakes`, `#waffles`) target a non-existent page.
- Responsiveness: card width `w-70 sm:w-[calc(50%-16px)] lg:w-[calc(25%-18px)]`.

### D9. Craft & Ingredients — **Needs verification**
- What: Editorial split: photo collage left (1 primary + 2 supporting, offset), copy right, CTA "Discover Our Craft".
- Files: [CraftIngredients.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/CraftIngredients.tsx)
- Limitation: CTA `ABOUT_CRAFT_HREF = "/about#our-craft"` → non-existent page. Images are Unsplash placeholders.

### D10. Footer — **Partially completed**
- What: CTA band ("Get Directions" + "Discover Our Menu"), 12-column nav `[Brand(4), Explore(2), Bakery(2), Visit(2), Illustration(2)]`, social icons, legal links, copyright, and a centered brand lockup.
- Files: [Footer.tsx](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/components/Footer.tsx)
- Limitations:
  - `PLACEHOLDERS` (`#L35-L44`) are unfilled: `[Phuket Address]`, `[Phone Number]`, `[Email Address]`, `[Opening Hours]`, and `mapsUrl`/social URLs = `"#"`.
  - Phone/email links intentionally degrade to `href="#"` when the value starts with `[` (`#L442-L447`, `#L467-L472`).
  - Newsletter section is **commented out** (`#L515-L571`) — so no newsletter functionality.
  - `EXPLORE_LINKS`, `MENU_LINKS`, `LEGAL_LINKS`, `/menu` → **all non-existent routes** (404), except `/` and the CTA `/menu`.

### D11. SEO routes (robots / sitemap) — **Completed**
- Files: [robots.ts](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/app/robots.ts) (`allow: /`, sitemap pointer), [sitemap.ts](file:///Users/mac/Desktop/TeraBoulanger/teraboulanger-phuket/src/app/sitemap.ts) (single `/` entry, `changeFrequency: weekly`, `priority: 1`).
- Evidence: `/robots.txt` and `/sitemap.xml` appear as static routes in the build output. Base URL `https://teraboulanger.com` is hardcoded in `layout.tsx`, `robots.ts`, `sitemap.ts` (duplicated constant).

### D12. Additional pages (About / Menu / Our Story / Contact / Privacy / Terms / Cookies) — **Not implemented**
- Evidence: `Glob src/app/**` returns only `page.tsx`, `layout.tsx`, `globals.css`, `robots.ts`, `sitemap.ts`, `favicon.ico`; build route list contains only `/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`. **[Verified]**

---

## E. Core Business Logic and Workflows

There is **no server-side business logic** in this repo (no data persistence, no transactions). The only "logic" is client-side UI state. Documented workflows below are the actual implemented behaviors.

### E1. Theme resolution & persistence
1. On first paint, `ThemeScript` (inlined in `<head>`) synchronously reads `localStorage["teraboulanger.theme"]`. If absent/invalid it falls back to `"dark"`. It then adds/removes `.dark` and sets `documentElement.style.colorScheme`. (`ThemeScript.tsx#L3-L19`)
2. `ThemeProvider` initializes React state from the same storage via `readStoredMode` (SSR-safe: returns fallback when `window` is undefined). (`ThemeProvider.tsx#L33-L60`)
3. On mode change, `applyTheme(resolve(mode))` runs. For `"system"`, a `matchMedia` listener re-applies on OS theme change. (`ThemeProvider.tsx#L62-L77`)
4. `ThemeToggle` calls `cycle()`, advancing `dark → light → system → dark`. Each `setMode` writes to `localStorage` (wrapped in try/catch).

**Rules enforced:** invalid stored values are rejected (`readStoredMode`, `ThemeScript`); SSR defaults to dark. **Implemented** in code; runtime not browser-verified.

### E2. Hero slideshow state machine
- State: `current` index (0..3). Transitions: `goNext` = `(prev+1)%count`; `goPrev` = `(prev-1+count)%count`; `goTo(i)` = direct set. Keyboard `ArrowRight/ArrowLeft` mapped on the focusable region (with `preventDefault`).
- Rule: **no autoplay** — there is no interval/timer.
- Visual rule: active slide `opacity-100`; others `opacity-0 pointer-events-none`; `aria-hidden` on inactive slides; caption block is `aria-live="polite"`; the active dot gets `role="tab"` + `aria-selected`.
- Crossfade duration `500ms`; reduced-motion neutralized globally in `globals.css`.

### E3. Announcement rotation
- State: `index`, `isPaused`, `isDismissed`. A `setInterval(4200ms)` advances `index` unless paused or dismissed; interval is cleared on unmount/deps change. Pause on `mouseenter`/`focus` capture; resume on leave/blur.
- Rule: dismissal is session-only (no persistence).

### E4. Signature Products scroll geometry
- `syncLayout(remeasure)` measures the horizontal "pitch" between card 1 and 2 and the image-band height; on scroll it recomputes `atStart`/`atEnd` to show/hide arrows. `scrollTo(±1)` moves exactly one pitch, clamped to `[0, scrollWidth-clientWidth]`. `handleScroll` reuses cached pitch (no re-measure) for performance.
- Rule: arrows hidden when there is nothing further to scroll (`maxScroll <= 1` treated as non-scrollable).
- Same source also drives the image-band overlay height used to vertically center the arrows.

**[Verified]** by reading the code; **no runtime/browser execution performed** for any workflow in this section.

---

## F. Database and Data Model

**None.**

- No ORM/DB dependencies in `package.json`; no `prisma/` directory; no schema/migration files.
- `Grep` for `prisma|drizzle|mysql|postgres|supabase|createClient` across `src/` → **no matches**.
- All content (products, announcements, nav links, footer data) is **hardcoded in component constants** (`SLIDES`, `PRODUCTS`, `ANNOUNCEMENTS`, `NAV_LINKS`, `EXPLORE_LINKS`, `MENU_LINKS`, `LEGAL_LINKS`, `COLLAGE_SLOTS`, `PRIMARY_PHOTO`, `SUPPORTING_PHOTOS`, `PLACEHOLDERS`).

If persisted content is required later (menu items, real contact info, newsletter subscribers), that is **greenfield** work.

---

## G. API and Server-Side Operations

**None.**

- No `src/app/api/**` directory, no Route Handlers, no Server Actions (`"use server"` absent), no `middleware.ts`.
- The only server-rendered outputs are the static pages and the two metadata routes:
  - `/robots.txt` — from `src/app/robots.ts` (returns `MetadataRoute.Robots`).
  - `/sitemap.xml` — from `src/app/sitemap.ts` (returns `MetadataRoute.Sitemap`).
- Form handling: the only `<form>` is the **commented-out** footer newsletter (`Footer.tsx#L535-L569`), and even that used `onSubmit={(e) => e.preventDefault()}` (no submission).

---

## H. UI and User Experience

### Pages
- `/` only (`src/app/page.tsx`), composing `Hero → BrandIntro → SignatureProducts → CraftIngredients`, framed by `AnnouncementBar + Navbar` (top) and `Footer` (bottom).
- `/_not-found` is the default Next 404 (no custom `not-found.tsx`).

### Navigation
- Desktop (≥`lg`): inline `NAV_LINKS` + theme toggle + "Visit Us".
- Mobile (<`lg`): theme toggle + hamburger → full-screen dialog menu.
- Footer nav: Explore / Our Bakery / Visit Us + legal links.

### Reusable components
- `ThemeToggle`, `ThemeProvider`, `ThemeScript` (theme subsystem).
- Inline SVG icon components are **duplicated per file** rather than shared: `ArrowRightIcon` exists in `Hero.tsx`, `SignatureProducts.tsx`, `CraftIngredients.tsx`, `Footer.tsx`; `MapPinIcon` in `Hero.tsx` and `Footer.tsx`; `ArrowLeftIcon` in `Hero.tsx` and `SignatureProducts.tsx`; `ChevronRight` in `Navbar.tsx`. **No shared icon module.** **[Verified]** — this is a maintenance/duplication risk, not a bug.

### Design conventions
- Semantic color tokens only; brand accent = orange `#f77908` on cream `#fff1cc` / black.
- Unified focus treatment: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
- Editorial typography: serif headings (`font-serif`), sans body; generous whitespace; rounded-full CTAs; hairline borders.
- Motion: subtle fade/slide entrance classes (`.hero-fade-up`, `.hero-fade-in`, `.hero-reveal`), hover underline on nav links, crossfade slides, all disabled under `prefers-reduced-motion`.

### Known UI/UX issues
- **All secondary navigation is dead** (see D12) → users hitting About/Menu/Our Story/Contact, footer menu anchors and legal links get 404s. This is the single biggest UX gap.
- Duplicate product card + duplicate React key in `SignatureProducts`.
- Footer contact details are visible placeholders (`[Phone Number]`, etc.).
- Announcement bar dismissal not persisted.
- Logo light/dark variants unused (both branches render the orange logo).
- `<style jsx global>` is used in `AnnouncementBar` and `<style jsx>` in `SignatureProducts` (styled-jsx); works with the current build but is a non-Tailwind pattern worth noting for consistency.

---

## I. Important Technical Decisions

Established decisions that a future agent must preserve (reasons given only where the code/comments establish them).

1. **Semantic design tokens in `globals.css`** — the comment block (`globals.css#L5-L24`) explicitly mandates using `bg-bg`/`text-text`/`text-brand`/… over hardcoded values, and warns not to override the immutable brand palette per theme. **Preserve.**
2. **Dark-first theme with anti-FOUC inline script** — `DEFAULT_MODE = "dark"` and `ThemeScript` in `<head>`; `suppressHydrationWarning` on `<html>`. This is deliberate to avoid a flash of the wrong theme.
3. **No slideshow autoplay** — `Hero` has only manual controls (consistent with prior product decisions). **Preserve.**
4. **Accessibility is a first-class requirement** — carousel `aria-roledescription`, dot `role="tab"`/`aria-selected`, mobile menu `aria-modal`/`aria-expanded`/`aria-controls`, decorative art `aria-hidden`, `alt=""` on decorative images, `aria-live` on rotating text. **Preserve.**
5. **Reduced-motion support** — global override plus per-animation overrides. **Preserve.**
6. **Footer is theme-invertible via scoped CSS custom properties** on `footer[aria-label="Site footer"]` (independent of page theme). **Preserve.**
7. **Rely on real brand artwork from `public/Brand_Identity/`** for brand marks (phoenix, cherub, woman-with-shell, orange master logo). Current photography is still Unsplash placeholder content (see J).
8. **`reactCompiler: true`** enabled in `next.config.ts` — code is written expecting React Compiler (hence some memoization patterns like `useCallback`/`useMemo`).
9. **External images whitelisted** — only `images.unsplash.com` is allowed in `next.config.ts#remotePatterns`. Adding another image host requires a config change.
10. **AGENTS.md rule** — Next.js 16 has breaking changes vs. training data; the workspace rule requires reading `node_modules/next/dist/docs/` before writing code. **Respect this.**

---

## J. Bugs, Risks, and Technical Debt

### Confirmed issues (verified from source)
1. **Duplicate React key / duplicate product** — `SignatureProducts.tsx#L16-L73`: two objects with `id: 5` and identical content. Produces a duplicate-key warning and renders the same card twice. **Fix:** give unique ids (and dedupe content).
2. **Dead internal links (404s)** — `/about`, `/menu`, `/our-story`, `/contact`, `/privacy`, `/terms`, `/cookies`, and menu anchors (`/menu#bread`, `#viennoiserie`, `#pastries`, `#cakes`, `#seasonal`, `#catering`, `#waffles`) have no matching routes. Sources: `Navbar.tsx`, `Hero.tsx`, `BrandIntro.tsx`, `SignatureProducts.tsx`, `CraftIngredients.tsx`, `Footer.tsx`.
3. **Unused imports / lint warnings** — `Navbar.tsx#L16-L17`: `MASTER_LOGO_BLACK`, `MASTER_LOGO_CREAM` unused (2 ESLint warnings). Both logo `<Image>` branches render `MASTER_LOGO_ORANGE`.
4. **Unfilled footer placeholders** — `Footer.tsx#L35-L44`: address/phone/email/hours are literal bracket placeholders; social + maps URLs are `"#"`.
5. **Sitemap/robots base URL duplicated** — `https://teraboulanger.com` hardcoded in `layout.tsx`, `robots.ts`, `sitemap.ts` (drift risk).
6. **Unsplash runtime dependency for imagery** — Hero, BrandIntro, SignatureProducts and CraftIngredients load all photography from `images.unsplash.com` (external CDN). Not brand photography; also means the site's visuals depend on a third party and specific photo IDs remaining available.

### Potential risks (need investigation / not executed)
7. **No automated tests** — zero test coverage; nothing guards the theme logic or carousel geometry.
8. **Theme/FOUC behavior unverified in a browser** — logic reviewed only statically.
9. **Magic pixel values** — footer woman-shell artwork uses `lg:w-[140%]`, `lg:mr-[-28%]`, `xl:mr-[-22%]`; collage uses `grid-rows-10` with numeric spans shared across breakpoints. Responsive correctness unverified; `Tera_Pattern` files exist in `public/` but are **not referenced anywhere** in `src/` (prior memory describes a pattern texture in the footer — it is not present in the current code).
10. **SEO metadata is home-only** — canonical/OG `url` is `/`; when more pages are added, per-page metadata (`metadata` exports / `generateMetadata`) will be required.
11. **`README.md` is stale boilerplate** — mentions Geist font and default create-next-app flow; does not describe this project.

---

## K. Testing and Verification

### Tests available
- **None.** No test runner configured, no test files (`**/*.{test,spec}.{ts,tsx,js,jsx}` → none), no `test` script in `package.json`.

### Checks actually executed during this audit (all in the repo root)
| Check | Command | Result |
| --- | --- | --- |
| Lint | `npm run lint` | **Passed**, exit code 0. **2 warnings** (0 errors): unused `MASTER_LOGO_BLACK` / `MASTER_LOGO_CREAM` in `Navbar.tsx`. |
| Type check | (via `next build` → "Running TypeScript") | **Passed** — "Finished TypeScript" with no errors. |
| Production build | `npm run build` | **Passed**, exit code 0. Next.js **16.3.8 (Turbopack)**. "Compiled successfully in 4.9s". Static routes: `/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`. |
| Git state | `git status` / `git log` | Working tree **clean** on `main` at `990959c`, up to date with `origin/main`. |
| Dependency presence | `ls node_modules`, `node -v`, `npm -v` | `node_modules` present; Node `v20.19.5`; npm `11.13.0`. |

### Verified facts
- Only one application route exists; all others 404.
- No backend/DB/env/test infrastructure exists.

### Not verified / not performed
- **No browser / manual UI verification** was performed (carousels, mobile menu, theme toggle, animations, responsive breakpoints, footer artwork overflow).
- No accessibility audit via tooling (only static inspection of ARIA attributes).
- No Lighthouse/Core Web Vitals measurement.
- Build emitted a harmless warning that Turbopack ignored `/Users/mac/package-lock.json` because it is outside the Git repo (can be silenced via `turbopack.root` in `next.config.ts`).

---

## L. Deployment and Development Setup

### Prerequisites
- Node.js `>= 20.9` (dev machine used `v20.19.5`; Next 16 requirement). **[Inference — exact minimum not declared in the repo]**
- npm `11.x`.

### Install
```bash
npm install   # package-lock.json is committed → prefer npm ci for reproducible installs
```

### Environment
- **No environment variables are required or referenced.** There is no `.env` file; `.gitignore` ignores `.env*`. No secrets are present in the repo. **[Verified]**

### Run locally
```bash
npm run dev        # http://localhost:3000
```

### Build & run production
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

### Database commands
- **Not applicable** — no database.

### Tests
- **Not applicable** — no test script/framework.

### Deployment assumptions
- No deployment config is committed (no `vercel.json`, no Dockerfile, no CI workflow). **[Verified]**
- `SITE_URL` is hardcoded to `https://teraboulanger.com`; OG image dimensions are declared as `968×563`.
- Deployment target is **unknown**; the project is a stock Next.js app with purely static output, so Vercel (or any static/Node host) would work. **Update `SITE_URL` in the three files if the production domain differs.**

---

## M. Current Project Status

### Working
- Production build and lint pass; TypeScript compiles.
- Home page renders all four sections with a coherent editorial design system.
- Theme subsystem, announcement bar, navbar/mobile menu, hero slideshow, product carousel and footer are all code-complete against the design system.
- SEO plumbing (metadata, robots, sitemap) is in place for the home page.

### Partially working
- Footer (placeholders for contact info; commented-out newsletter; dead links).
- Hero (commented-out stats block; Unsplash imagery; dead CTAs).
- Signature Products (duplicate card/key).

### Unfinished
- All secondary pages: About, Menu, Our Story, Contact, Privacy, Terms, Cookies.
- Real content/data (menu, contact details, social links, opening hours).
- Custom 404 page.

### Broken / needs investigation
- Dead links across nav + footer + sections (404s).
- Duplicate React key in `SignatureProducts`.
- Runtime behavior of theme, carousels and mobile menu unverified in a browser.
- Unreferenced brand assets (`Tera_Pattern/*`, several key visuals) and unused logo variants.

### Most important next steps
1. Decide scope for secondary pages (`/menu`, `/about`, `/our-story`, `/contact`, legal) and implement them (this unblocks nearly all nav/footer/CTA links).
2. Fix the duplicate product `id`/key in `SignatureProducts`.
3. Replace Unsplash placeholders with real brand photography and clean up unused/unreferenced assets.
4. Fill footer `PLACEHOLDERS` with real address/phone/email/hours/social + maps URL.
5. Centralize `SITE_URL` and consider extracting duplicated inline SVG icons into a shared module.
6. Remove or intentionally use the unused logo imports (clear the lint warnings).

### Blockers / dependencies
- **Content/asset dependency:** real photography, contact details, social URLs and menu content are not present in the repo — these must come from the client before the site can go live.
- **Decision dependency:** whether the site stays static vs. gains a CMS/DB (would require new architecture).

---

## N. Instructions for the Next AI Coding Agent

1. **Read this document first**, then **inspect the relevant source files** before proposing or implementing any change. Do not assume behavior from this document alone for critical details.
2. **Respect the workspace rule in `AGENTS.md`:** this Next.js (16.3.8) has breaking changes; consult `node_modules/next/dist/docs/` before writing Next-specific code.
3. **Preserve the semantic design token system** (`globals.css`) and the dark-first theme architecture. Do not hardcode colors that bypass `bg-bg`/`text-text`/`text-brand`/`border-border`.
4. **Preserve accessibility and reduced-motion behavior** already implemented (carousel ARIA, mobile-menu ARIA, `aria-hidden` decorative art, `focus-visible` rings, `prefers-reduced-motion` overrides).
5. **Do not enable slideshow autoplay** and do not remove the manual controls — this was a deliberate decision.
6. **Do not rewrite working sections** unnecessarily. The home page is complete; changes should be additive or targeted.
7. **Avoid duplication.** Before adding an icon, a nav-link list, a card, or a section, check whether an equivalent already exists (inline SVG icons and link lists are currently duplicated across files — consolidate only if it serves the task).
8. **To add a page:** create `src/app/<route>/page.tsx` exporting `metadata` (or `generateMetadata`); keep `SITE_URL` consistent; verify all previously-dead links resolve.
9. **Follow existing conventions:** Server Components by default, `"use client"` only for interactivity; TypeScript strict with no `any`; Tailwind utility classes referencing semantic tokens; `next/image` with explicit `sizes`; existing naming style for constants (UPPER_SNAKE) and components (PascalCase).
10. **Anchor links:** when creating `/menu`, either add matching `id`s (`#bread`, `#viennoiserie`, `#pastries`, `#cakes`, `#seasonal`, `#catering`, `#waffles`) or update the links.
11. **Verify every change** with `npm run lint` and `npm run build` (both currently pass). There are no unit tests, so manual/browser verification is required for interactive behavior.
12. **Update this `PROJECT_HANDOVER.md`** whenever significant implementation or status changes occur (new pages, new routes, new dependencies, status flips).
13. **Never commit secrets.** There are currently no env vars; if any are introduced, add them to `.env*` (already git-ignored) and document the *names* only, never the values.

---

## O. Source of Truth and Confidence

### 1. Verified facts (from source code or executed checks)
- Dependency set and versions — `package.json`; build reports Next **16.3.8 (Turbopack)**.
- Route inventory — executed `npm run build` output (`/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`).
- No DB/API/server-actions/env/tests — `Grep` + `Glob` over `src/` returning no matches / no files.
- Component contents and behaviors described in D–J — direct reads of every file under `src/`.
- Lint result (2 warnings, 0 errors) and build result (success) — executed commands.
- Git state — `git status`/`git log`/`git branch -vv` (clean, `main` @ `990959c`).
- Duplicate product id / duplicate React key — `SignatureProducts.tsx#L16-L73`.

### 2. Reasonable inferences
- Node minimum version `>= 20.9` (dev used v20.19.5; Next 16 requirement not declared in repo).
- Target users and business goals (derived from copy in `layout.tsx`, `Hero.tsx`, `Footer.tsx`, and brand asset naming).
- Deployment target unknown/unconfigured — inferred from absence of any deploy config.

### 3. Unknown / requires investigation
- Whether the phoenix/collage/footer-artwork compositions render as intended at all breakpoints (no browser verification).
- Actual dimensions of `master_logo_orange.png` vs. the metadata-declared `968×563`.
- Whether `--font-adman`/`--font-didot` naming (Playfair/Inter stand-ins for Didot/DB AdmanX) is the final typography plan.
- Whether the `Tera_Pattern/*` assets are intended to be used (present in `public/` but unreferenced in `src/`).
- Production domain confirmation for `SITE_URL`.
- The intended final menu content and whether a CMS/DB will be introduced.

> Areas left unexamined: none. Every file under `src/`, `public/`, and all root config files were inspected; the two SVG/asset folders under `public/` were enumerated but individual binary image files were not opened.
