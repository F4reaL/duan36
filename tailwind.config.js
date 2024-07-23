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
        "Google-Sans": ["Google-Sans", "sans-serif"],
      },
      gridTemplateColumns:{
        'article-detail':'1fr 300px',
        'hoidap':'1fr 380px',
        'news-list-3':'1fr minmax(754px, 1fr) 1fr',
      },
      boxShadow:{
        'video-boxshadow':'-8px 8px #ed1b24',
        'video-boxshadow-mb':'1px 1px 2px 2px #ed1b24',
      },
      backgroundImage:{
        'custom-gradient': 'linear-gradient(to right, #7fd5f6 0%, #d9f6fe 50%, #7fd5f6 100%)',
        'black-to-blur': 'linear-gradient(to top,  rgb(0,0,0,0.8), rgb(0,0,0,0.1) )',
        'linear-footer': 'linear-gradient(to right, transparent, #0091c8, transparent )',

      }
    },
  },
  plugins: [],
};
