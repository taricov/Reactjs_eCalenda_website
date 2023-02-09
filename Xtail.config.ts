



/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      variants: {
        height: ['responsive', 'hover', 'focus']
      },
      transitionProperty: {
        height: 'height'
      },
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
    animation: {
      keyframes: {
        "c_move": {
          "0%, 100%": { transform: "translate(0, 0) " },
          "20%": { transform: "translate(100px, 0) " },
          "30%": { transform: "translate(100px, 100) " },
          "40%": { transform: "translate(100px, [calc(100 * 2)]) " },
          "50%": { transform: "translate(0, [calc(100 * 2)]) " },
          "60%": { transform: "translate([calc(100 * -1)], [calc(100 * 2)]) " },
          "70%": { transform: "translate([calc(100 * -1)], 100) " },
          "80%": { transform: "translate([calc(100 * -1)], 0)" }
        }
      }
    }

  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
    // require('tailwindcss-themer')(
    //   {
    //     // defaultTheme: {},
    //     themes: [
    //       {
    //         name: "basew",
    //         extend: {
    //           colors: {
    //             'app-color': {
    //               '50': '#f2fbf5',
    //               '100': '#e0f8e9',
    //               '200': '#c3efd3',
    //               '300': '#94e1b2',
    //               '400': '#5dcb87',
    //               '500': '#37b067',
    //               '600': '#278b4e',
    //               '700': '#237243',
    //               '800': '#205b37',
    //               '900': '#1c4b30',
    //             }
    //           }
    //         }
    //       }
    //     ]
    //   },
    // )
  ],
}