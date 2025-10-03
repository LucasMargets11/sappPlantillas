import React from 'react'

export interface MapCtaProps {
    id: string
    type: 'map-cta'
    title?: string
    address?: string
    ctaLabel?: string
}

export function MapCta({ title = 'Visítanos', address = 'Dirección demo', ctaLabel = 'Cómo llegar' }: MapCtaProps) {
    return (
        <section className="rounded-lg border p-4 bg-surface shadow space-y-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="w-full aspect-video bg-muted rounded" />
            <p className="text-sm text-muted-foreground">{address}</p>
            <button className="bg-primary text-white rounded px-4 py-2 text-sm font-medium">{ctaLabel}</button>
        </section>
    )
}
