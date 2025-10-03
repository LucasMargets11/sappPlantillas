import React from 'react'

export interface StoryProps {
    id: string
    type: 'story'
    title?: string
    content?: string
}

export function Story({ title = 'Historia', content = 'Contenido de la historia...' }: StoryProps) {
    return (
        <article className="prose max-w-none">
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    )
}
