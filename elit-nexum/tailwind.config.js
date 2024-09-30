/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

    backgroundImage: {
      galaxy: "url('/src/assets/images/Fundo.jpg')",
    },
  },
  plugins: [],
};
