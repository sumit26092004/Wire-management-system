/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#0E3B66',
          DEFAULT: '#082B4C',
          dark: '#06233D',
          deep: '#04182B',
        },
        brandOrange: {
          light: '#FF9436',
          DEFAULT: '#F58220',
          dark: '#D96B0C',
        },
        brandGray: {
          light: '#F8FAFC',
          DEFAULT: '#F4F7FA',
          border: '#E2E8F0',
          text: '#17324D',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(8, 43, 76, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(8, 43, 76, 0.15)',
        'nav': '0 2px 10px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
