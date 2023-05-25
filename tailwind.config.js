/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/*.html',
    "./src/**/*.html", 
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: '375px',
        md: '550px',
      },
    },
    colors: {
      primary: '#F55A5A',
      white: '#ffffff',
    },
  },
  plugins: [],
}

