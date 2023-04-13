/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["index.html" ],
  theme: {
    extend: {
      spacing:{
        "25px":"35px",
      },

      fontFamily:{
        roboto_condensed: ['Roboto Condensed', 'Arial', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

