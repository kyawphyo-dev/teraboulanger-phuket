import { THEME_STORAGE_KEY, DEFAULT_MODE, resolveTheme, applyTheme } from "../lib/theme";

const scriptSrc = `(function(){
  try {
    var KEY = ${JSON.stringify(THEME_STORAGE_KEY)};
    var DEFAULT = ${JSON.stringify(DEFAULT_MODE)};
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

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: scriptSrc }}
      id="teraboulanger-theme-init"
      data-theme-init="true"
    />
  );
}

export { THEME_STORAGE_KEY, DEFAULT_MODE, resolveTheme, applyTheme };
