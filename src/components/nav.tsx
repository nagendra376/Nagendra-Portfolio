import { Link, useLocation } from "react-router-dom";
import { Shell } from "@/components/Layout";
import { site } from "@/config/site";
import { useTheme } from "./theme-provider";
import { Sun, Moon, Search } from "lucide-react";

export function Nav({ onOpenPalette }: { onOpenPalette?: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md">
      <Shell className="flex items-center justify-between px-6 py-3 sm:px-8">
        <Link to="/" className="font-serif text-xl tracking-wide text-[var(--fg)] hover:opacity-80 transition-opacity">
          {site.firstName}
        </Link>
        <nav className="flex items-center gap-5 text-[13px] text-[var(--muted)]">
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`group relative transition-colors hover:text-[var(--fg)] ${
                  isActive ? "text-[var(--fg)] font-semibold" : ""
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100 ${
                    isActive ? "scale-x-100 origin-left" : ""
                  }`}
                />
              </Link>
            );
          })}

          {onOpenPalette && (
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Search Command Palette"
              className="grid size-7 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:text-[var(--fg)] cursor-pointer"
            >
              <Search className="size-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid size-7 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:rotate-45 hover:text-[var(--fg)] cursor-pointer"
          >
            {dark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
          </button>
        </nav>
      </Shell>
    </header>
  );
}
