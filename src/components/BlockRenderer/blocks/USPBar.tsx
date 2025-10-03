import React from 'react'

export interface USPBarProps {
    id: string
    type: 'usp-bar'
    items?: string[]
}

export function USPBar({ items = ['Envío rápido', 'Devoluciones fáciles', 'Pagos seguros'] }: USPBarProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm bg-surface rounded-lg p-4 shadow">
            {items.map((it, i) => (
                <span key={i} className="font-medium">{it}</span>
            ))}
        </div>
    )
}
