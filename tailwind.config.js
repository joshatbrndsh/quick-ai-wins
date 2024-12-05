/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['Kalam', 'cursive'],
        serif: ['Crimson Pro', 'serif'],
      },
      colors: {
        paper: {
          light: '#FFEFA1',
          dark: '#FFE77D',
        },
        ink: {
          light: '#2B4B6F',
          DEFAULT: '#1A365D',
          dark: '#0F2942',
        },
        accent: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        line: {
          DEFAULT: '#B9D2DC',
          dark: '#92A9B3',
        },
        card: {
          light: '#FFFDF7',
        }
      },
      spacing: {
        'line': '2.175rem',
      },
    },
  },
  plugins: [],
};