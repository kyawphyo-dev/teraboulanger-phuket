import Link from "next/link";

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

function BreadIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 18C4 11.37 9.37 6 16 6C22.63 6 28 11.37 28 18C28 21.31 26.65 24.29 24.42 26.23C22.09 25.7 19.15 25.4 16 25.4C12.85 25.4 9.91 25.7 7.58 26.23C5.35 24.29 4 21.31 4 18Z"
        fill="currentColor"
      />
      <path
        d="M8 16C9 15.2 10.5 14.7 12 14.7C13.5 14.7 14.6 15 16 15.9C17.4 15 18.5 14.7 20 14.7C21.5 14.7 23 15.2 24 16"
        stroke="#FCF7EB"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.78"
      />
      <path
        d="M10.5 11L12.5 13M21.5 11L19.5 13"
        stroke="#FCF7EB"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
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
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19.5 7.2C19.5 9.5 17.8 11.4 15.6 11.5V14.9C15.6 18.8 12.4 22 8.6 22C4.8 22 1.6 18.8 1.6 15C1.6 11.2 4.8 8 8.6 8C9 8 9.4 8 9.8 8.1V11C9.5 10.9 9.2 10.9 8.9 10.9C6.7 10.9 4.9 12.7 4.9 14.9C4.9 17.1 6.7 18.9 8.9 18.9C11.1 18.9 12.9 17.1 12.9 14.9V7.5C12.9 7.1 13.2 6.9 13.6 7C14.8 7.3 16.3 6.6 17.1 5.5C17.4 5.9 17.6 6.3 17.6 6.8L17.5 7.2Z"
        fill="currentColor"
      />
      <path
        d="M17.6 2.3C17.6 2.3 17.7 2.3 17.6 2.3V5.5C17.7 5.7 17.8 5.9 17.9 6V2.3H17.6Z"
        fill="currentColor"
        opacity="0.5"
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
      className="relative w-full bg-brown text-ivory overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 520 Q200 460 400 500 T800 480 L800 600 L0 600 Z"
            fill="#D9A486"
          />
          <path
            d="M0 560 Q200 510 400 545 T800 530 L800 600 L0 600 Z"
            fill="#AF572A"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <section
          aria-labelledby="footer-cta-heading"
          className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 border-b border-ivory/10"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-peach font-semibold mb-4">
                <span
                  aria-hidden="true"
                  className="inline-block w-6 h-px bg-peach/60"
                />
                Teraboulanger Phuket
              </span>
              <h2
                id="footer-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-ivory font-semibold tracking-tight"
              >
                Taste You Keep Coming For
                <span className="block text-peach italic">
                  French baking in Phuket.
                </span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:shrink-0">
              <Link
                href={PLACEHOLDERS.mapsUrl}
                aria-label="Get directions to Teraboulanger Phuket on Google Maps"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-orange-dark active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
              >
                <MapPinIcon />
                <span>Get Directions</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <ArrowRightIcon />
                </span>
              </Link>
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 bg-transparent px-7 py-3.5 text-[14px] font-semibold text-ivory transition-all duration-200 hover:border-peach hover:text-peach active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
              >
                Discover Our Menu
              </Link>
            </div>
          </div>
        </section>

        <nav
          aria-label="Footer navigation"
          className="py-12 sm:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-y-12 border-b border-ivory/10"
        >
          <section
            aria-labelledby="footer-brand-heading"
            className="col-span-2 lg:col-span-4"
          >
            <h2 id="footer-brand-heading" className="sr-only">
              Teraboulanger brand information
            </h2>

            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown rounded-sm"
              aria-label="Teraboulanger Phuket — Back to home"
            >
              <span
                aria-hidden="true"
                className="text-orange transition-transform duration-300 group-hover:-rotate-6"
              >
                <BreadIcon />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[26px] sm:text-[28px] font-semibold text-ivory tracking-tight">
                  Teraboulanger
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-peach font-semibold pl-0.5 pt-1.5">
                  Phuket
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ivory/70">
              French-inspired artisan baking, crafted with passion in Phuket.
              Handmade pastries, slow-fermented breads, and the unmistakable
              warmth of a true maison boulangère.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={PLACEHOLDERS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Teraboulanger Phuket on Instagram (opens in a new tab)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-200 hover:bg-orange hover:border-orange hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
              >
                <InstagramIcon />
              </a>
              <a
                href={PLACEHOLDERS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Teraboulanger Phuket on Facebook (opens in a new tab)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-200 hover:bg-orange hover:border-orange hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
              >
                <FacebookIcon />
              </a>
              <a
                href={PLACEHOLDERS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Teraboulanger Phuket on TikTok (opens in a new tab)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-200 hover:bg-orange hover:border-orange hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
              >
                <TiktokIcon />
              </a>
            </div>
          </section>

          <section
            aria-labelledby="footer-explore-heading"
            className="col-span-1 lg:col-span-2"
          >
            <h3
              id="footer-explore-heading"
              className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-peach font-semibold mb-5 sm:mb-6"
            >
              Explore
            </h3>
            <ul className="flex flex-col gap-3.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[14px] text-ivory/75 transition-colors duration-200 hover:text-peach focus:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-brown rounded-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="w-0 h-px bg-peach transition-all duration-300 ease-out group-hover:w-5"
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="footer-menu-heading"
            className="col-span-1 lg:col-span-3"
          >
            <h3
              id="footer-menu-heading"
              className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-peach font-semibold mb-5 sm:mb-6"
            >
              Our Bakery
            </h3>
            <ul className="flex flex-col gap-3.5">
              {MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[14px] text-ivory/75 transition-colors duration-200 hover:text-peach focus:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-brown rounded-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="w-0 h-px bg-peach transition-all duration-300 ease-out group-hover:w-5"
                    />
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="footer-visit-heading"
            className="col-span-2 md:col-span-4 lg:col-span-3"
          >
            <h3
              id="footer-visit-heading"
              className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-peach font-semibold mb-5 sm:mb-6"
            >
              Visit Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li>
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-peach"
                  >
                    <MapPinIcon />
                  </span>
                  <address className="not-italic text-[14px] leading-relaxed text-ivory/75">
                    {PLACEHOLDERS.address}
                    <br />
                    <span className="text-ivory/55 text-[13px]">
                      Phuket, Thailand
                    </span>
                  </address>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-peach"
                  >
                    <ClockIcon />
                  </span>
                  <div className="text-[14px] leading-relaxed text-ivory/75">
                    <p className="font-medium text-ivory/85 mb-0.5">Hours</p>
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
                  className="group flex items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-brown rounded-sm"
                  aria-label={
                    PLACEHOLDERS.phone.startsWith("[")
                      ? "Phone number to be added"
                      : `Call Teraboulanger Phuket at ${PLACEHOLDERS.phone}`
                  }
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-peach transition-colors duration-200 group-hover:text-orange"
                  >
                    <PhoneIcon />
                  </span>
                  <span className="text-[14px] leading-relaxed text-ivory/75 transition-colors duration-200 group-hover:text-peach">
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
                  className="group flex items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-brown rounded-sm"
                  aria-label={
                    PLACEHOLDERS.email.startsWith("[")
                      ? "Email address to be added"
                      : `Email Teraboulanger Phuket at ${PLACEHOLDERS.email}`
                  }
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-peach transition-colors duration-200 group-hover:text-orange"
                  >
                    <MailIcon />
                  </span>
                  <span className="text-[14px] leading-relaxed text-ivory/75 transition-colors duration-200 group-hover:text-peach break-all">
                    {PLACEHOLDERS.email}
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </nav>

        <section
          aria-labelledby="footer-newsletter-heading"
          className="py-10 sm:py-12 border-b border-ivory/10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
            <div className="max-w-lg">
              <h3
                id="footer-newsletter-heading"
                className="font-serif text-xl sm:text-2xl text-ivory font-semibold tracking-tight"
              >
                Stay in the loop.
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ivory/65">
                Discover new bakes, seasonal creations and news from
                Teraboulanger.
              </p>
            </div>
            <div className="flex shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-peach/40 bg-transparent px-6 py-3 text-[14px] font-semibold text-peach transition-all duration-200 hover:bg-peach hover:text-brown active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
              >
                Contact Us
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="footer-legal-heading"
          className="py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
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
                    className="text-[12px] sm:text-[13px] text-ivory/45 transition-colors duration-200 hover:text-ivory/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-brown rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="order-1 sm:order-2 text-[12px] sm:text-[13px] text-ivory/45 tracking-wide whitespace-nowrap">
            &copy; {CURRENT_YEAR} Teraboulanger. All rights reserved.
          </p>
        </section>

        <div aria-hidden="true" className="pb-8 sm:pb-10 flex justify-center">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ivory/25 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            Maison · Boulangerie · Phuket
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
          </span>
        </div>
      </div>
    </footer>
  );
}
