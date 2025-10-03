import React from 'react'
import { useCollections } from '../../../lib/api'

export interface CollectionGridProps {
    id: string
    type: 'collection-grid'
    title?: string
    limit?: number
}

export function CollectionGrid({ title = 'Colecciones', limit = 6 }: CollectionGridProps) {
    const { data } = useCollections()
    const items = data?.slice(0, limit)
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                {items?.map(c => (
                    <div key={c.id} className="rounded-lg border p-4 flex flex-col items-center text-center">
                        <div className="w-full aspect-video bg-muted rounded mb-2" />
                        <span className="font-medium text-sm">{c.title}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
