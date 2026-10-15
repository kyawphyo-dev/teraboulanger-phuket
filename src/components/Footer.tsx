"use client";

import Image from "next/image";
import Link from "next/link";

const MASTER_LOGO_ORANGE = "/Brand_Identity/Logo/master_logo_orange.png";

const KEY_VISUAL_WOMAN_SHELL = "/Brand_Identity/Key_Visual/04_woman_shell.png";

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

const MENU_LINKS = [
  { href: "/menu#bread", label: "Artisan Breads" },
  { href: "/menu#viennoiserie", label: "Viennoiserie" },
  { href: "/menu#pastries", label: "Pastries" },
  { href: "/menu#cakes", label: "Cakes & Desserts" },
  { href: "/menu#seasonal", label: "Seasonal Specials" },
  { href: "/menu#catering", label: "Catering & Events" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
];

const CURRENT_YEAR = new Date().getFullYear();

const PLACEHOLDERS = {
  address: "[Phuket Address]",
  phone: "[Phone Number]",
  email: "[Email Address]",
  hours: "[Opening Hours]",
  mapsUrl: "#",
  instagram: "#",
  facebook: "#",
  tiktok: "#",
};

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15.4 8H13.4C12.8 8 12.4 8.4 12.4 9V10.5H15.3L14.9 13H12.4V20H9.4V13H6.9V10.5H9.4V8.6C9.4 6.1 10.9 4 13.6 4H15.9V7H14.2C14 7 15.4 7.6 15.4 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19.5 7.2C19.5 9.5 17.8 11.4 15.6 11.5V14.9C15.6 18.8 12.4 22 8.6 22C4.8 22 1.6 18.8 1.6 15C1.6 11.2 4.8 8 8.6 8C9 8 9.4 8 9.8 8.1V11C9.5 10.9 9.2 10.9 8.9 10.9C6.7 10.9 4.9 12.7 4.9 14.9C4.9 17.1 6.7 18.9 8.9 18.9C11.1 18.9 12.9 17.1 12.9 14.9V7.5C12.9 7.1 13.2 6.9 13.6 7C14.8 7.3 16.3 6.6 17.1 5.5C17.4 5.9 17.6 6.3 17.6 6.8L17.5 7.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22C12 22 7 15.5 7 11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11C17 15.5 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7V12L15.5 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 16.92V20.5C22 21.33 21.33 22 20.5 22C10.29 22 2 13.71 2 3.5C2 2.67 2.67 2 3.5 2H7.08C7.64 2 8.12 2.4 8.22 2.95L9.4 9.08C9.45 9.37 9.35 9.67 9.13 9.89L7.21 11.81C8.68 14.85 11.15 17.32 14.19 18.79L16.11 16.87C16.33 16.65 16.63 16.55 16.92 16.6L21.05 17.78C21.6 17.88 22 18.36 22 18.92V16.92Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 7L12 13L21 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-bg text-text overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">
        <section
          aria-labelledby="footer-cta-heading"
          className="pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-18 border-b border-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.26em] text-brand font-medium mb-5">
                <span
                  aria-hidden="true"
                  className="inline-block w-8 h-px bg-brand/50"
                />
                Tera boulanger Phuket
              </span>
              <h2
                id="footer-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] font-semibold tracking-tight"
              >
                Taste you keep coming for.
                <span className="block text-brand italic mt-1"></span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:shrink-0">
              <a
                href={PLACEHOLDERS.mapsUrl}
                target={PLACEHOLDERS.mapsUrl === "#" ? undefined : "_blank"}
                rel={
                  PLACEHOLDERS.mapsUrl === "#"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label="Get directions to Teraboulanger Phuket on Google Maps"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[14px] font-semibold text-brand-contrast transition-colors duration-200 hover:bg-brand-hover active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <MapPinIcon />
                <span>Get Directions</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <ArrowRightIcon />
                </span>
              </a>
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-[14px] font-semibold text-text transition-colors duration-200 hover:border-brand hover:text-brand active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Discover Our Menu
              </Link>
            </div>
          </div>
        </section>

        <nav
          aria-label="Footer navigation"
          className="py-14 sm:py-18 lg:py-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-y-12 border-b border-border relative"
        >
          <section
            aria-labelledby="footer-brand-heading"
            className="col-span-1 md:col-span-2 lg:col-span-4 relative z-10"
          >
            <h2 id="footer-brand-heading" className="sr-only">
              Tera Boulanger brand information
            </h2>

            <Link
              href="/"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm inline-block"
              aria-label="Tera Boulanger Phuket — Back to home"
            >
              <span className="relative inline-flex h-16 sm:h-18 w-[260px] sm:w-[320px] shrink-0 transition-transform duration-300 origin-left group-hover:scale-[1.01]">
                <Image
                  src={MASTER_LOGO_ORANGE}
                  alt="Tera Boulanger"
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 640px) 260px, 320px"
                  priority={false}
                  className="object-contain object-left"
                />
                <span className="sr-only">
                  Tera Boulanger — Maison Boulangère, Phuket
                </span>
              </span>
            </Link>

            <p className="mt-8 max-w-sm text-[14px] sm:text-[15px] leading-[1.75] text-muted font-light">
              French-inspired artisan baking, crafted with passion in Phuket.
              <br />
              Handmade pastries, slow-fermented breads, and the unmistakable
              warmth of a true maison boulangère.
            </p>

            <div className="mt-9 flex items-center gap-3">
              {[
                {
                  href: PLACEHOLDERS.instagram,
                  label:
                    "Visit Teraboulanger Phuket on Instagram (opens in a new tab)",
                  Icon: InstagramIcon,
                },
                {
                  href: PLACEHOLDERS.facebook,
                  label:
                    "Visit Teraboulanger Phuket on Facebook (opens in a new tab)",
                  Icon: FacebookIcon,
                },
                {
                  href: PLACEHOLDERS.tiktok,
                  label:
                    "Visit Teraboulanger Phuket on TikTok (opens in a new tab)",
                  Icon: TiktokIcon,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="footer-explore-heading"
            className="col-span-1 md:col-span-1 lg:col-span-2 relative z-10"
          >
            <h3
              id="footer-explore-heading"
              className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-brand font-semibold mb-6"
            >
              Explore
            </h3>
            <ul className="flex flex-col gap-3.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex text-[14px] text-text/80 transition-colors duration-200 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="footer-menu-heading"
            className="col-span-1 md:col-span-1 lg:col-span-2 relative z-10"
          >
            <h3
              id="footer-menu-heading"
              className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-brand font-semibold mb-6"
            >
              Our Bakery
            </h3>
            <ul className="flex flex-col gap-3.5">
              {MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex text-[14px] text-text/80 transition-colors duration-200 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="footer-visit-heading"
            className="col-span-1 md:col-span-4 lg:col-span-2 relative z-10"
          >
            <h3
              id="footer-visit-heading"
              className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-brand font-semibold mb-6"
            >
              Visit Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li>
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand"
                  >
                    <MapPinIcon />
                  </span>
                  <address className="not-italic text-[14px] leading-relaxed text-text/85">
                    {PLACEHOLDERS.address}
                    <br />
                    <span className="text-muted text-[13px]">
                      Phuket, Thailand
                    </span>
                  </address>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand"
                  >
                    <ClockIcon />
                  </span>
                  <div className="text-[14px] leading-relaxed text-text/85">
                    <p className="mb-0.5 text-text/60 text-[12.5px] uppercase tracking-wider">
                      Hours
                    </p>
                    <p>{PLACEHOLDERS.hours}</p>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href={
                    PLACEHOLDERS.phone.startsWith("[")
                      ? "#"
                      : `tel:${PLACEHOLDERS.phone}`
                  }
                  className="group flex items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
                  aria-label={
                    PLACEHOLDERS.phone.startsWith("[")
                      ? "Phone number to be added"
                      : `Call Teraboulanger Phuket at ${PLACEHOLDERS.phone}`
                  }
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand transition-colors duration-200 group-hover:text-brand-hover"
                  >
                    <PhoneIcon />
                  </span>
                  <span className="text-[14px] leading-relaxed text-text/85 transition-colors duration-200 group-hover:text-brand">
                    {PLACEHOLDERS.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={
                    PLACEHOLDERS.email.startsWith("[")
                      ? "#"
                      : `mailto:${PLACEHOLDERS.email}`
                  }
                  className="group flex items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
                  aria-label={
                    PLACEHOLDERS.email.startsWith("[")
                      ? "Email address to be added"
                      : `Email Teraboulanger Phuket at ${PLACEHOLDERS.email}`
                  }
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand transition-colors duration-200 group-hover:text-brand-hover"
                  >
                    <MailIcon />
                  </span>
                  <span className="text-[14px] leading-relaxed text-text/85 transition-colors duration-200 group-hover:text-brand break-all">
                    {PLACEHOLDERS.email}
                  </span>
                </a>
              </li>
            </ul>
          </section>

          {/* ——— Official Key Visual: Classical Woman with Shell — editorial artwork ——— */}
          <div
            aria-hidden="true"
            className="col-span-1 md:col-span-4 lg:col-span-2 flex justify-end items-end pt-4 sm:pt-6 lg:pt-0"
          >
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[140%] lg:max-w-none aspect-[3/4] lg:mr-[-28%] xl:mr-[-22%]">
              <Image
                src={KEY_VISUAL_WOMAN_SHELL}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 360px"
                priority={false}
                className="object-contain object-right-bottom select-none"
                draggable={false}
              />
            </div>
          </div>
        </nav>

        {/* Stay in loop section */}
        {/* <section
          aria-labelledby="footer-newsletter-heading"
          className="py-14 sm:py-16 border-b border-border relative z-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-lg lg:shrink-0">
              <span className="block text-[11px] sm:text-xs uppercase tracking-[0.26em] text-brand font-semibold mb-4">
                Stay in the loop.
              </span>
              <h3
                id="footer-newsletter-heading"
                className="sr-only font-serif text-xl sm:text-2xl font-semibold tracking-tight"
              >
                Stay in the loop.
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-muted font-light">
                Discover new bakes, seasonal creations and news from
                Teraboulanger.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full lg:w-auto lg:min-w-[460px] xl:min-w-[520px]"
              aria-label="Newsletter signup"
              noValidate
            >
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="relative flex-1">
                  <input
                    id="footer-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className="w-full h-12 sm:h-[50px] rounded-full bg-transparent border border-border text-text placeholder:text-muted/70 px-5 text-[14px] outline-none transition-colors duration-200 focus:border-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Subscribe to the Teraboulanger newsletter"
                  className="group inline-flex items-center justify-center gap-2 h-12 sm:h-[50px] px-7 rounded-full bg-brand text-brand-contrast text-[13.5px] font-semibold whitespace-nowrap transition-colors duration-200 hover:bg-brand-hover active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Subscribe
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <ArrowRightIcon />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section> */}

        <section
          aria-labelledby="footer-legal-heading"
          className="pt-8 pb-6 sm:pt-10 sm:pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 relative z-10"
        >
          <h2 id="footer-legal-heading" className="sr-only">
            Legal navigation and copyright
          </h2>
          <nav aria-label="Legal pages" className="order-2 sm:order-1">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12.5px] sm:text-[13px] text-muted transition-colors duration-200 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="order-1 sm:order-2 text-[12.5px] sm:text-[13px] text-muted tracking-wide whitespace-nowrap">
            &copy; {CURRENT_YEAR} Teraboulanger. All rights reserved.
          </p>
        </section>

        <div
          aria-hidden="true"
          className="pb-10 sm:pb-12 flex justify-center relative z-10"
        >
          <span className="inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11px] uppercase tracking-[0.34em] text-muted font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            Tera Boulanger · Phuket
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          </span>
        </div>
      </div>
    </footer>
  );
}
