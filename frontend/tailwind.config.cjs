/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-p": "#E488C4",
        "pink-s": "#D1ADFF",
        "purple-p": "#3A306C",
        "purple-s": "#51497C",
        "dark": "#100E11"
      },
      fontFamily: {
        "inter": "inter"
      }
    }
  },
  plugins: [],
}
