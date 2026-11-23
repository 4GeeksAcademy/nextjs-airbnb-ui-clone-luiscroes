# Airbnb UI clone · Next.js 16

Clon de la interfaz de Airbnb hecho con **Next.js 16 (App Router), React, TypeScript y Tailwind CSS**, con enfoque mobile-first (375 px → escritorio desde 768 px).

El contexto del proyecto (usuario, páginas, componentes y especificaciones a partir de capturas) está en [`context.md`](context.md). Las capturas de referencia están en [`docs/vision/`](docs/vision/).

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Home: buscador que filtra en tiempo real, categorías con estado activo y cuadrícula de alojamientos con carga simulada de 1 s. |
| `/catalog` | Catálogo: número de resultados, orden por precio (ascendente/descendente), tarjetas reutilizadas y marcador de mapa (derecha en escritorio, debajo en móvil). |
| `/rooms/[id]` | Detalle: carga por `id`, galería con Anterior/Siguiente, cabecera, anfitrión, servicios y tarjeta de reserva con contador de huéspedes. |

## Estructura

```
app/            rutas (/, /catalog, /rooms/[id])
components/
  layout/       Navbar, Logo, SearchBar, UserMenu
  listings/     CategoryBar, CategoryItem, ListingCard, ListingGrid, ResultsHeader, SortControl, MapPlaceholder
  room/         RoomDetail, PhotoGallery, RoomHeader, HostInfo, AmenitiesGrid, BookingCard, GuestCounter, BackLink
  ui/           PhotoPlaceholder, RatingStars, LoadingState
data/           datos de prueba (categorías, alojamientos, habitaciones)
types/          tipos TypeScript (Listing, Room, Host, Amenity, Category, SortOrder)
docs/vision/    capturas de Airbnb a 375 px
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Para comprobar la compilación: `npm run build` y `npm run lint`.

## Reglas seguidas

- Solo Tailwind CSS: sin librerías de UI y sin `style={{}}`.
- Navegación con `<Link>` de Next.js (nunca `<a href>`).
- Un componente funcional (`const`) por archivo, de 80 líneas como máximo.
- Estado con `useState` y carga simulada con `useEffect` + `setTimeout`.
