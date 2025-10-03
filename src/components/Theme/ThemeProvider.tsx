import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ThemeTokens } from './tokens'
import { applyTheme } from './tokens'

interface ThemeContextValue {
    tokens: ThemeTokens
    setTokens: (t: ThemeTokens) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children, initialTokens }: { children: ReactNode; initialTokens: ThemeTokens }) {
    const [tokens, setTokens] = useState<ThemeTokens>(initialTokens)

    useEffect(() => {
        applyTheme(tokens)
    }, [tokens])

    return <ThemeContext.Provider value={{ tokens, setTokens }}>{children}</ThemeContext.Provider>
}

export function useThemeTokens() {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error('useThemeTokens must be used within ThemeProvider')
    return ctx
}
