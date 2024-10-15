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
    return <p className="text-red-500 bg-primary">here must be some btn</p>;
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        className="bg-primary color-secondary "
        onClick={() => setTheme("light")}
      >
        to light
      </button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <button className=" " onClick={() => setTheme("dark")}>
        to dark
      </button>
    );
  }
};
