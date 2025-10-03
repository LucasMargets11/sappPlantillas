import React from 'react'

export interface BannerProps {
    id: string
    type: 'banner'
    text?: string
    image?: string
}

export function Banner({ text = 'Mensaje destacado', image = '/media/banner-placeholder.jpg' }: BannerProps) {
    return (
        <section className="relative rounded-lg overflow-hidden shadow bg-surface">
            <img src={image} alt={text} className="w-full h-40 object-cover" loading="lazy" />
            <div className="absolute inset-0 flex items-center justify-center backdrop-brightness-75">
                <p className="text-white font-semibold text-xl drop-shadow">{text}</p>
            </div>
        </section>
    )
}
