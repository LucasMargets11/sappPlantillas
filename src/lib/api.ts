import { useQuery } from '@tanstack/react-query'
import { Product, ProductSchema, CollectionSchema, NavigationSchema, PageSchema } from './types'

const API_BASE = '/api'

async function fetchJson<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(API_BASE + path, { headers: { 'Content-Type': 'application/json' }, ...options })
  if (!res.ok) throw new Error(res.status + ' ' + res.statusText)
  return res.json()
}

export function useProducts(limit = 12) {
  return useQuery({
    queryKey: ['products', limit],
    queryFn: async () => {
      const data = await fetchJson<Product[]>(`/products?limit=${limit}`)
      return data.map(p => ProductSchema.parse(p))
    }
  })
}

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: async () => {
      const data = await fetchJson<any[]>(`/collections`)
      return data.map(c => CollectionSchema.parse(c))
    }
  })
}

export async function fetchHomePage() {
  const data = await fetchJson<any>(`/pages/home`)
  return PageSchema.parse(data)
}

export async function installTheme(id: string) {
  return fetchJson(`/themes/install`, { method: 'POST', body: JSON.stringify({ id }) })
}
