"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-all ${
          theme === "light"
            ? "bg-white text-black shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
        title="Modo Claro"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-all ${
          theme === "dark"
            ? "bg-neutral-800 text-white shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
        title="Modo Oscuro"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-all ${
          theme === "system"
            ? "bg-neutral-800 text-white shadow-sm"
            : "text-neutral-400 hover:text-white"
        }`}
        title="Sistema"
      >
        <Laptop size={16} />
      </button>
    </div>
  );
}
