/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      baseBlue: '#091242',
      blue75: '#09124275',
      blue50: '#09124250',
      blue25: '#09124225',
      blue0: '#09124200',
      navBlue: '#09186625',
      baseRed: '#FC3C3C',
      red50: '#FC3C3C50',
      red25: '#FC3C3C25',
      baseGray: '#F4F4F4',
      white20pc: 'rgba(255, 255, 255, 0.20)',
      tagGray: ' #e8e8e8',
      tagBlue: '#04285550',
      textSecondary: '#666C89',
      textPrimary: '#1C1F35',
      borderBlue: '#4E5683'
    },
    extend: {
      margin:{
        '88': '88px',
        '76': '272px'
      },
      spacing: {
        '50': '196px',
        '70': '282px',
        '100': '392px'
      }
    },
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
}
