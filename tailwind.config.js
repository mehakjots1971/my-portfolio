/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        "portfolio-dark": "#0a0a0a", // Deep black background
        "portfolio-dark-card": "#1a1a1a", // Slightly lighter for cards
        "portfolio-light": "#ffffff", // White background
        "portfolio-light-card": "#f3f4f6", // Light gray for cards
        "portfolio-accent": "#8b5cf6", // Lavender/purple accent
        "portfolio-accent-hover": "#7c3aed",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-accent": "0 0 20px rgba(139, 92, 246, 0.4)",
      },
    },
  },
  plugins: [],
};
