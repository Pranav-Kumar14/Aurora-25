<<<<<<< Updated upstream
<<<<<<< Updated upstream
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
=======
=======
>>>>>>> Stashed changes
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', 
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  ],
  theme: {
    extend: {},
  },
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  plugins: [],
}
=======
  darkMode: "class",
  plugins: [nextui()],
};
>>>>>>> Stashed changes
=======
  darkMode: "class",
  plugins: [nextui()],
};
>>>>>>> Stashed changes
