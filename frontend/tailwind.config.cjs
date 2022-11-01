/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-p": "#FB7D95",
        "purple-p": "#3A306C",
        "purple-s": "#51497C"
      }
    }
  },
  plugins: [],
}
