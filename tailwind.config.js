/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    screens: {
      '4xlx': { max: '2560px' },
      '3xlx': { max: '1750px' },
      xxlx: { max: '1500px' },
      '2xlx': { max: '1400px' },
      xlx: { max: '1280px' },
      '2lgx': { max: '1124px' },
      lgx: { max: '1023px' },
      '3mdx': { max: '925px' },
      '2mdx': { max: '900px' },
      mdx: { max: '768px' },
      '3smx': { max: '705px' },
      '2smx': { max: '600px' },
      smx: { max: '639px' },
      '2xsx': { max: '560px' },
      xsx: { max: '475px' },
      xxsx: { max: '375px' },

      xxs: { min: '375px' },
      xs: { min: '475px' },
      '2xs': { min: '560px' },
      sm: { min: '640px' },
      '2sm': { min: '600px' },
      '3sm': { min: '705px' },
      md: { min: '769px' },
      '2md': { min: '900px' },
      '3md': { min: '925px' },
      lg: { min: '1024px' },
      '2lg': { min: '1124px' },
      xl: { min: '1280px' },
      '2xl': { min: '1400px' },
      xxl: { min: '1500px' },
      '3xl': { min: '1750px' },
      '4xl': { min: '2560px' }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: { DEFAULT: 'hsl(var(--input))', foreground: 'hsl(var(--input-bg))' },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        placeholder: 'hsl(var(--placeholder))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
