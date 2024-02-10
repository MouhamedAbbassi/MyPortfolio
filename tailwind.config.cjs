/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#808080",
        tertiary: "#151030",
        green:"#228b22",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://kiddy.edu.vn/wp-content/uploads/2023/05/Background-den-%E2%80%93-Background-tram-buon-sang-trong.jpg')",
      },
    },
  },
  plugins: [],
};
