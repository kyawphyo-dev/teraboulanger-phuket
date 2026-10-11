"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const MASTER_LOGO_BLACK = "/Brand_Identity/Logo/master_logo_black.png";
const MASTER_LOGO_CREAM = "/Brand_Identity/Logo/master_logo_cream.png";
const MASTER_LOGO_ORANGE = "/Brand_Identity/Logo/master_logo_orange.png";

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
          ? "bg-bg/45 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_28px_-18px_rgba(0,0,0,0.5)]"
          : "bg-bg border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">
          <Link
            href="/"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm"
            aria-label="Teraboulanger Phuket — Home"
          >
            <span className="relative inline-flex items-center h-8 sm:h-10 w-[168px] sm:w-[200px] shrink-0 transition-transform duration-300 origin-left group-hover:-rotate-[1.5deg] group-hover:scale-[1.01]">
              <Image
                src={MASTER_LOGO_ORANGE}
                alt=""
                aria-hidden="true"
                fill
                sizes="200px"
                priority
                className="object-contain object-left dark:hidden"
              />
              <Image
                src={MASTER_LOGO_ORANGE}
                alt=""
                aria-hidden="true"
                fill
                sizes="200px"
                priority
                className="object-contain object-left hidden dark:block"
              />
              <span className="sr-only">
                Teraboulanger — Maison Boulangère, Phuket
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-[14px] font-medium text-text/85 hover:text-brand transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded group"
                >
                  {link.label}
                  <span className="absolute left-1/2 -bottom-0.5 h-[1.5px] w-0 -translate-x-1/2 bg-brand transition-all duration-300 ease-out group-hover:w-7" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-[14px] font-semibold text-brand-contrast transition-colors duration-200 hover:bg-brand-hover active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Visit Us
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle className="h-10 w-10" />
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full text-text hover:bg-surface-alt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
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
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className={`absolute inset-x-0 top-0 bg-bg border-b border-border shadow-[0_20px_60px_-16px_rgba(0,0,0,0.55)] transition-all duration-350 ease-out ${
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
                      className={`group flex items-center justify-between py-4 border-b border-border last:border-b-0 transition-all duration-300 ${
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
                      <span className="text-[17px] font-medium text-text group-hover:text-brand transition-colors duration-200">
                        {link.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-brand/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand"
                      >
                        <ChevronRight />
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
                  className="block w-full rounded-full bg-brand px-6 py-3.5 text-[16px] font-semibold text-center text-brand-contrast transition-colors duration-200 hover:bg-brand-hover active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Visit Us
                </Link>
                <p className="mt-4 text-center text-xs text-muted tracking-wide">
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
