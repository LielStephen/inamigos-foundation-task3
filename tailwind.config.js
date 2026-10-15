/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inamigos: {
          primary: '#059669',
          'primary-dark': '#047857',
          'primary-light': '#10b981',
          accent: '#f59e0b',
          dark: '#0f172a',
          navy: '#1e293b',
          surface: '#ffffff',
          cream: '#fefce8',
          bg: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
