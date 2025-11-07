/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        accent: "#f97316",
        dark: "#0f172a",
        light: "#f1f5f9",
      },
    },
  },
  plugins: [],
}
