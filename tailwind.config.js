/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#030712',
          900: '#080c16',
          800: '#111827',
          700: '#1f2937',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          50: '#f8fafc',
        },
        portfolio: {
          'heading-primary': '#FFFFFF',
          'heading-secondary': '#E2E8F0',
          'body': '#94A3B8',
          'accent': '#3B82F6',
          'muted': '#64748B',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(59, 130, 246, 0.15)',
      }
    },
  },
  plugins: [],
}

