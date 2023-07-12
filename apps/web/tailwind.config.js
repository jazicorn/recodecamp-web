/** @type {import('tailwindcss').Config} */
import campfire from './tailwind.campfire.js'
export default {
  presets: [
    campfire
  ],
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
}
