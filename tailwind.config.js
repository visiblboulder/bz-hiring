const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { top: { 1: '200px' } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}