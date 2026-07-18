/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: "#142C4E",
          dark: "#0D1F37",
          light: "#2A4D78",
        },
        blush: {
          DEFAULT: "#F7EAF2",
          dark: "#EFD7E2",
        },
        gold: {
          DEFAULT: "#F1B7CC",
          light: "#F7D0DE",
          dark: "#D78FA9",
        },
        cream: "#FFFDF9",
        ink: "#142C4E",
        rose: "#F2C0D3",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "wine-gradient": "linear-gradient(135deg, #142C4E 0%, #0D1F37 100%)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(20, 44, 78, 0.22)",
        card: "0 10px 30px -12px rgba(20, 44, 78, 0.14)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};
