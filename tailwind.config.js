/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {},

    fontSize: {
      xs: "0.75rem",
      base: "14px",
      lg: "18px",
      "1xl": "24px",
      "2xl": "48px",
    },
    colors: {
      black: "#544646",
      hr: "rgb(228 228 228)",
      itemBg: "rgb(245 245 245)",
      increase: "rgb(111 177 55)",
      reduce: "rgb(255 99 99)",
    },
    screens: {
      sm: "950px",
      lg: "1200px",
    },
  },
  plugins: [],
};
