import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: "#fefdf8",
        text_primary: "#0f172a",
        text_secondary: "#64748b",
        border_light: "#e2e8f0",
        phone: "#059669",
        messages: "#0284c7",
        contacts: "#b45309",
        whatsapp: "#0d9488",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
