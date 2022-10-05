/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
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
        h3_xl: "52px",
        p_xl: "42px",
        background_xl: "239px",
        h1_md: "57px",
        h2_md: "39px",
        h3_md: "27px",
        p_md: "23px",
        background_md: "82px",
        h1_sm: "36px",
        h2_sm: "19px",
        h3_sm: "16px",
        p_sm: "16px",
        background_sm: "39px",
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
      spacing: {
        "1/8": "12.5%",
      },
    },

    colors: {
      primary: "#395BD9",
      primary_tone: "#16308C",
      primary_tone_2: "#0E1E4F",
      primary_tint: "#5C7FFF",
      primary_tint_10: "#EFF3FF",
      secondary: "#FFCB42",
      tertiary: "#FEAE35",
      secondary_tone: "#D6B563",
      black: "#272B3A",
      black_75: "#333544",
      black_50: "#616370",
      black_25: "#9191A7",
      black_10: "#B4B4CE",
      black_5: "#CDCDE3",
      white: "#ffffff",
      transparent: "transparent",
    },
    keyframes: {
      buttonHover: {
        "0%": {
          transform: "scaleX(1.0) scaleY(1.0)",
          opacity: "90%",
        },
        "100%": {
          transform: "scaleX(1.2) scaleY(1.6)",
          opacity: 0,
        },
      },
    },
    animation: {
      buttonHover: "buttonHover .7s linear .8s",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
