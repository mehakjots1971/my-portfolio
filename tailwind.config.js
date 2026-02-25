/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        "portfolio-dark": "#050505", // Deeper black background
        "portfolio-dark-card": "#111111", // Slightly lighter for cards
        "portfolio-light": "#fafafa", // Off-White background
        "portfolio-light-card": "#ffffff", // Pure white for cards
        "portfolio-accent": "#8b5cf6", // Lavender/purple accent
        "portfolio-accent-hover": "#7c3aed",
        "portfolio-secondary": "#ec4899", // Pink secondary for gradients
        "portfolio-tertiary": "#06b6d4", // Cyan tertiary for gradients
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-accent": "0 0 20px rgba(139, 92, 246, 0.4)",
        "glow-secondary": "0 0 20px rgba(236, 72, 153, 0.4)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
      },
      animation: {
        blob: "blob 7s infinite",
        "gradient-x": "gradient-x 5s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
