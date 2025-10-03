import React from 'react'

export interface TestimonialsProps {
    id: string
    type: 'testimonials'
    title?: string
    items?: { quote: string; author: string }[]
}

export function Testimonials({ title = 'Testimonios', items = [{ quote: 'Excelente servicio', author: 'Cliente' }] }: TestimonialsProps) {
    return (
        <section className="space-y-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="grid gap-4 md:grid-cols-2">
                {items.map((t, i) => (
                    <figure key={i} className="rounded-lg border p-4 bg-surface shadow-sm">
                        <blockquote className="text-sm">“{t.quote}”</blockquote>
                        <figcaption className="mt-2 text-xs text-muted-foreground">— {t.author}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}
