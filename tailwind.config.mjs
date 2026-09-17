/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#FAF7FF',
          100: '#F2EBFF',
          200: '#E4D4FF',
          300: '#CEB2FF',
          400: '#B084FF',
          500: '#9458FF',
          600: '#7A35F0',
          700: '#6A27D0',
          800: '#5921AB',
          900: '#4A1E8A',
          950: '#2A0F52',
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