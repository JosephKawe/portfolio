/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg' : 'url(@/assets/BG_main.jpg)',
        'neon-bg' : 'url(@/assets/neon-bg.jpg)',
      },
      translate: {
        'full-tl' : '200%',
        'button' : '5em'
      },
      fontFamily: {
        'kanit' : 'Kanit, sans-serif'
      },
      dropShadow: {
        'primary': '0 0 2px rgba(233, 98, 173, 1)',
        'secondary': '0 0 1px rgba(51, 14, 144, 0.8)',
        'tertiary': '0 0 1px rgba(134,111,185, 0.8)',
        'quaternary': '0 0 1px rgba(198, 153, 198, 0.8)',
        'primaryImg': '0 0 8px rgba(117, 255, 244, 0.8)',
      },
      boxShadow: {
        '3xl': '0 0 10px rgba(103, 232, 249, 0.5)',
      },
      zIndex: {
        '100' : '100'
      },
      height: {
        'robot' : '20em'
      },
      colors: {
        'primary' : '#E962AD', 
        'secondary' : '#330E90',
        'tertiary': '#866FB9',
        'fourth': '#c698c6',
        'fifth': '#2d5fcb'
      },
      spacing: {
        'menu-hamburger' : '0.18em'
      }
    },
  },
  plugins: [
  ],
}