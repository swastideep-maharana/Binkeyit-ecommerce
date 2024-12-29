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
      animation: {
        bounceIn: "bounceIn 1s ease-out forwards", // New bounce-in animation
      },
      keyframes: {
        bounceIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 }, // Start small and invisible
          "50%": { transform: "scale(1.2)" }, // Scale up
          "100%": { transform: "scale(1)", opacity: 1 }, // Final size and fully visible
        },
      },
    },
  },
  plugins: [],
};
