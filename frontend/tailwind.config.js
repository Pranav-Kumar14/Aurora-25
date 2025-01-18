const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ['Pixelify Sans', 'sans-serif'],
        'press-start': ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
