"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Skeleton } from "../ui";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="w-[20px] h-[20px] rounded-full" />;
  }

  return (
    <button
      className="relative text-text hover:opacity-75 active:translate-y-[2px]  h-5 w-5 rounded-full  block focus:outline-none"
      onClick={() => setTheme("dark" === resolvedTheme ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Moon color="currentColor" size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
};
