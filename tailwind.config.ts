import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       screens: {
        sm: "5px",
        md: "6px",
        lg: "8px",
        xl: "16px",
        "2xl": "24px",
      },
      colors: {
        primary: '#2962FF',
        'btn-hover': '#293547',
        'dark-btn-hover': '#F4F4F5',
        'btn-hoverBlue': '#3B82F6',
        'light-bg': '#F9F9FB',
        'dark-bg': '#1F2937',
        'dark-text': '#FFFFFF',
        'light-text': '#27272A',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
