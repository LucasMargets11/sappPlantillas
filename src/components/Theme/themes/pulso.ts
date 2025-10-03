import { ThemeTokens } from '../tokens'
import { Block } from '../../../lib/types'

export const pulsoTheme: ThemeTokens = {
  colors: {
    primary: '12 85% 55%',
    accent: '45 90% 55%',
    background: '0 0% 100%',
    surface: '0 0% 100%',
    text: '24 30% 10%',
    muted: '24 15% 45%',
    border: '24 15% 85%',
  },
  typography: { fontFamily: 'Inter, system-ui, sans-serif', scale: 1.125 },
  radius: 8,
  elevation: {
    sm: '0 1px 2px 0 hsl(24 40% 2% / 0.04), 0 1px 3px 1px hsl(24 40% 2% / 0.06)',
    md: '0 4px 6px -1px hsl(24 40% 2% / 0.07), 0 2px 4px -2px hsl(24 40% 2% / 0.06)',
    lg: '0 10px 15px -3px hsl(24 40% 2% / 0.1), 0 4px 6px -4px hsl(24 40% 2% / 0.1)',
  },
}

export const pulsoHomeSeed: Block[] = [
  { id: 'hero-1', type: 'hero', title: 'Energía Pulso', subtitle: 'Ritmo y color', image: '/media/hero2.jpg' },
  { id: 'grid-1', type: 'collection-grid', title: 'Colecciones', limit: 6 },
  { id: 'usp-1', type: 'usp-bar', items: ['Envío 24h', 'Soporte 24/7', 'Pagos seguros'] },
  { id: 'banner-1', type: 'banner', text: 'Hasta 30% off', image: '/media/banner2.jpg' },
  { id: 'newsletter-1', type: 'newsletter', title: 'Mantente al día', subtitle: 'Nuevos lanzamientos' },
]
