/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landingBg: "url('./resources/img/test.png')",
      },
    },
  },
  plugins: [],
};
