/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#FBF5EA',
          100: '#F4E9D0',
          200: '#EBD2A2',
          300: '#DFB76D',
          400: '#D4A14C',
          500: '#C48C3A',
          600: '#A97030',
          700: '#8B572A',
          800: '#6F4426',
          900: '#5A3721',
          950: '#311B0F',
        },
        accent: {
          50:  '#FFFBEA',
          100: '#FFF3C4',
          200: '#FCE588',
          300: '#FADB5F',
          400: '#F7C948',
          500: '#F0B429',
          600: '#DE911D',
          700: '#CB6E17',
          800: '#B44D12',
          900: '#8D2B0B',
          950: '#61190B',
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