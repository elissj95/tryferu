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
        darkSea: "#2f4858",
        sea: "#33658a",
        lightSea: "#86bbd8",
        seaweed: "#60935d",
        buoy: "#f26419",
        black: "#08090a",
        black800: "#2b2b2c",
        black700: "#484949",
        black600: "#5a5b5c",
        black500: "#818282",
        black400: "#a3a3a4",
        black300: "#c8c9ca",
        black200: "#dcddde",
        black100: "#eaebec",
        black50: "#f5f6f7",
        white: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
