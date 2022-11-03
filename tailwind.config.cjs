/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EAECF0",
        light: "#667085",
        medium:"#344054",
        dark:"#475467"
      }
    },
  },
  plugins: [],
}
