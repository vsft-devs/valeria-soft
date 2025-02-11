module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['NotoSans-Regular', 'sans-serif'],
      },
      colors: {
        background: '#F4F3F9',
        primary: {
          DEFAULT: '#008B8B'
        },
        secondary: {
          DEFAULT: '#21d2d3',
          light: '#90e9e9'
        }
      }
    },
  },
  plugins: [],
}
