/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include Vite's index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React files
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme here if needed
  },
  plugins: [],
};
