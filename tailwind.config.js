/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f2ede0',
        },
        ink: {
          50: '#f8f8f7',
          100: '#e8e6e0',
          200: '#c9c5b8',
          300: '#a09b8b',
          400: '#6b665a',
          500: '#4a463c',
          600: '#332f27',
          700: '#22201b',
          800: '#161512',
          900: '#0d0c0a',
        },
        accent: {
          50: '#f0f4f8',
          100: '#dae5ef',
          200: '#b1c5db',
          300: '#7fa1c2',
          400: '#547fa6',
          500: '#38618c',
          600: '#2b4c70',
          700: '#233e5b',
          800: '#1c324a',
          900: '#152537',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}
