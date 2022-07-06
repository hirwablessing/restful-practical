/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#F2F8F6",
          500: "#E7F2EE",
          600: "#0C7C59"
        }
      }
    },
  },
  plugins: [],
}
