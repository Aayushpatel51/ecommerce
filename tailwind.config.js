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
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1180px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
