# Contexto del proyecto: clon de la interfaz de Airbnb

Este documento se escribió **antes de empezar a programar**. Describe qué vamos a construir, para quién y cómo se reparte la interfaz en componentes. Las capturas de referencia de Airbnb (móvil, 375 px) están en [`docs/vision/`](docs/vision/).

## Stack y reglas

- Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS. El proyecto se creó con `create-next-app`, sin plantilla.
- **Mobile-first:** el diseño parte de 375 px y se amplía con el prefijo `md:` (≥ 768 px) para escritorio.
- Solo Tailwind: sin librerías de UI y sin `style={{}}`.
- Carpetas: `/app` (rutas), `/components` (un componente por archivo, ~80 líneas máximo), `/types` (tipos de datos), `/data` (datos de prueba).
- Navegación interna siempre con `<Link>` de Next.js, nunca con `<a href>`.
- Todos los componentes son funcionales y se declaran con `const`.

## Usuario

Lucía tiene 34 años, vive en Madrid y organiza escapadas de fin de semana con su pareja y, a veces, con amigos. Casi siempre busca alojamiento desde el móvil, en ratos libres: en el metro o en el sofá. Quiere ver rápido qué hay disponible, filtrar por el tipo de sitio que le apetece (playa, cabaña, casa con piscina), comparar precios por noche y valoraciones, y entrar al detalle de un alojamiento para ver las fotos, quién es el anfitrión, qué incluye y cuánto le costaría para el número de personas que van. Valora que la página cargue con claridad, que los botones sean fáciles de pulsar con el pulgar y no perderse al volver atrás.

## Páginas

| Ruta | Qué muestra |
|---|---|
| `/` (Home) | Barra de navegación con logo, buscador y menú de usuario; fila de categorías; cuadrícula de alojamientos. El buscador filtra las tarjetas en tiempo real y la categoría activa queda resaltada. Muestra un indicador de carga durante 1 s al entrar. |
| `/catalog` (Catálogo) | Número de resultados, selector para ordenar por precio (ascendente o descendente), lista de tarjetas (el mismo componente que en Home) y un marcador de posición para el mapa: a la derecha en escritorio y debajo de la lista en móvil. |
| `/rooms/[id]` (Detalle) | Carga el alojamiento según el `id` de la URL, con estado de carga. Galería con botones Anterior/Siguiente, cabecera (título, estrellas, reseñas, ubicación), fila del anfitrión, cuadrícula de servicios y tarjeta de reserva con precio por noche, contador de huéspedes y botón de acción. Enlace para volver al catálogo. |

## Componentes por vista

### Compartidos

- `layout/Navbar`: cabecera fija. Contiene `Logo`, `SearchBar` (solo en Home) y `UserMenu`.
- `layout/Logo`: enlace a `/`.
- `layout/SearchBar`: input controlado (`value`, `onChange`).
- `layout/UserMenu`: botón de menú con avatar.
- `ui/PhotoPlaceholder`: bloque con degradado en lugar de foto real (`tone`, `label`).
- `ui/RatingStars`: ★ nota y número de reseñas (`rating`, `reviewsCount?`).
- `ui/LoadingState`: spinner con texto (`label`).

### Home (`/`)

- `listings/CategoryBar`: fila con scroll horizontal de categorías (`categories`, `activeId`, `onSelect`).
- `listings/CategoryItem`: icono y nombre; resaltado si está activo (`category`, `isActive`, `onSelect`).
- `listings/ListingGrid`: cuadrícula de tarjetas (`listings`, `columns: 'home' | 'catalog'`).
- `listings/ListingCard`: foto, título, ubicación, precio por noche y estrellas; enlaza a `/rooms/[id]` (`listing`).

### Catálogo (`/catalog`)

- `listings/ResultsHeader`: título, número de resultados y `SortControl` (`count`, `sortOrder`, `onSortChange`).
- `listings/SortControl`: selector de orden por precio (`value`, `onChange`).
- `listings/ListingGrid` y `listings/ListingCard`: reutilizados de Home.
- `listings/MapPlaceholder`: caja "Mapa".

### Detalle (`/rooms/[id]`)

- `room/RoomDetail`: carga el alojamiento por `id` con `useEffect` y monta la página.
- `room/BackLink`: "← Volver al catálogo".
- `room/PhotoGallery`: foto actual, botones Anterior/Siguiente y contador "1 / 5" (`photos`, `title`).
- `room/RoomHeader`: título, estrellas, reseñas y ubicación (`title`, `rating`, `reviewsCount`, `location`).
- `room/HostInfo`: avatar, nombre y años como anfitrión (`host`).
- `room/AmenitiesGrid`: cuadrícula de servicios (`amenities`).
- `room/BookingCard`: precio por noche, `GuestCounter` y botón "Reservar" (`pricePerNight`, `maxGuests`).
- `room/GuestCounter`: botones − / + con mínimo y máximo (`value`, `min`, `max`, `onChange`).

## Tipos principales (`/types`)

