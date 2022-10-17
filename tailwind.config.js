module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'real': '0 1px 6px 0 #171717',
      },
      colors: {
        'dark-primary': {
          "700":"#3c4043",
          "600":"#171717",
          "500": "#202124",
          "400":"#2F3034",
          "300":"#5f6368",
          "200":"#303134",
          "100":"#9aa0a6",
          "50":"#e8eaed",
          "10":"#bdc1c6"
        },
        'secondary':{
          "200":"#8ab4f8"
        }
      },
      width:{
        600:"37.5rem"
      }
    },
  },
  plugins: [],
}