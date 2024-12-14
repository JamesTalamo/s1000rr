/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark1': '#3c3c3c',
        'custom-dark2': '#141414',
        'custom-dark3': '#282828',
        'text-gray-custom' : '#cecece',
      }
    },
  },
  plugins: [],
}

