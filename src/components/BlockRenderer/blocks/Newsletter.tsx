import React from 'react'

export interface NewsletterProps {
    id: string
    type: 'newsletter'
    title?: string
    subtitle?: string
}

export function Newsletter({ title = 'Suscríbete', subtitle = 'Recibe nuestras novedades' }: NewsletterProps) {
    return (
        <form className="rounded-lg bg-surface p-6 shadow space-y-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            <div className="flex gap-2">
                <input type="email" required placeholder="Email" className="flex-1 border rounded px-3 py-2 text-sm" />
                <button type="submit" className="bg-primary text-white rounded px-4 text-sm font-medium">Enviar</button>
            </div>
        </form>
    )
}
