/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "spline-light": ["spline-sans-light"],
        "spline-bold": ["spline-sans-bold"],
        "spline-sans-regular": ["spline-sans-regular"],
        noto: ["noto-sans"],
        display: ["spline-sans-light", "noto-sans", "sans-serif"],
      },
      colors: {
        primary: "#d84141",
        "background-light": "#f8f6f6",
        "background-dark": "#201212",
        "surface-dark": "#2A2020",
        "card-dark": "#2A1F1F",
        light: "#EEEEEE",
        muted: "#B6A0A0",
      },
      animation: {
        "animate-pulse": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
