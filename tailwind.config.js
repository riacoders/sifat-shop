/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      colors:{
        customPurple: '#5c5dc7',
         fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
      }
    },
  },
  plugins: [],
}

