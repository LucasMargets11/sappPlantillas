import { Block, ThemeTokens } from './types'
// Utilities to export JSON files
export function downloadJson(name: string, data: any) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
  URL.revokeObjectURL(url)
}

export function exportHome(blocks: Block[]) {
  downloadJson('blocks.json', blocks)
}

export function exportTheme(tokens: ThemeTokens) {
  downloadJson('themeSettings.json', tokens)
}
