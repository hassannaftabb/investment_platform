/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "blue",
        "secondary-dark": "#000000",
        "secondary-bright": "#ffffff",
        "secondary-light": "#84818A",
        "secondary-extralight": "#9A9A9A",
        "black-2": "#202020",
        "secondary-extralight-2": "rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
