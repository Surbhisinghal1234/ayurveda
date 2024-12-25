/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: '0rem',
      screens: {
       
        '2xl': '1596px',
      },
    },
    extend: {
      colors: {
        primary: '#FFF7E2',
        dark: "#3A643B",
        lightSky:"#ECE7FF",
        lightGray:"#ECFEE7",
        footercolor : "#dce3dc"
      }
    },
  },
  plugins: [],
}

