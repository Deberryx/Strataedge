import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3EFE5",
        "paper-light": "#FBF9F3",
        ink: "#18231E",
        forest: "#315B49",
        copper: "#B45F3B",
        line: "#CFC8B9",
        muted: "#666B64",
      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
