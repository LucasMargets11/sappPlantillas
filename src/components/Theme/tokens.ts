import { z } from 'zod'
import { ThemeTokensSchema } from '../../lib/types'

export type ThemeTokens = z.infer<typeof ThemeTokensSchema>

export const defaultThemeTokens: ThemeTokens = {
  colors: {
    primary: '220 90% 55%',
    accent: '280 70% 55%',
    background: '0 0% 100%',
    surface: '0 0% 100%',
    text: '220 30% 10%',
    muted: '220 15% 40%',
    border: '220 15% 85%',
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    scale: 1.125,
  },
  radius: 12,
  elevation: {
    sm: '0 1px 2px 0 hsl(220 40% 2% / 0.04), 0 1px 3px 1px hsl(220 40% 2% / 0.06)',
    md: '0 4px 6px -1px hsl(220 40% 2% / 0.07), 0 2px 4px -2px hsl(220 40% 2% / 0.06)',
    lg: '0 10px 15px -3px hsl(220 40% 2% / 0.1), 0 4px 6px -4px hsl(220 40% 2% / 0.1)',
  },
}

export function applyTheme(tokens: ThemeTokens) {
  const root = document.documentElement
  root.style.setProperty('--color-primary', tokens.colors.primary)
  root.style.setProperty('--color-accent', tokens.colors.accent)
  root.style.setProperty('--color-bg', tokens.colors.background)
  root.style.setProperty('--color-surface', tokens.colors.surface)
  root.style.setProperty('--color-muted', tokens.colors.muted)
  root.style.setProperty('--color-border', tokens.colors.border)
  root.style.setProperty('--radius', tokens.radius + 'px')
  root.style.setProperty('--elevation-sm', tokens.elevation.sm)
  root.style.setProperty('--elevation-md', tokens.elevation.md)
  root.style.setProperty('--elevation-lg', tokens.elevation.lg)
}

export function contrast(bgHsl: string) {
  // naive: expect "H S L" where S and L have %
  const parts = bgHsl.split(/\s+/)
  const lStr = parts[2] || '50%'
  const l = Number(lStr.replace('%',''))
  return l > 55 ? '#000' : '#fff'
}

export function parseTheme(data: unknown): ThemeTokens | null {
  const parsed = ThemeTokensSchema.safeParse(data)
  return parsed.success ? parsed.data : null
}
