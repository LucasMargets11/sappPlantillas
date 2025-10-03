import { z } from 'zod'

// Theme Tokens
export const ThemeTokensSchema = z.object({
  colors: z.object({
    primary: z.string(),
    accent: z.string(),
    background: z.string(),
    surface: z.string(),
    text: z.string(),
    muted: z.string(),
    border: z.string(),
  }),
  typography: z.object({
    fontFamily: z.string(),
    scale: z.number().default(1.125),
  }),
  radius: z.number(),
  elevation: z.object({
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
  }),
})
export type ThemeTokens = z.infer<typeof ThemeTokensSchema>

// Blocks
const HeroBlock = z.object({
  id: z.string(),
  type: z.literal('hero'),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  image: z.string().optional(),
})

const ProductGridBlock = z.object({
  id: z.string(),
  type: z.literal('product-grid'),
  title: z.string().optional(),
  limit: z.number().optional(),
})

const CollectionGridBlock = z.object({
  id: z.string(),
  type: z.literal('collection-grid'),
  title: z.string().optional(),
  limit: z.number().optional(),
})

const BannerBlock = z.object({
  id: z.string(),
  type: z.literal('banner'),
  text: z.string().optional(),
  image: z.string().optional(),
})

const StoryBlock = z.object({
  id: z.string(),
  type: z.literal('story'),
  title: z.string().optional(),
  content: z.string().optional(),
})

const USPBarBlock = z.object({
  id: z.string(),
  type: z.literal('usp-bar'),
  items: z.array(z.string()).optional(),
})

const NewsletterBlock = z.object({
  id: z.string(),
  type: z.literal('newsletter'),
  title: z.string().optional(),
  subtitle: z.string().optional(),
})

const LogoWallBlock = z.object({
  id: z.string(),
  type: z.literal('logo-wall'),
  logos: z.array(z.string()).optional(),
  title: z.string().optional(),
})

const TestimonialsBlock = z.object({
  id: z.string(),
  type: z.literal('testimonials'),
  title: z.string().optional(),
  items: z.array(z.object({ quote: z.string(), author: z.string() })).optional(),
})

const MapCtaBlock = z.object({
  id: z.string(),
  type: z.literal('map-cta'),
  title: z.string().optional(),
  address: z.string().optional(),
  ctaLabel: z.string().optional(),
})

export const BlockSchema = z.discriminatedUnion('type', [
  HeroBlock,
  ProductGridBlock,
  CollectionGridBlock,
  BannerBlock,
  StoryBlock,
  USPBarBlock,
  NewsletterBlock,
  LogoWallBlock,
  TestimonialsBlock,
  MapCtaBlock,
])
export type Block = z.infer<typeof BlockSchema>

// Page
export const PageSchema = z.object({
  slug: z.string(),
  blocks: z.array(BlockSchema),
})
export type Page = z.infer<typeof PageSchema>

// Product / Collection / Navigation
export const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  sku: z.string(),
  price: z.number(),
  images: z.array(z.string()).default([]),
})
export type Product = z.infer<typeof ProductSchema>

export const CollectionSchema = z.object({
  id: z.string(),
  title: z.string(),
})
export type Collection = z.infer<typeof CollectionSchema>

export const NavigationSchema = z.object({
  header: z.array(z.object({ label: z.string(), url: z.string() })),
  footer: z.array(z.object({ label: z.string(), url: z.string() })),
})
export type Navigation = z.infer<typeof NavigationSchema>
