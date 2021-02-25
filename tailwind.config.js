const colors = require('tailwindcss/colors')
module.exports = {
  important: true,
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        'amber': colors.amber,
        'orange': colors.orange,
        'blue-gray': colors.blueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
