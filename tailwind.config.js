/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'detail-card': '650px'
      },
      colors: {
        'sub-title': 'rgba(20, 125, 175, 0.50)',
        'title': '#1A719C',
        'black': '#343A3F',
        'table-header': 'rgba(0, 0, 0, 0.06)',
        'error-bg': '#fddbd9',
        'purple': '#6457a8'
      },
      boxShadow: {
        'l': "0px 0px 15px rgba(26, 113, 156, 0.20)",
        'xl': '0px 0px 10px 0px rgba(24, 160, 251, 0.10)'
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
