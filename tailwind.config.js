/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the "app" directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include files in "pages" if you use it
    './components/**/*.{js,ts,jsx,tsx}', // Include files in "components" directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
