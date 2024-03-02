// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
   
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'),
  require('tailwindcss'),
  require('autoprefixer'),
],
};