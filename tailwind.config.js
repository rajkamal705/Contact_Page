/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "form-background": "url(./Icons/form-bg-image.svg)",
        "cross-icon": "url(./Icons/cross_icon.svg)",
      },
    },

    fontFamily: {
      bangers: ["Bangers", "system-ui"],
      geologica: ["Geologica", "sans-serif"],
      architectsDaughter: ["Architects Daughter", "cursive"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
