/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            darkGray: "#1E201E",
            main: "#697565",
            lightGray: "rgb(26, 23, 23)",
            lightBg: "#FFF8F3",
            textColorLight: "#48CFCB",
            textColorDark: "#ECDFCC",
         },
      },
   },
   plugins: [],
};
