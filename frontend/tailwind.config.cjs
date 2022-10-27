/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-accent": "#FF5FB9"
      },
      animation: {
        'spin-25': 'spin 30s ease-in infinite',
        'spin-50': 'spin 40s linear infinite',
        'spin-75': 'spin 50s ease-out infinite',
        'spin-100': 'spin 60s linear infinite',
      }
    }
  },
  plugins: [],
}
