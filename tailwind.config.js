
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ontainer: {
    padding: {
      DEFAULT: '30px',
      lg: '0',
    },
  },
  screens: {
    sm: '768px',
    md: '1024px',
    lg: '1440px',
    xl: '2160px'
  },
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('./assets/bg_hero.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
}


