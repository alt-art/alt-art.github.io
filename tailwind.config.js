/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#111213',
        'black-light': '#292a2b',
        primary: '#ec8daf',
      },
      width: {
        '404px': '404px',
      },
    },
  },
  plugins: [],
};
