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
          ? "bg-brown/92 backdrop-blur-md border-b border-ivory/10 shadow-[0_1px_24px_-12px_rgba(0,0,0,0.55)]"
          : "bg-brown border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown rounded-sm"
            aria-label="Teraboulanger Phuket — Home"
          >
            <span
              aria-hidden="true"
              className="text-orange transition-transform duration-300 group-hover:-rotate-6"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl sm:text-[22px] font-semibold text-ivory tracking-tight">
                Teraboulanger
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-peach font-semibold pl-0.5 pt-1">
                Phuket
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-[14px] font-medium text-ivory/85 hover:text-peach transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-brown rounded group"
                >
                  {link.label}
                  <span className="absolute left-1/2 -bottom-0.5 h-[1.5px] w-0 -translate-x-1/2 bg-peach transition-all duration-300 ease-out group-hover:w-7" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-2.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-orange-dark active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
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
            className="lg:hidden relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full text-ivory hover:bg-orange/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
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
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-x-0 top-0 bg-brown shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] border-b border-ivory/10 transition-all duration-350 ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            <div className="pt-20 pb-8 px-5 sm:px-8">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center justify-between py-4 border-b border-ivory/10 last:border-b-0 transition-all duration-300 ${
                        isMenuOpen
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${index * 50 + 50}ms`
                          : "0ms",
                      }}
                    >
                      <span className="text-[17px] font-medium text-ivory group-hover:text-peach transition-colors duration-200">
                        {link.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-peach/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-peach"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 6L15 12L9 18"
                            stroke="currentColor"
                            strokeWidth="1.8"
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
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: isMenuOpen ? "350ms" : "0ms" }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full rounded-full bg-orange px-6 py-3.5 text-[16px] font-semibold text-center text-white transition-colors duration-200 hover:bg-orange-dark active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
                >
                  Visit Us
                </Link>
                <p className="mt-4 text-center text-xs text-ivory/40 tracking-wide">
                  Maison · Boulangerie · Phuket
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
