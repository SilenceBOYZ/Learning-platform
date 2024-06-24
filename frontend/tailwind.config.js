/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'avg': '990px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tablet': { 'max': '990px' },
      'smtablet': { 'max': '768px' },
      'mobile': { 'max': '660px' }
    },
    extend: {

    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [daisyui],
}

