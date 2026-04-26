/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#3fb68b",
        "accent-dark": "#2d8b68",
      },
    },
  },
  plugins: [],
};
