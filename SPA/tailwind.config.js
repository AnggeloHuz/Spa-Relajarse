/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primario: '#2AE09E',
        fuerte_claro: '#21AD7A',
        fuerte: '#2F614F',
        claro: '#70E6BB',
        oscuro: '#126144'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

