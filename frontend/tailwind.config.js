/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-200": "#3490dc",
        "primary-100": "#FFC0CB",
        "secondary-200": "#0000FF",
        "secondary-100": "#87CEEB",
      },
    },
  },
  plugins: [],
};
