"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-gold/15 shadow-[0_1px_20px_-12px_rgba(42,33,24,0.15)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            aria-label="Teraboulanger Phuket — Home"
          >
            <span
              aria-hidden="true"
              className="text-gold text-xl transition-transform duration-300 group-hover:rotate-12"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12H3Z"
                  fill="currentColor"
                />
                <path
                  d="M3.5 14H20.5C20.5 18.1421 17.1421 21 13 21H11C6.85786 21 3.5 18.1421 3.5 14Z"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl sm:text-2xl font-semibold text-espresso tracking-tight">
                Teraboulanger
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold font-medium pl-0.5">
                Phuket
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-espresso/85 hover:text-espresso transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded group"
                >
                  {link.label}
                  <span className="absolute left-1/2 -bottom-0.5 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-300 ease-out group-hover:w-6" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(42,33,24,0.06)] transition-all duration-250 ease-out hover:bg-gold-dark hover:shadow-[0_4px_16px_-4px_rgba(184,144,106,0.55)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              Visit Us
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full text-espresso hover:bg-espresso/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>
            <div className="relative w-5 h-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transform transition-all duration-300 ease-out ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-0.5 w-5 rounded-full bg-current transform transition-all duration-300 ease-out ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-espresso/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-x-0 top-0 bg-cream shadow-[0_20px_60px_-20px_rgba(42,33,24,0.25)] transition-all duration-350 ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            <div className="pt-20 pb-8 px-5 sm:px-8 border-b border-gold/10">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center justify-between py-4 border-b border-espresso/5 last:border-b-0 transition-all duration-300 ${
                        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`}
                      style={{ transitionDelay: isMenuOpen ? `${index * 50 + 50}ms` : "0ms" }}
                    >
                      <span className="text-lg font-medium text-espresso group-hover:text-gold-dark transition-colors duration-200">
                        {link.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-gold/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M9 6L15 12L9 18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className={`mt-8 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: isMenuOpen ? "350ms" : "0ms" }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-250 ease-out hover:bg-gold-dark hover:shadow-[0_6px_20px_-6px_rgba(184,144,106,0.55)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  Visit Us
                </Link>
                <p className="mt-4 text-center text-xs text-espresso/50 tracking-wide">
                  Artisan bakery — Phuket, Thailand
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
