/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      colors: {
        primary: "#108D41",
        red: "#F0141E",
        olive: "#95B32A",
        gold: "#F9AC20",
      },
    },
  },
  plugins: [],
};
