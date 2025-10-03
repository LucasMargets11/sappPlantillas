import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { installTheme } from '../lib/api'

export function ThemePicker() {
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: installTheme,
        onSuccess: () => navigate('/builder')
    })

    const themes = [
        { id: 'aurora', name: 'Aurora', image: '/media/theme-aurora.jpg' },
        { id: 'pulso', name: 'Pulso', image: '/media/theme-pulso.jpg' },
        { id: 'sabor', name: 'Sabor', image: '/media/theme-sabor.jpg' },
    ]

    return (
        <main className="p-8 max-w-5xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">Elige un tema</h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {themes.map(t => (
                    <button key={t.id} onClick={() => mutation.mutate(t.id)} className="group rounded-lg overflow-hidden border shadow hover:shadow-md transition text-left">
                        <div className="aspect-video bg-muted">
                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-sm">{t.name}</h3>
                            <span className="text-xs text-muted-foreground">Usar plantilla</span>
                        </div>
                    </button>
                ))}
            </div>
        </main>
    )
}
