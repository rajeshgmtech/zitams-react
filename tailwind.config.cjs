/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide", "cursive"],
    poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  theme: {
  extend: {
    keyframes: {
      scaleIn: {
        "0%": { transform: "scale(0.95)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
    },
    animation: {
      scaleIn: "scaleIn 0.2s ease-out",
    },
  },
},
  plugins: [],
};
