# themes-sandbox

Sandbox para diseñar y previsualizar templates de tienda: **Aurora**, **Pulso**, **Sabor**.

Stack: Vite + React + TypeScript + Tailwind + shadcn/ui + React Query + MSW + dnd-kit.

## Objetivo

Editar tokens (colores, tipografía, radius, elevación) y bloques (hero, grids, etc.) viendo un **live preview** (draft) dentro de un iframe. Permite instalar un tema seed, modificar, y exportar JSON de home y theme.

## Scripts

- `npm run dev` arranca la app.
- `npm run build` build producción.
- `npm run preview` vista previa build.
- `npm run msw` prepara/instala el service worker de MSW (solo primera vez o cuando cambie).
- `npm run seed` carga datos seed en memoria (lado cliente para MSW) usando `src/mocks/seed.mjs`.
- `npm run design` corre MSW y el dev server en paralelo (usa `npm-run-all`).

## Pasos iniciales

```bash
npm install
npm run seed   # opcional: carga datos iniciales
npm run msw    # si no existe el worker generado
npm run dev
```

Abrir http://localhost:5173

## Flujo de trabajo

1. Ve a `/` (ThemePicker) y elige un tema → POST `/api/themes/install`.
2. Redirige a `/builder` (HomeBuilder) donde puedes:
   - Arrastrar bloques (dnd-kit).
   - Editar props inline (formularios shadcn/ui).
   - Cambiar tokens (panel derecho) y aplicar al preview.
3. Guardar cambios → PATCH `/api/pages/home`.
4. Exportar Home o Theme → descarga JSON.
5. Navegación y catálogo: `/navigation` y `/catalog/quick-add`.

## Estructura (resumida)

Ver carpetas en `src/` para componentes, temas y mocks.

## TODO General

- Implementar componentes UI (shadcn) reales.
- Estilos de bloques y variantes.
- Lógica completa de drag & drop + reorder + duplicate.
- Persistencia simulada en memoria (ya esbozada en handlers MSW).
- Mejoras de accesibilidad y shortcuts.

## Exportación

Botones en HomeBuilder para exportar:

- blocks.json
- themeSettings.json

## Licencia

MIT (ajustar según necesidades internas).
