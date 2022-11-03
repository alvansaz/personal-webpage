/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue, js}"],
  theme: {
    colors: {
      'lighter': "#E7F6F2",
      'light': "#A5C9CA",
      'dark': "#395B64",
      'darker': "#2C3333",
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
