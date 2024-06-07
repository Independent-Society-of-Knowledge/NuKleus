/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // Main Colors
        shore: {
          100: '#caeffb',
          200: '#97def7',
          300: '#4bbcef',
          400: '#42a8d6',
          500: '#3a94bc',
          600: '#3180a3',
          700: '#296c89',
          800: '#215970',
          900: '#184456',
          1000: '#071c23',
        },
        ocean: {
          1000: '#050a12',
          900: '#0f1a30',
          800: '#1a264c',
          700: '#25356a',
          600: '#314388',
          500: '#3c51a5',
          400: '#485bc2',
          300: '#536ade',
          200: '#5f78f9',
          100: '#668aff',
        },
        azure: {
          1000: '#100920',
          900: '#211041',
          800: '#431982',
          700: '#6521c2',
          600: '#7625e3',
          500: '#a272ff',
          400: '#c0a6ff',
          300: '#dfd3ff',
          200: '#efeaff',
          100: '#f7f4ff',
        },
        gray: {
          100: '#ffffff',
          200: '#f0f0f0',
          300: '#e0e0e1',
          400: '#b0b0b6',
          500: '#a19fa9',
          600: '#817f8f',
          700: '#615f6c',
          800: '#403f48',
          900: '#202024',
          1000: '#000000',
        },
        danger: {
          1000: '#120305',
          900: '#24050b',
          800: '#490715',
          700: '#920329',
          600: '#b30937',
          500: '#d80342',
          400: '#e98999',
          300: '#f3bec6',
          200: '#f9d8dd',
          10: '#fdf1f2',
        },
        info: {
          1000: '#050a16',
          900: '#0a142c',
          800: '#162656',
          700: '#2f4bad',
          600: '#3957b3',
          500: '#4463b8',
          400: '#5c7bc2',
          300: '#90a7d5',
          200: '#c8d3eb',
          100: '#e3eaf5',
        },
        success: {
          1000: '#030c09',
          900: '#051911',
          800: '#0c3121',
          700: '#1b6343',
          600: '#34775a',
          500: '#4f8a71',
          400: '#89b2a0',
          300: '#c4d9d0',
          200: '#e2ede8',
          100: '#f0f6f4',
        },
        warning: {
          1000: '#0b0902',
          900: '#bd7c19',
          800: '#da8f1d',
          700: '#f7a221',
          600: '#f7ae38',
          500: '#f8bb52',
          400: '#f9d28b',
          300: '#fadea8',
          200: '#fce8c5',
          100: '#fdf5e2',
        }
      },
      fontFamily: {
        'plex-mono': ['IBM Plex Mono', 'monospace'],
        'plex-sans': ['IBM Plex Sans', 'sans-serif'],
        'plex-sans-condensed': ['IBM Plex Sans Condensed', 'sans-serif'],
        'plex-serif': ['IBM Plex Serif', 'serif'],
      },
      spacing: {
        '1': '0.125rem', // 2px
        '2': '0.25rem', // 4px
        '3': '0.5rem', // 8px
        '4': '0.75rem', // 12px
        '5': '1rem', // 16px
        '6': '1.5rem', // 24px
        '7': '2rem', // 32px
        '8': '2.5rem', // 40px
        '9': '3rem', // 48px
        '10': '4rem', // 64px
        '11': '5rem', // 80px
        '12': '6rem', // 96px
        '13': '10rem', // 160px
      },
    },
  },
  plugins: [],
}
