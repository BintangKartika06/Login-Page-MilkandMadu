/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFFF00', // Warna kuning Milk & Madu
        }
      }
    },
  },
  plugins: [],
}
