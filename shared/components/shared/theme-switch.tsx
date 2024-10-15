"use client";

import { useTheme } from "next-themes";
import React from "react";
// necessary - change this component

export const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <p className="text-red-500 bg-BACKGROUND">here must be some btn</p>;
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        className="bg-BACKGROUND color-TEXT"
        onClick={() => setTheme("light")}
      >
        to light
      </button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <button
        className="bg-TEXT color-BACKGROUND"
        onClick={() => setTheme("dark")}
      >
        to dark
      </button>
    );
  }
};
