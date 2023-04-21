/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cdark: {
          light: "#05050500",
          normal: "#7864f030",
          100: "#1A2140",
          150: "#515473",
          500: "#09081A",
        },

        cpink: {
          light: "#cc069599",
          100: "#FE288F",
        },
      },
    },
  },
  plugins: [],
};
