import React from 'react'
import { useThemeTokens } from '../Theme/ThemeProvider'

interface PreviewToolbarProps {
    onViewportChange?: (v: 'mobile' | 'tablet' | 'desktop') => void
    currentViewport?: 'mobile' | 'tablet' | 'desktop'
    onGridToggle?: () => void
    onThemeQuickSelect?: (id: string) => void
}

export function PreviewToolbar({ onViewportChange, currentViewport = 'desktop' }: PreviewToolbarProps) {
    const { tokens } = useThemeTokens()
    return (
        <div className="flex items-center gap-2 border-b px-3 py-2 bg-surface sticky top-0 z-10">
            <span className="text-xs font-medium">Viewport:</span>
            {(['mobile', 'tablet', 'desktop'] as const).map(v => (
                <button key={v} onClick={() => onViewportChange?.(v)} className={`text-xs px-2 py-1 rounded border ${currentViewport === v ? 'bg-primary text-white' : 'bg-background'}`}>{v}</button>
            ))}
            <div className="ml-auto text-xs text-muted-foreground">Tokens radius: {tokens.radius}px</div>
        </div>
    )
}
