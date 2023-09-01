/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-ed": "#AE0900",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
