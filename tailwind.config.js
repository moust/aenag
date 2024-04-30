/* eslint-disable unicorn/prefer-module */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.edge', './resources/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#dfe2c2',
        secondary: '#008100',
        accent: '#9E9EFF',
        neutral: '#1f1f1f',
        base100: '#1d1b26',
        info: '#00a0fc',
        success: '#008800',
        warning: '#ffa700',
        error: '#c2304f',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('daisyui')],
}
