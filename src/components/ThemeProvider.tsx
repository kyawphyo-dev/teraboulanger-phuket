"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  THEME_STORAGE_KEY,
  DEFAULT_MODE,
  resolveTheme as resolve,
  applyTheme,
  type ThemeMode,
  type ResolvedTheme,
} from "../lib/theme";

type SetMode = (next: ThemeMode | ((prev: ThemeMode) => ThemeMode)) => void;

interface ThemeContextValue {
  mode: ThemeMode;
  resolved: ResolvedTheme;
  setMode: SetMode;
  cycle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const MODE_CYCLE: ThemeMode[] = ["dark", "light", "system"];

// Runs before hydration and before first paint to apply the persisted theme and
// avoid a flash of the wrong theme.
//
// Rendered from a Client Component inside the root layout's <head>: on the
// server the `type` is a classic JS MIME type, so the browser executes it
// synchronously while parsing the HTML (before anything is painted). On the
// client React renders it as an inert `text/plain` data block instead, which is
// what keeps React from logging "Encountered a script tag while rendering React
// component" — React never executes scripts it creates on the client anyway.
// `suppressHydrationWarning` covers the resulting `type` attribute mismatch.
const THEME_INIT_SCRIPT = `(function(){
  try {
    var KEY = 'teraboulanger.theme';
    var DEFAULT = 'dark';
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}
    var mode = stored && (stored === 'light' || stored === 'dark' || stored === 'system') ? stored : DEFAULT;
    var resolved = mode;
    if (mode === 'system') {
      resolved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var root = document.documentElement;
    if (resolved === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    root.style.colorScheme = resolved;
  } catch (e) {}
})();`;

export function ThemeInitScript() {
  return (
    <script
      id="teraboulanger-theme-init"
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
    />
  );
}

function readStoredMode(fallback: ThemeMode): ThemeMode {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return fallback;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export function ThemeProvider({
  children,
  defaultMode = DEFAULT_MODE,
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() =>
    readStoredMode(defaultMode),
  );
  const [resolved, setResolved] = useState<ResolvedTheme>(() =>
    resolve(readStoredMode(defaultMode)),
  );

  useEffect(() => {
    applyTheme(resolve(mode));
  }, [mode]);

  useEffect(() => {
    if (mode !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next = resolve("system");
      applyTheme(next);
      setResolved(next);
    };
    const handler = onChange as EventListener;
    media.addEventListener?.("change", handler);
    return () => media.removeEventListener?.("change", handler);
  }, [mode]);

  const setMode: SetMode = useCallback((input) => {
    setModeState((prev) => {
      const next =
        typeof input === "function"
          ? (input as (p: ThemeMode) => ThemeMode)(prev)
          : input;
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      const nextResolved = resolve(next);
      applyTheme(nextResolved);
      setResolved(nextResolved);
      return next;
    });
  }, []);

  const cycle = useCallback(() => {
    setMode((prev) => {
      const idx = MODE_CYCLE.indexOf(prev);
      return MODE_CYCLE[(idx + 1) % MODE_CYCLE.length];
    });
  }, [setMode]);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, resolved, setMode, cycle }),
    [mode, resolved, setMode, cycle],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return ctx;
}
