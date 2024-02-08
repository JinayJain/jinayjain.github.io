/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi-Variable", "sans-serif"],
        comico: ["Comico-Regular", "sans-serif"],
      },
      colors: {
        offwhite: "#FBF7E1",
      },
    },
  },
  plugins: [],
};
