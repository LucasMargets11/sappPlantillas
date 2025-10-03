import React from 'react'

export interface LogoWallProps {
    id: string
    type: 'logo-wall'
    logos?: string[]
    title?: string
}

export function LogoWall({ logos = ['/media/logo1.jpg', '/media/logo2.jpg', '/media/logo3.jpg'], title = 'Marcas' }: LogoWallProps) {
    return (
        <section className="space-y-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-6 items-center">
                {logos.map((src, i) => (
                    <img key={i} src={src} alt={`Logo ${i + 1}`} className="h-12 object-contain opacity-80 hover:opacity-100 transition" loading="lazy" />
                ))}
            </div>
        </section>
    )
}
