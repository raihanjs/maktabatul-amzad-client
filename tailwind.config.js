/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#108D41',
        'white': '#FFFFFF',
        'black': '#181818',
        'black2': "#333333",
        'gray': '#C4C4C4',
        'red':'#F0141E',
        'olive': "#95B32A",
        'gold':'#F9AC20'
      },
    },
  },
  plugins: [],
}
