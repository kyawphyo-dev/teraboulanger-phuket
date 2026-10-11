"use client";

import { useTheme } from "./ThemeProvider";

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 14.5C18.92 16.57 16.76 18 14.25 18C10.25 18 7 14.75 7 10.75C7 8.24 8.43 6.08 10.5 5C8.37 5.58 6.8 7.42 6.8 9.62C6.8 12.87 9.43 15.5 12.68 15.5C14.74 15.5 16.52 14.46 17.5 12.88C17.82 13.49 18 14.18 18 14.9C18 15.03 18 15.16 17.99 15.29C18 15.03 18 14.77 20 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="4"
        width="19"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 21H16M12 17V21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { mode, cycle } = useTheme();

  const label =
    mode === "dark"
      ? "Appearance: Dark. Click to switch to Light."
      : mode === "light"
        ? "Appearance: Light. Click to match System."
        : "Appearance: System. Click to switch to Dark.";

  const Icon = mode === "dark" ? MoonIcon : mode === "light" ? SunIcon : MonitorIcon;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={label}
      title={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text/80 transition-all duration-200 hover:text-brand hover:border-border-strong hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${className}`}
    >
      <span className="sr-only">{label}</span>
      <Icon />
    </button>
  );
}
