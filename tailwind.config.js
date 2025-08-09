/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode toggle
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a78bfa', // purple-400
          DEFAULT: '#7c3aed', // purple-600
          dark: '#5b21b6', // purple-800
        },
        secondary: {
          light: '#fbbf24', // yellow-400
          DEFAULT: '#f59e0b', // yellow-500
          dark: '#b45309', // yellow-700
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
