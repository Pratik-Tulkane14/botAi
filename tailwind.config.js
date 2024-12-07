/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include Vite's index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React files
  ],
  theme: {
    extend: {
       colors: {
        gradientStart: 'rgba(215, 199, 244, 0.2)',
        gradientEnd: 'rgba(151, 133, 186, 0.2)',
      },
    }, // Extend Tailwind's default theme here if needed
  },
  plugins: [],
};