- `Listing`: `id`, `title`, `location`, `category`, `pricePerNight`, `rating`, `reviewsCount`, `tone`.
- `Room` (amplía `Listing`): `description`, `photos`, `host`, `amenities`, `maxGuests`.
- `Host`: `name`, `yearsHosting`, `isSuperhost`.
- `Amenity`: `icon`, `label`.
- `Category`: `id`, `label`, `icon`.
- `SortOrder`: `'asc' | 'desc'`.

## Estado (`useState`) y efectos (`useEffect`)

| Dónde | Estado | Para qué |
|---|---|---|
| Home | `search`, `category`, `listings`, `loading` | Filtrar en tiempo real, resaltar la categoría activa y simular la carga de 1 s con `setTimeout`. |
| Catálogo | `sortOrder`, `listings`, `loading` | Ordenar por precio y simular la carga. |
| `RoomDetail` | `room`, `loading` | Cargar el alojamiento por `id` en un `useEffect`. |
| `PhotoGallery` | `index` | Foto visible en la galería. |
| `BookingCard` | `guests` | Contador de huéspedes entre 1 y `maxGuests`. |

## Especificaciones a partir de capturas (vision → spec)

Se tomaron capturas de airbnb.es a 375 px y se tradujeron a componentes, props y layout. No se copia el diseño exacto: se toma como referencia la estructura.

### Home: [`docs/vision/01-home-mobile.jpg`](docs/vision/01-home-mobile.jpg)

| Lo que se ve en la captura | Componente | Props | Layout móvil → escritorio |
|---|---|---|---|
| Píldora "Empieza a buscar" arriba | `SearchBar` dentro de `Navbar` | `value`, `onChange` (Navbar: `search`, `onSearchChange`) | Ancho completo bajo el logo → píldora central de ancho fijo (`md:w-[28rem]`) |
| Fila de chips (Todo, Alojamientos, Experiencias) | `CategoryBar` + `CategoryItem` | `categories`, `activeId`, `onSelect` | Scroll horizontal (`overflow-x-auto`) en todas las anchuras |
| Tarjetas con foto redondeada, título, precio y ★ | `ListingCard` | `listing` | Foto `aspect-square rounded-2xl`, texto debajo |
| Filas de tarjetas | `ListingGrid` | `listings`, `columns="home"` | `grid-cols-1` → `md:grid-cols-3 lg:grid-cols-4` |
| Barra inferior de pestañas | No se implementa: el menú de usuario va en `Navbar` | — | — |

### Catálogo: [`docs/vision/02-catalog-mobile.jpg`](docs/vision/02-catalog-mobile.jpg)

| Lo que se ve en la captura | Componente | Props | Layout móvil → escritorio |
|---|---|---|---|
| Cabecera "Alojamientos en Valencia" | `ResultsHeader` | `count` | Título y contador apilados |
| "Más de 1.000 alojamientos" | `ResultsHeader` | `count` | Texto "N resultados" |
| Chips de filtros | `SortControl` (dentro de `ResultsHeader`) | `value`, `onChange` | Selector junto al contador |
| Mapa ocupando la parte superior | `MapPlaceholder` | — | Debajo de la lista, `h-64` → columna derecha fija (`md:grid-cols-[3fr_2fr]`, `md:sticky`) |
| Hoja inferior con tarjetas | `ListingGrid` | `listings`, `columns="catalog"` | `grid-cols-1` → `md:grid-cols-2` |

### Detalle: [`docs/vision/03-room-detail-mobile.jpg`](docs/vision/03-room-detail-mobile.jpg)

| Lo que se ve en la captura | Componente | Props | Layout móvil → escritorio |
|---|---|---|---|
| Foto a ancho completo con contador "1/33" | `PhotoGallery` | `photos`, `title` | Foto `aspect-[4/3]` a ancho completo con flechas Anterior/Siguiente superpuestas y contador abajo a la derecha → `md:aspect-[16/7]` con bordes redondeados |
| Botón de volver arriba a la izquierda | `BackLink` | — | Enlace sobre la galería |
| Título, ubicación, ★ y reseñas | `RoomHeader` | `title`, `rating`, `reviewsCount`, `location` | Bloque de texto apilado |
| Anfitrión | `HostInfo` | `host` | Avatar circular + nombre + años |
| Lista de características destacadas | `AmenitiesGrid` | `amenities` | `grid-cols-1` → `sm:grid-cols-2` |
| Barra fija inferior "Desde 129 € en total" + botón rosa | `BookingCard` + `GuestCounter` | `pricePerNight`, `maxGuests` | Tarjeta al final del contenido → columna lateral fija (`md:grid-cols-[1fr_22rem]`, `md:sticky`) |

## Decisiones de diseño

- Colores: blanco y neutros de Tailwind; acento rosa (`rose-500`) en el botón "Reservar" y en el logo.
- Las fotos son marcadores de posición con degradado (`PhotoPlaceholder`), sin imágenes externas.
- Los datos son de prueba (10 alojamientos en España en `/data`) y la "carga" se simula con `setTimeout` de 1 s.
- Extras opcionales (mapa real, selector de fechas) quedan fuera del alcance.
