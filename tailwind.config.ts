import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020812',
          900: '#040D1A',
          800: '#071428',
          700: '#0A1D3B',
          600: '#0E2650',
          500: '#132F65',
          400: '#1A3D7C',
          300: '#2352A0',
          200: '#3068C4',
          100: '#5A8ED8',
          50:  '#A8C4EC',
        },
        steel: {
          900: '#0F1923',
          800: '#1A2634',
          700: '#243447',
          600: '#2E4259',
          500: '#3A526B',
          400: '#4D6880',
          300: '#6B849A',
          200: '#8FA4B8',
          100: '#BAC9D8',
          50:  '#E2EAF2',
        },
        precision: {
          blue:  '#0057FF',
          cyan:  '#00C2FF',
          white: '#F0F4FF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh':     'radial-gradient(at 40% 20%, #0057FF22 0px, transparent 50%), radial-gradient(at 80% 0%, #0A1D3B 0px, transparent 50%), radial-gradient(at 0% 50%, #071428 0px, transparent 50%)',
        'noise':             "url('/images/noise.svg')",
      },
      animation: {
        'fade-up':       'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':       'fadeIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-right':   'slideRight 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'count-up':      'countUp 2s ease-out forwards',
        'shimmer':       'shimmer 2.5s linear infinite',
        'float':         'float 6s ease-in-out infinite',
        'scan-line':     'scanLine 3s linear infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'marquee':       'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'glow-blue':  '0 0 40px rgba(0, 87, 255, 0.15)',
        'glow-blue-lg': '0 0 80px rgba(0, 87, 255, 0.2)',
        'card':       '0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.5), 0 20px 48px rgba(0,0,0,0.4)',
        'nav':        '0 1px 0 rgba(255,255,255,0.04)',
        'inset-top':  'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
export default config
