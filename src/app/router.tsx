import { createBrowserRouter } from 'react-router-dom'
import { ThemePicker } from '../pages/ThemePicker'
import { HomeBuilder } from '../pages/HomeBuilder'
import { NavigationEditor } from '../pages/NavigationEditor'
import { CatalogQuickAdd } from '../pages/CatalogQuickAdd'

export const router = createBrowserRouter([
    { path: '/', element: <ThemePicker /> },
    { path: '/builder', element: <HomeBuilder /> },
    { path: '/navigation', element: <NavigationEditor /> },
    { path: '/catalog/quick-add', element: <CatalogQuickAdd /> },
])
