"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Switch Theme"
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted shadow-md transition-colors cursor-pointer outline-none border border-border"
    >
      <span
        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 ease-in-out ${
          isDark ? "translate-x-6 rotate-180" : ""
        }`}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  );
}
