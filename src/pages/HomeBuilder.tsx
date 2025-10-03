import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchHomePage } from '../lib/api'
import { BlockRenderer } from '../components/BlockRenderer/BlockRenderer'
import { useThemeTokens } from '../components/Theme/ThemeProvider'
import { PreviewToolbar } from '../components/Preview/PreviewToolbar'
import { PreviewFrame } from '../components/Preview/PreviewFrame'

export function HomeBuilder() {
    const { data } = useQuery({ queryKey: ['page', 'home'], queryFn: fetchHomePage })
    const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
    const { tokens } = useThemeTokens()

    const blocks = data?.blocks || []

    return (
        <div className="h-full flex flex-col">
            <PreviewToolbar currentViewport={viewport} onViewportChange={setViewport} />
            <div className="flex-1 grid grid-cols-12 gap-4 p-4 overflow-hidden">
                <aside className="col-span-2 border rounded p-3 overflow-auto text-xs space-y-2">
                    {/* TODO: Blocks palette + drag & drop */}
                    <div className="font-semibold mb-2">Bloques</div>
                    {blocks.map(b => (
                        <div key={b.id} className="border rounded px-2 py-1">{b.type}</div>
                    ))}
                </aside>
                <main className="col-span-7 border rounded overflow-auto p-4">
                    <BlockRenderer blocks={blocks} />
                    {/* TODO: Live iframe preview (current preview uses direct render) */}
                </main>
                <aside className="col-span-3 border rounded p-3 overflow-auto text-xs space-y-4">
                    <div className="font-semibold">Tokens</div>
                    <div className="grid grid-cols-2 gap-2">
                        <span>Primary</span><span className="font-mono text-[10px]">{tokens.colors.primary}</span>
                        <span>Accent</span><span className="font-mono text-[10px]">{tokens.colors.accent}</span>
                        <span>Radius</span><span>{tokens.radius}px</span>
                    </div>
                    {/* TODO: Editable forms for tokens and block props */}
                </aside>
            </div>
        </div>
    )
}
