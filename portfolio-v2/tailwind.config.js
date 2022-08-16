/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "67px",
        h2: "50px",
        h3: "38px",
        p: "28px",
        background: "291px",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: "#395BD9",
      primary_tone: "#16308C",
      primary_tint: "#5C7FFF",
      primary_tint_10: "#EFF3FF",
      secondary: "#FFCB42",
      tertiary: "#FEAE35",
      secondary_tone: "#D6B563",
      black: "#2A2D35",
      black_75: "#373841",
      black_50: "#5D5E66",
      black_25: "#9C9CA0",
      black_10: "#CFCFD1",
      black_5: "#E1E1E3",
    },
  },
  plugins: [],
};
