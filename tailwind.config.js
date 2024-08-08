import { hsv_to_rgb } from './hsl';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#111213',
        'black-light': '#292a2b',
        primary: hsv_to_rgb(Math.random() * 360, 0.5, 0.7),
      },
      width: {
        '404px': '404px',
      },
    },
  },
  plugins: [],
};
