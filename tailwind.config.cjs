/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
          //=============
          // '50': '#f3faf7',
          // '100': '#d7f0e8',
          // '200': '#aee1d2',
          // '300': '#7ecab6',
          // '400': '#53ae9a',
          // '500': '#399380',
          // '600': '#2e7c6d',
          // '700': '#265f54',
          // '800': '#224d46',
          // '900': '#20413b',
          //==============
          // '50': '#fcf4f4',
          // '100': '#f9eaea',
          // '200': '#f3d8d9',
          // '300': '#e9b8bb',
          // '400': '#dc9096',
          // '500': '#cc6771',
          // '600': '#b54959',
          // '700': '#9a394a',
          // '800': '#803142',
          // '900': '#6e2d3d',
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
  plugins: [require("daisyui", "@tailwindcss/forms", "flowbite/plugin")],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "app-color": {
  //           '50': '#f2fbf5',
  //           '100': '#e0f8e9',
  //           '200': '#c3efd3',
  //           '300': '#94e1b2',
  //           '400': '#5dcb87',
  //           '500': '#000',
  //           '600': '#278b4e',
  //           '700': '#237243',
  //           '800': '#205b37',
  //           '900': '#1c4b30',
  //         }
  //       }
  //     },
  //     "dark",
  //     "retro",
  //   ],
  // },
}
// function themeColors(themeName, deg, color) {
//   themeName.primary = color
//   console.log(themeName[color])
  // console.log(themeName)
  // themeName.primary = color
// }
// themeColors(mytheme, null, "app-color"),
// console.log(this)