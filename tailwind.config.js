/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      base: ['16px', '19.36px'],
      sm: ['14px', '16.94px'],
      lg: ['28px', '38.4px'],
      xl: ['24px', '32px'],
    }
  },
  plugins: [],
}

