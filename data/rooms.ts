import type { Amenity, Room } from '@/types';
import { LISTINGS } from './listings';

const HOSTS = ['Lucía', 'Javier', 'Marta', 'Andrés', 'Carmen'];

const AMENITIES: Amenity[] = [
  { icon: '📶', label: 'Wifi' },
  { icon: '🍳', label: 'Cocina' },
  { icon: '❄️', label: 'Aire acondicionado' },
  { icon: '🚗', label: 'Aparcamiento gratuito' },
  { icon: '🧺', label: 'Lavadora' },
  { icon: '💻', label: 'Zona de trabajo' },
  { icon: '📺', label: 'Televisión' },
  { icon: '🐾', label: 'Se admiten mascotas' },
];

// Builds the full room detail from each listing (same ids → consistent data)
export const ROOMS: Room[] = LISTINGS.map((listing, i) => ({
  ...listing,
  description: `Disfruta de ${listing.title.toLowerCase()} en ${listing.location.split(',')[0]}. Un espacio luminoso, cuidado al detalle y perfecto para desconectar.`,
  photos: [listing.tone, 'sand', 'forest', 'stone', 'night'],
  host: { name: HOSTS[i % HOSTS.length], yearsHosting: 2 + (i % 7), isSuperhost: listing.rating >= 4.9 },
  amenities: AMENITIES.slice(0, 4 + (i % 5)),
  maxGuests: 2 + (i % 5),
}));
