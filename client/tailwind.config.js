/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        'funnel': ['"Funnel Display"', 'sans-serif'],
        'architects': ['"Architects Daughter"', 'cursive'],
        'pangolin': ['Pangolin', 'cursive'],
      },
      colors: {
        light: {
          background: '#ffffff',
          text: '#1f2937',
          primary: '#3b82f6',
        },
        dark: {
          background: '#1f2937',
          text: '#f3f4f6',
          primary: '#60a5fa',
        },
      },
    },
  },
  plugins: [],
} 