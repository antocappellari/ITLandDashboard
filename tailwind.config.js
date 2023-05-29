/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#1d2d44',
        secondaryColor : '#F0EBD8'

      }
    },
  },
  plugins: [],
}

