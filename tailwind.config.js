/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      xs: "480px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gradientColorStops: (theme) => ({
        "black-to-gray": [theme("colors.black"), theme("colors.gray.900")],
      }),
      linearGradientDirections: {
        0: "0deg",
        45: "45deg",
        90: "90deg",
        135: "135deg",
        180: "180deg",
        225: "225deg",
        270: "270deg",
        315: "315deg",
      },
      fontFamily: {
        Ringbearer: ["Ringbearer", "sans-serif"],
        UncialAntiqua: ["UncialAntiqua", "Cinzel", "sans-serif"],
      },
      colors: {
        "glhl-dark-gray": "#2e2f2f",
        "glhl-light-gray": "#D0D0D0",

        "glhl-red-100": "#780000",
        "glhl-red-200": "#660000",
        "glhl-red-300": "#520000",
        "glhl-red-400": "#3d0000",
        "glhl-red-500": "#290000",

        "glhl-gold-100": "#F0E867",
        "glhl-gold-200": "#471B0D",
      },
    },
  },
  plugins: [],
};
