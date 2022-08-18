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
        background: "159px",
        h1_xl: "134px",
        h2_xl: "75px",
        h3_xl: "57px",
        p_xl: "42px",
        background_xl: "239px",
        h1_md: "57px",
        h2_md: "39px",
        h3_md: "27px",
        p_md: "23px",
        background_md: "82px",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      width: {
        220: "55rem",
        240: "60rem",
      },
      maxWidth: {
        "3xl": "1800px",
      },
      boxShadow: {
        smooth:
          "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 20px rgba(0, 0, 0, 0.0196802);",
      },
      dropShadow: {
        projectPreview: "0 25px 35px rgb(0 0 0 / 0.35)",
      },
      screens: {
        "3xl": "2400px",
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
      white: "#ffffff",
    },
  },
  plugins: [],
};
