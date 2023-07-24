/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'roboto-bold': ['Roboto-Bold'],
        'roboto': ['Roboto'],
    },
    colors:{
      'dark-gray': 'hsl(234, 29%, 20%)',
      'charcoal-gray': 'hsl(235, 18%, 26%)',
      'grey': 'hsl(231, 7%, 60%)',
      'custom-white': 'hsl(0, 0%, 100%)'
    },
    listStyleType: {
      'list-check': 'list-check',
    },
    extend: {},
  },
  plugins: [],
}