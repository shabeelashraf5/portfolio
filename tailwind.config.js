/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 0.75s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
          '100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
