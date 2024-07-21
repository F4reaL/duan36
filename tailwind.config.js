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
      gridTemplateColumns:{
        'article-detail':'1fr 300px',
        'news-list-3':'1fr minmax(754px, 1fr) 1fr',
      },
      boxShadow:{
        'video-boxshadow':'-8px 8px #ed1b24',
      }
    },
  },
  plugins: [],
};
