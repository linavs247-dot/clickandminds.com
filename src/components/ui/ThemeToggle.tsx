import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function setThemeCookie(theme: Theme) {
  document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
}

export default function ThemeToggle() {
  // Must default to a value that's identical on the server (no `document`
  // there) and on the client's first render, or React throws a hydration
  // mismatch the instant a returning visitor's actual theme differs from
  // this default (confirmed: reading document.documentElement here directly
  // in the initializer did exactly that for light-mode visitors). "dark"
  // matches the site's own default, so only visitors who've explicitly
  // chosen light mode see the brief correction below, right after mount.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    setThemeCookie(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      onClick={toggle}
      className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border transition-colors duration-300
        border-purple-primary/30 bg-white-soft
        dark:border-neon-purple/40 dark:bg-navy-dark"
    >
      <span
        className={`absolute left-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? "translate-x-6 bg-lime" : "translate-x-0 bg-purple-primary"
        }`}
      >
        <span aria-hidden="true">{isDark ? "🌙" : "☀"}</span>
      </span>
    </button>
  );
}
