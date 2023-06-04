/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-up': 'inset -7px -9px 20px -15px rgba(0, 0, 0, 0.3)',
        'inner-down': 'inset 7px 10px 20px -15px rgba(0, 0, 0, 0.3)'
      },
      animation: {
        blob: 'blob 3s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)'
          }
        }
      }
    }
  },
  plugins: []
}
