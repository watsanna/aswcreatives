/** @type {import('tailwindcss').Config} 
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Make sure this matches your file paths
  theme: {
    extend: {
      fontFamily: {
        great: ['Great Vibes', 'cursive'],
      },
      colors: {
        customOrange: '#d9622b',
      },
    },
  },
  plugins: [],
};
