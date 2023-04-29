/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "move-top": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(-100%, 0)",
          },
        },
        "move-bottom": {
          "0%": {
            transform: "translate(100%, 0)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        "move-top": "move-top 20s normal linear infinite",
        "move-bottom": "move-bottom 20s linear infinite",
      },
      screens: {
        tablet: "876px",
        xs: "475px",
      },
      colors: {
        cdark: {
          light: "#05050500",
          normal: "#7864f030",
          100: "#1A2140",
          150: "#515473",
          500: "#09081A",
        },

        cpink: {
          dark: "#cc069599",
          100: "#FE288F",
        },
      },
    },
  },
  plugins: [],
};
