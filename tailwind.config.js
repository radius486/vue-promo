/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1512px',
    },
    extend: {
      fontSize: {
        'xxxs': '0.4rem',
        'xxs': '0.6rem',
        '1xl': '1.25rem',
      },
      lineHeight: {
        '20': '5rem',
      },
      colors: {
        'dark-blue': {
          DEFAULT: '#1C3A8A',
          100: '#E8EBF3',
          200: '#BBC4DC',
          300: '#4961A1',
          800: '#162E6E',
          900: '#112353',
        },
        'pink': {
          DEFAULT: '#E3586D',
          100: '#FCEEF0',
          200: '#F4BCC5',
          300: '#EB8A99',
          800: '#CC4F62',
          900: '#883541',
        },
        'yellow': {
          DEFAULT: '#E5B641',
          100: '#FCF8EC',
          200: '#F2DBA0',
          300: '#EAC567',
          800: '#CEA43B',
          900: '#A07F2E',
        },
        'turquoise': {
          DEFAULT: '#1FD5D5',
          100: '#E9FBFB',
          200: '#8FEAEA',
          300: '#4CDDDD',
          800: '#1CC0C0',
          900: '#138080',
        },
        'dark-purple': {
          DEFAULT: '#1E074C',
          100: '#E9E6ED',
          200: '#D2CDDB',
          300: '#4B3970',
          800: '#18063D',
          900: '#0F0426',
        },
        'grey': {
          DEFAULT: '#B3B3B3',
          100: '#F8F8F7',
          200: '#F2F2F0',
          300: '#D7D7D2',
          800: '#3A393A',
          900: '#1D1D1D',
        },
        'info': {
          DEFAULT: '#006CFF',
          100: '#CCE2FF',
        },
        'success': {
          DEFAULT: '#4FB805',
          100: '#EAFCDD',
        },
        'warning': {
          DEFAULT: '#E5B641',
          100: '#FCF8EC',
        },
        'error': {
          DEFAULT: '#E3586D',
          100: '#FCEEF0',
        },
      },
      width: {
        '62': '15.85rem',
        '81': '20.25rem',
      },
      maxWidth: {
        '81': '20.25rem',
        'screen-xxl': '91.25rem',
      },
      height: {
        '108': '27rem',
      }
    },
    aspectRatio: {
      'auto': 'auto',
      'square': '1 /1',
      'video': '16 / 9',
      '4/3': '4 / 3',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666666%',
      '2/5': '40%',
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1460px',
          },
        }
      })
    }
  ]
}
