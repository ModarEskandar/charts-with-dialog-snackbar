/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        info: "#48ddff",
        success: "#53ff55",
        error: "#ff3535",
        warning: "#ffb62f",
      },
      fontFamily: {
        kufi: ["Noto Kufi Arabic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
