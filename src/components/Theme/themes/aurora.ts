import { ThemeTokens } from '../tokens'
import { Block } from '../../../lib/types'

export const auroraTheme: ThemeTokens = {
  colors: {
    primary: '210 100% 50%',
    accent: '170 75% 45%',
    background: '0 0% 100%',
    surface: '0 0% 100%',
    text: '220 30% 10%',
    muted: '220 15% 45%',
    border: '220 15% 85%',
  },
  typography: { fontFamily: 'Inter, system-ui, sans-serif', scale: 1.125 },
  radius: 16,
  elevation: {
    sm: '0 1px 2px 0 hsl(220 40% 2% / 0.04), 0 1px 3px 1px hsl(220 40% 2% / 0.06)',
    md: '0 4px 6px -1px hsl(220 40% 2% / 0.07), 0 2px 4px -2px hsl(220 40% 2% / 0.06)',
    lg: '0 10px 15px -3px hsl(220 40% 2% / 0.1), 0 4px 6px -4px hsl(220 40% 2% / 0.1)',
  },
}

export const auroraHomeSeed: Block[] = [
  // TODO: Fill with real seed blocks referencing product / collection handles by slug
  { id: 'hero-1', type: 'hero', title: 'Bienvenido a Aurora', subtitle: 'Inspiración fresca', image: '/media/hero1.jpg' },
  { id: 'grid-1', type: 'product-grid', title: 'Destacados', limit: 8 },
  { id: 'banner-1', type: 'banner', text: 'Envío gratis desde $50', image: '/media/banner1.jpg' },
  { id: 'newsletter-1', type: 'newsletter', title: 'Suscríbete', subtitle: 'Promos y novedades' },
]
