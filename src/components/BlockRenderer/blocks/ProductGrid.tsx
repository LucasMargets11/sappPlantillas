import React from 'react'
import { useProducts } from '../../../lib/api'

export interface ProductGridProps {
    id: string
    type: 'product-grid'
    title?: string
    limit?: number
}

export function ProductGrid({ title = 'Productos', limit = 8 }: ProductGridProps) {
    const { data } = useProducts(limit)
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                {data?.map(p => (
                    <div key={p.id} className="rounded-lg border p-3 flex flex-col">
                        <img src={p.images[0]} alt={p.title} className="aspect-square object-cover rounded mb-2" loading="lazy" />
                        <span className="font-medium text-sm" title={p.title}>{p.title}</span>
                        <span className="text-xs text-muted-foreground">${p.price}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
