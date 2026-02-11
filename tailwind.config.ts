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
        dark_gray: "#475569",
        dark_gray_light: "#64748b",
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
      boxShadow: {
        card: "0 10px 25px rgba(15, 23, 42, 0.15)",
        "card-hover": "0 20px 40px rgba(15, 23, 42, 0.25)",
        button: "0 6px 20px rgba(5, 150, 105, 0.35)",
        section: "0 2px 8px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
