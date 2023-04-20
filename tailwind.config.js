/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cdark: {
          100: "#1A2140",
          150: "#515473",
        },

        cpink: {
          100: "#FE288F",
        },
      },
    },
  },
  plugins: [],
};