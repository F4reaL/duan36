/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container:{
      padding:{
        DEFAULT:'1rem',
        xl: '80px',
        '2xl': '174px',
      }
    },
    extend: {
      fontFamily: {
        "SFU-Display": ["SFU-Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
