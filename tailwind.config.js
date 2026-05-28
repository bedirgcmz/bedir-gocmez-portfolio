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
        primary: '#071013',
        secondary: '#0f2f34',
        accent: '#2dd4bf',
        background: '#071013',
        surface: '#101b20',
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
