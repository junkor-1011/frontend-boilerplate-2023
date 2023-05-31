/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{tsx,ts,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
