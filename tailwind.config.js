/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    debugScreens: {
      position: ['top', 'left'],
      style: {
        backgroundColor: '#ffffff03',
        boxShadow: 'none',
        color: 'white',
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
