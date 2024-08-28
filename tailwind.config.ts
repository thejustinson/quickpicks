import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          background: "#2E3035",
          accent: "#663398"
        },
        secondary:{
          background: "#2B2D31"
        }
      }
    },
  },
  plugins: [],
};
export default config;
