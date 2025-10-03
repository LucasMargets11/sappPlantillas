import React from 'react'
import { cn } from '../../../lib/utils'

export interface HeroProps {
    id: string
    type: 'hero'
    title?: string
    subtitle?: string
    image?: string
    align?: 'left' | 'center'
}

export function Hero({ title = 'Hero title', subtitle, image = '/media/placeholder.jpg', align = 'center' }: HeroProps) {
    return (
        <section className={cn('relative w-full overflow-hidden rounded-lg shadow bg-surface')}>
            <img src={image} alt={title} className="w-full h-80 object-cover" loading="lazy" />
            <div className={cn('absolute inset-0 flex flex-col items-center justify-center backdrop-brightness-75 px-6 text-center', align === 'left' && 'items-start text-left')}>
                <h1 className="text-4xl font-bold text-white drop-shadow">{title}</h1>
                {subtitle && <p className="mt-2 text-lg text-white/90 max-w-xl">{subtitle}</p>}
            </div>
        </section>
    )
}
