import React from 'react'
import { z } from 'zod'
import { BlockSchema, Block } from '../../lib/types'
import { Hero } from './blocks/Hero'
import { ProductGrid } from './blocks/ProductGrid'
import { CollectionGrid } from './blocks/CollectionGrid'
import { Banner } from './blocks/Banner'
import { Story } from './blocks/Story'
import { USPBar } from './blocks/USPBar'
import { Newsletter } from './blocks/Newsletter'
import { LogoWall } from './blocks/LogoWall'
import { Testimonials } from './blocks/Testimonials'
import { MapCta } from './blocks/MapCta'

// Simple mapping
const map: Record<Block['type'], React.ComponentType<any>> = {
    'hero': Hero,
    'product-grid': ProductGrid,
    'collection-grid': CollectionGrid,
    'banner': Banner,
    'story': Story,
    'usp-bar': USPBar,
    'newsletter': Newsletter,
    'logo-wall': LogoWall,
    'testimonials': Testimonials,
    'map-cta': MapCta,
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
    return (
        <div className="flex flex-col gap-6">
            {blocks.map(b => {
                const parsed = BlockSchema.safeParse(b)
                if (!parsed.success) {
                    console.warn('Invalid block skipped', parsed.error)
                    return null
                }
                const C = map[b.type]
                return <C key={b.id} {...b} />
            })}
        </div>
    )
}
