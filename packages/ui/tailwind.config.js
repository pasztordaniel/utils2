const { colors } = require('@package/theme');
const theme = require('@package/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: { ...theme, colors },
  },
  plugins: [],
};
