/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,jsx,ts,tsx}',
  './src/components/*.{js,jsx,ts,tsx}'
],
  theme: {
    screens:{
      'mobile': {'max':'650px'}
    },
    extend: {},
  },
  plugins: [],
}

