/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'max-xs': { max: '376px' },
        'max-xxs': { max: '365px' },
        'tablet-only': { min: '768px', max: '950px' },
      },
      colors: {
        primary: '#004046', // koyu yeşil (dark bg)
        secondary: '#006064', // koyu mavi-yeşil tonu
        accent: '#33bbc5', // açık mavi (linkler, hover)
        background: '#121212', // genel dark bg
        surface: '#1E1E1E', // kartlar, butonlar
        textLight: '#ffffff',
        textDark: '#121212',
        muted: '#a0a0a0',
        borderLight: '#2f2f2f',
        borderDark: '#cccccc',
      },
    },
  },
  plugins: [],
}
