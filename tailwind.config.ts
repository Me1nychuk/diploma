import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "max-xxs": {
        max: "374.7px",
      },
      "min-xxs": {
        min: "375px",
      },
      "max-xs": {
        max: "479.7px",
      },
      "min-xs": {
        min: "480px",
      },
      "max-sm": {
        max: "767.7px",
      },
      "min-sm": {
        min: "768px",
      },
      "max-md": {
        max: "991.7px",
      },
      "min-md": {
        min: "992px",
      },
      "max-lg": {
        max: "1199.7px",
      },
      "min-lg": {
        min: "1200px",
      },
      "max-xl": {
        max: "1399.7px",
      },
      "min-xl": {
        min: "1400px",
      },
    },
    extend: {
      colors: {
        "main-background": "var(--main-background)",
        background: "var(--background)",
        "background-transparent": "var(--background-transparent)",
        "background-transparent-2": "var(--background-transparent-2)",
        text: "var(--text)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        shadow: "var(--shadow)",
        special: "var(--special)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class", "class"],
};
export default config;
