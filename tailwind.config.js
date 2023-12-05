/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#1A1A1B",
        main: "#FFDD95",
        lightGray: "#363636",
        lightBg: "#f1f1f1",
      },
    },
  },
  plugins: [],
};
