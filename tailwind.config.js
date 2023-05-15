/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile':{'min':'0px', 'max':'500px'},
    },
    fontFamily:{
      'body':["Sacramento"]
    }
  },
  plugins: [],
}