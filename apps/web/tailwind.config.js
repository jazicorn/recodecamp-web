/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      gro: ['Space Grotesk', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
      vt: ['VT323', 'monospace'],
    },
    extend: {
      colors: {
        'campfire-blue': '#2ca9bc',
        'campfire-blue-light': '#ecfeff',
        'campfire-blue-dark': '#0e7490',
        'campfire-blue-darker': '#164e63',
        'campfire-gray': '#e5e7eb',
        'campfire-gray-light': '#f3f4f6',
        'campfire-gray-bold': '#9ca3af',
        'campfire-gray-dark': '#4b5563',
        'campfire-gray-darker': '#1f2937',
      },
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
