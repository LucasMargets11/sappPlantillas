import { ThemeTokens } from '../tokens'
import { Block } from '../../../lib/types'

export const saborTheme: ThemeTokens = {
  colors: {
    primary: '340 80% 50%',
    accent: '30 90% 55%',
    background: '0 0% 100%',
    surface: '0 0% 100%',
    text: '340 30% 12%',
    muted: '340 15% 45%',
    border: '340 15% 85%',
  },
  typography: { fontFamily: 'Inter, system-ui, sans-serif', scale: 1.125 },
  radius: 20,
  elevation: {
    sm: '0 1px 2px 0 hsl(340 40% 2% / 0.04), 0 1px 3px 1px hsl(340 40% 2% / 0.06)',
    md: '0 4px 6px -1px hsl(340 40% 2% / 0.07), 0 2px 4px -2px hsl(340 40% 2% / 0.06)',
    lg: '0 10px 15px -3px hsl(340 40% 2% / 0.1), 0 4px 6px -4px hsl(340 40% 2% / 0.1)',
  },
}

export const saborHomeSeed: Block[] = [
  { id: 'hero-1', type: 'hero', title: 'Sabores que inspiran', subtitle: 'Descubre la colección', image: '/media/hero3.jpg' },
  { id: 'grid-1', type: 'product-grid', title: 'Top Ventas', limit: 6 },
  { id: 'story-1', type: 'story', title: 'Nuestra historia', content: 'Texto breve...' },
  { id: 'logo-wall-1', type: 'logo-wall', logos: ['/media/logo1.jpg','/media/logo2.jpg'] },
  { id: 'testimonial-1', type: 'testimonials', title: 'Clientes felices', items: [{ quote: 'Excelente', author: 'Ana' }] },
  { id: 'newsletter-1', type: 'newsletter', title: 'Recibe recetas', subtitle: 'Ideas semanales' },
]
