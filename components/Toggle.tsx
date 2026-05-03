"use client";

import { useTheme } from "next-themes";

export default function Toggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-md"
    >
      {resolvedTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}