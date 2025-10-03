import { http, HttpResponse } from 'msw'
import products from './data/products.json'
import collections from './data/collections.json'
import navigation from './data/navigation.json'
import store from './data/store.json'
import homeAurora from './data/pages/home_aurora.json'
import homePulso from './data/pages/home_pulso.json'
import homeSabor from './data/pages/home_sabor.json'

// In-memory mutable copies
let _products: any[] = [...products]
let _collections: any[] = [...collections]
let _navigation: any = { ...navigation }
let _store: any = { ...store }
let _home: any = homeAurora // default

export const handlers = [
  http.get('/api/themes', () => {
    return HttpResponse.json([
      { id: 'aurora', name: 'Aurora', previewImage: '/media/theme-aurora.jpg' },
      { id: 'pulso', name: 'Pulso', previewImage: '/media/theme-pulso.jpg' },
      { id: 'sabor', name: 'Sabor', previewImage: '/media/theme-sabor.jpg' },
    ])
  }),
  http.post('/api/themes/install', async ({ request }) => {
    const body = await request.json() as any
    switch (body.id) {
      case 'pulso': _home = homePulso; break
      case 'sabor': _home = homeSabor; break
      default: _home = homeAurora
    }
    return HttpResponse.json({ theme_installation: { id: body.id }, page: _home })
  }),
  http.get('/api/pages/home', () => HttpResponse.json(_home)),
  http.patch('/api/pages/home', async ({ request }) => {
    const body = await request.json()
    _home = body
    return HttpResponse.json(_home)
  }),
  http.get('/api/navigation', () => HttpResponse.json(_navigation)),
  http.put('/api/navigation', async ({ request }) => {
    _navigation = await request.json()
    return HttpResponse.json(_navigation)
  }),
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url)
    const limit = Number(url.searchParams.get('limit') || '20')
    return HttpResponse.json(_products.slice(0, limit))
  }),
  http.post('/api/products', async ({ request }) => {
    const body = await request.json() as any
    const created = { id: 'p' + (_products.length + 1), ...body }
    _products.push(created)
    return HttpResponse.json(created, { status: 201 })
  }),
  http.get('/api/collections', () => HttpResponse.json(_collections)),
  http.get('/api/store/settings/brand', () => HttpResponse.json(_store.brand_settings)),
  http.patch('/api/store/settings/brand', async ({ request }) => {
    const body = await request.json()
    _store.brand_settings = { ..._store.brand_settings, ...body }
    return HttpResponse.json(_store.brand_settings)
  }),
]
