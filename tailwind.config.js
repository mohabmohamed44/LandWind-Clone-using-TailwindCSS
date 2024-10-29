// First, update your Tailwind config
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/css/styles.css"],
  darkMode: 'class', // Add this line
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      colors: {
        limegreen: "#71b37a",
      }
    },
  },
  plugins: [require("daisyui")],
}