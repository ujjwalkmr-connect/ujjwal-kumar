import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',
        mist: 'var(--mist)',
        pale: 'var(--pale)',
        paper: 'var(--paper)',
        teal: 'var(--teal)',
        'teal-2': 'var(--teal-2)',
        'teal-lt': 'var(--teal-lt)',
        gold: 'var(--gold)',
        'gold-lt': 'var(--gold-lt)'
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(12, 17, 23, 0.12)',
        glow: '0 0 48px rgba(13, 158, 143, 0.25)'
      }
    }
  },
  plugins: []
} satisfies Config
