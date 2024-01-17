import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      pret: ["Pretendard Variable", "Pretendard"],
      nexon: ["var(--font-nexon)"],
      sans: ["var(--font-notosanskr)"],
      spoqa: ["var(--font-spoqa)"],
      waterfall: ["var(--font-waterfall)"],
    },
  },
  plugins: [],
};
export default config;
