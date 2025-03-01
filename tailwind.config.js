/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Må være "class" for å støtte lokal lagring av tema
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Sikrer at Tailwind brukes på alle relevante filer
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FAFAFA",
          dark: "#000000",
        },
        text: {
          light: "#1A1A1A",
          dark: "#EAEAEA",
        },
        card: {
          light: "#FFFFFF",
          dark: "#1C1C1E",
        },
        border: {
          light: "#DDDDDD",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [],
};
