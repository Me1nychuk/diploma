import type { Config } from "tailwindcss";

import { colors } from "./shared/constants/color.constants";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
export default config;
