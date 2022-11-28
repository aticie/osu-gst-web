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
        "inter": "inter",
        "gotham": "gotham"
      },
      keyframes: {
        "horizontal-loop": {
          "from": {
            "background-position": "0% 0%"
          },
          "to": {
            "background-position": "100% 0%"
          }
        }
      },
      animation: {
        "horizontal-loop": "horizontal-loop 80s linear infinite"
      },
      aspectRatio: {
        "banner": "4/3"
      },
      backgroundSize: {
        "normal": "100%",
        "zoom": "110%"
      }
    }
  },
  plugins: [],
}
