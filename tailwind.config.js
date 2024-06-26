module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {
      colors: {
        customLink: '#DBE5F3',
        deepBlue: '#00246B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
