<<<<<<< Updated upstream
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
=======
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', 
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
>>>>>>> Stashed changes
  ],
  theme: {
    extend: {},
  },
<<<<<<< Updated upstream
  plugins: [],
}
=======
  darkMode: "class",
  plugins: [nextui()],
};
>>>>>>> Stashed changes
