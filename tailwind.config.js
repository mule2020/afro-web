/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D3557',
        secondary: '#F4A261',
        accent: '#2B2D42',
        background: '#F9FAFB',
        text: '#2F2F2F'
      },
    },
  },
  plugins: [],
}
