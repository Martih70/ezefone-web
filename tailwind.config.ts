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
        dark_gray: "#1f2937",
        dark_gray_light: "#374151",
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
        card: "0 4px 6px rgba(15, 23, 42, 0.07), 0 2px 4px rgba(15, 23, 42, 0.05)",
        "card-hover": "0 10px 15px rgba(15, 23, 42, 0.12), 0 4px 6px rgba(15, 23, 42, 0.08)",
        button: "0 2px 4px rgba(15, 23, 42, 0.08)",
        section: "0 1px 3px rgba(15, 23, 42, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
