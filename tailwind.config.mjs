/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#FFF1F3',
          100: '#FFDDE2',
          200: '#FFBEC8',
          300: '#FF8FA1',
          400: '#FF5A77',
          500: '#F22A4F',
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
          950: '#4C0519',
        },
        accent: {
          50:  '#FBF5E6',
          100: '#F5E8C4',
          200: '#EED390',
          300: '#E6BC5B',
          400: '#DEA833',
          500: '#D4A24C',
          600: '#C28A2C',
          700: '#A16E24',
          800: '#825722',
          900: '#6B4720',
          950: '#3A250E',
        },
        dark: {
          50:  '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#A3A3A3',
          400: '#737373',
          500: '#404040',
          600: '#2D2D2D',
          700: '#1F1F1F',
          800: '#1A1A1A',
          900: '#111111',
          950: '#0A0A0A',
        },
        whatsapp: {
          500: '#25D366',
          600: '#1FB958',
          700: '#1A9A4A',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}