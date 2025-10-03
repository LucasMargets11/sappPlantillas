import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Will be bound to CSS variables via ThemeProvider
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        bg: 'hsl(var(--color-bg) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
      },
      boxShadow: {
        sm: 'var(--elevation-sm)',
        DEFAULT: 'var(--elevation-md)',
        lg: 'var(--elevation-lg)',
      },
    },
  },
  plugins: [],
}
export default config
