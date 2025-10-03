import React, { useEffect, useRef } from 'react'
import { Block } from '../../lib/types'
import { ThemeTokens } from '../Theme/tokens'
import { BlockRenderer } from '../BlockRenderer/BlockRenderer'

interface PreviewFrameProps {
    blocks: Block[]
    tokens: ThemeTokens
}

// NOTE: Simplified approach: using same bundle; in refined version we'd create a blob URL with serialized HTML.
export function PreviewFrame({ blocks, tokens }: PreviewFrameProps) {
    const ref = useRef<HTMLIFrameElement | null>(null)

    useEffect(() => {
        const doc = ref.current?.contentDocument
        if (!doc) return
        doc.open()
        // Minimal HTML shell with inline style vars
        doc.write(`<!DOCTYPE html><html><head><base target='_parent' />
      <style>
        :root { --color-primary: ${tokens.colors.primary}; --color-accent: ${tokens.colors.accent}; --color-bg: ${tokens.colors.background}; --color-surface: ${tokens.colors.surface}; --color-muted: ${tokens.colors.muted}; --color-border: ${tokens.colors.border}; --radius: ${tokens.radius}px; }
        body { margin:0; font-family: ${tokens.typography.fontFamily}; background: hsl(${tokens.colors.background}); }
      </style>
    </head><body><div id="mount"></div></body></html>`)
        doc.close()
    }, [tokens])

    useEffect(() => {
        const win = ref.current?.contentWindow
        if (!win) return
        // Render react inside iframe root using portal
        // TODO: Implement React portal mount (needs separate bundle or exposing React). Placeholder below.
    }, [blocks])

    return <iframe ref={ref} title="Preview" className="w-full h-full border rounded bg-white" />
}
