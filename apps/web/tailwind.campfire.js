/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  darkMode: 'class',
  theme: {
    fontFamily: {
      gro: ['Space Grotesk', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
      vt: ['VT323', 'monospace'],
    },
    extend: {
      colors: {
        'no-border': 'rgba(0, 0, 0, 0.3)',
        'campfire-blue': { 
          DEFAULT: '#2ca9bc',
          '100': '#d7ecf0',
          '200': '#afd9e1',
          '300': '#6cbccb',
          '400': '#2ca9bc',
          '500': '#008396',
          '600': '#006072',
          '700': '#004e60',
          '800': '#003e4f',
          '900': '#00212f',
        },
        'campfire-neutral': {
          DEFAULT: '#a3a3a3',
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#e5e5e5',
          '300': '#d4d4d4',
          '400': '#a3a3a3',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
        },
        'campfire-purple': {
          DEFAULT: '#8b5cf6',
        },
        'campfire-green': {
          DEFAULT: '#22c55e',
        }
      },
       backgroundImage: {
         'sw-1': "url('./src/assets/bg/sw-1.jpg')",
         'sw-2': "url('./src/assets/bg/sw-2.jpg')",
         'sw-3': "url('./src/assets/bg/sw-3.jpg')",
         'nature': "url('./src/assets/bg/nature.jpg')",
      },
      brightness: {
        15: '.15',
        25: '.25',
        40: '.40',
        65: '.65',
        175: '1.75',
      },
      backdropBrightness: {
        15: '.15',
        25: '.25',
        40: '.40',
        65: '.65',
        175: '1.75',
      },
      contrast: {
        25: '.25',
      },
      gridTemplateColumns: {
        'dashboard': '3em, auto',
        'dashboard-mobile': 'auto',
        'layout-dashboard-home': 'minmax(32em, auto), minmax(8em, 16em)',
        'layout-dashboard-home-mobile': 'auto',
        'layout-dashboard-code': 'minmax(17em, 28em), minmax(24em, auto)',
        'layout-dashboard-code-mobile': 'auto',
        'layout-dashboard-categories': 'auto',
        'layout-dashboard-categories-mobile': 'auto'
      },
      gridTemplateRows: {
        'dashboard': '2.5em, minmax(30em, auto)',
        'dashboard-mobile': '3em, 3em, 24em, auto, auto, auto',
        'layout-dashboard-home': 'minmax(20em, 65%), auto',
        'layout-dashboard-home-mobile': '24em, auto, auto, auto',
        'layout-dashboard-code': '3.2em, 22em, auto',
        'layout-dashboard-code-mobile': '3em, minmax(14em, 18em), minmax(14em, 18em), auto',
        'layout-dashboard-categories': '2.5em, auto',
        'layout-dashboard-categories-mobile': '5em, auto'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
      addVariant('h1', '& h1')
      addVariant('h2', '& h2')
      addVariant('h3', '& h3')
      addVariant('h4', '& h4')
      addVariant('h5', '& h5')
      addVariant('h6', '& h6')
      addVariant('p', '& p')
      addVariant('svg', '& svg')
    },
  ],
}
