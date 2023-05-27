/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        side: '#1C1A1D !important',
        button: '#A45EE7 !important',
      },
    },
  },
  plugins: [],
};
