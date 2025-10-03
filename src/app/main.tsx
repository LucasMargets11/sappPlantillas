/* global ImportMeta */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import '../index.css'
import '../main.css'
import { router } from './router'
import { queryClient } from './queryClient'
import { ThemeProvider } from '../components/Theme/ThemeProvider'
import { defaultThemeTokens } from '../components/Theme/tokens'

async function bootstrap() {
    if (import.meta.env && import.meta.env.DEV) {
        try {
            const { worker } = await import('../mocks/browser')
            await worker.start({ onUnhandledRequest: 'bypass' })
            // eslint-disable-next-line no-console
            console.log('[msw] worker started')
        } catch (e) {
            console.warn('[msw] failed to start worker, continuing without mocks', e)
        }
    }
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider initialTokens={defaultThemeTokens}>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </QueryClientProvider>
        </React.StrictMode>
    )
}

bootstrap()
