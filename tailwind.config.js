/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      colors: {
        "primary":"#CF0000",
        "secondary": '#342B27',
        "third": '#1F1E1E',
        'four': '#605F62',
        'five': '#D9D9D9',
        'six': '#7E7E7E',
        'seven': '#BCBBBB',

        "start": '#FF8079',
        "end": '#FF1E1E',
        
      },
      spacing: {
        '47': '47px',
        '128': '128px',
        '242': '241.08px',
        '100': '100px',
        '70': '70px',
        '60': '60px',
        '50': '50px',
        '40': '40px',
        '30': '30px',
        '60': '60px'
      },
      
      fontSize:{
        '40':"40px",
        '32':"32px",
        '22':"22px"
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
        'trirong': ["Trirong", "serif"],
        'hind': ["Hind", "sans-serif"],
      },
      borderRadius:{
        '42':'42px',
        '37':'37px',
        '20':'20px',

      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FF1E1E, #FF8079)',
        'custom-gradient2': 'linear-gradient(to right, #F5595A, #E6333D)',
        
      }
    }
  },
  plugins: [],
}