import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tosca: "#54f4df",
        blue: "#2ab6fd",
        "gray-black": "#202f34",
        "gray-black-hover": "#172327",
        "option-text": "#BAC1CC"
      }
    },
  },
  plugins: [],
};
export default config;
