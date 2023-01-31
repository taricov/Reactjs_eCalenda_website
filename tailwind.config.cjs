/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      backgroundColor: ['checked'],

      opacity: {
        "1": ".01",
        "2": ".04"
      },
      ringWidth: {
        "x": "12px"
      },

      colors: {
        "light-th": "bg-gradient-to-r from-app-color-200",
        'app-color': {
          '50': '#f8f7fe',
          '100': '#f1f0fe',
          '200': '#dcd9fb',
          '300': '#c7c2f9',
          '400': '#9d95f5',
          '500': '#7367f0',
          '600': '#685dd8',
          '700': '#564db4',
          '800': '#453e90',
          '900': '#383276'
        }
      }
    },
  },
  plugins: [require("daisyui", "@tailwindcss/forms", "flowbite/plugin")],
}