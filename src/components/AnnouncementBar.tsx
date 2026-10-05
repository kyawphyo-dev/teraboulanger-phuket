"use client";

import { useState, useEffect } from "react";

const ANNOUNCEMENTS = [
  {
    id: 0,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z"
          fill="currentColor"
        />
        <path
          d="M19 15L20 17.5L22.5 18.5L20 19.5L19 22L18 19.5L15.5 18.5L18 17.5L19 15Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
    ),
    text: "Fresh croissants baked daily at 6:30 AM — limited daily batches",
    cta: { label: "See today's menu", href: "/menu" },
  },
  {
    id: 1,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 12V20H4V12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 7H22V12H2V7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 7H9C9 4.79 10.79 3 13 3V5.5C13 6.33 12.33 7 12 7Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    ),
    text: "Free house-made madeleine with every coffee order this week",
    cta: { label: "Visit us", href: "/contact" },
  },
  {
    id: 2,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2C8 6 6 9.5 6 13C6 16.3 8.7 19 12 19C15.3 19 18 16.3 18 13C18 9.5 16 6 12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 19C12 20.7 10.7 22 9 22"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M9.5 12L11 13.5L14.5 10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Now delivering artisan breads across Phuket — island-wide",
    cta: { label: "Order now", href: "/menu" },
  },
  {
    id: 3,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.5 13.5C3.5 8.8 7.36 5 12 5C16.64 5 20.5 8.8 20.5 13.5C20.5 15.7 19.7 17.7 18.3 19.2C17.5 15.8 15 13.5 12 13.5C9 13.5 6.5 15.8 5.7 19.2C4.3 17.7 3.5 15.7 3.5 13.5Z"
          fill="currentColor"
          opacity="0.35"
        />
        <path
          d="M5.7 19.2C6.5 15.8 9 13.5 12 13.5C15 13.5 17.5 15.8 18.3 19.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 5C12 3.34 10.66 2 9 2C7.34 2 6 3.34 6 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    text: "Traditional baguette — 72hr cold ferment, imported French T65 flour",
    cta: { label: "Our story", href: "/our-story" },
  },
];

const ROTATE_MS = 4200;

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const total = ANNOUNCEMENTS.length;

  useEffect(() => {
    if (isPaused || isDismissed) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [isPaused, isDismissed, total]);

  if (isDismissed) return null;

  return (
    <div
      className="relative w-full bg-orange overflow-hidden"
      role="region"
      aria-label="Announcements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-orange to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-orange to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="relative flex h-10 sm:h-11 items-center justify-between gap-2">
          <div className="relative flex-1 overflow-hidden h-full flex items-center justify-center mr-1">
            <div
              aria-live="polite"
              aria-atomic="true"
              className="relative w-full h-full flex items-center justify-center"
            >
              {ANNOUNCEMENTS.map((a, i) => {
                const isActive = i === index;
                const isPrev = i === (index - 1 + total) % total;
                const isNext = i === (index + 1) % total;
                return (
                  <div
                    key={a.id}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 flex items-center justify-center px-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : isPrev
                          ? "opacity-0 -translate-y-full"
                          : isNext
                            ? "opacity-0 translate-y-full"
                            : "opacity-0 pointer-events-none translate-y-full"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2.5 sm:gap-3 min-w-0">
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-gold animate-[twinkle_2.6s_ease-in-out_infinite]"
                      >
                        {a.icon}
                      </span>
                      <p className="text-[12px] sm:text-[13px] leading-tight text-ivory/92 font-medium text-center whitespace-nowrap sm:whitespace-normal overflow-hidden text-ellipsis">
                        {a.text}
                        <a
                          href={a.cta.href}
                          className="ml-2.5 inline-flex items-center text-white font-semibold hover:text-peach-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-orange rounded-sm whitespace-nowrap"
                        >
                          {a.cta.label}
                          <span
                            aria-hidden="true"
                            className="ml-0.5 inline-block transition-transform duration-200 hover:translate-x-0.5"
                          >
                            →
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss announcements bar"
            className="relative z-20 shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full text-ivory/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.55;
            transform: scale(0.92);
          }
        }
      `}</style>
    </div>
  );
}
