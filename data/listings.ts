import type { Listing } from '@/types';

// Mock data — replaces an API call while the UI is validated
export const LISTINGS: Listing[] = [
  { id: '1', title: 'Ático con terraza frente al mar', location: 'Valencia, España', category: 'playa', pricePerNight: 145, rating: 4.92, reviewsCount: 128, tone: 'sea' },
  { id: '2', title: 'Villa con piscina infinita', location: 'Jávea, España', category: 'mansiones', pricePerNight: 420, rating: 4.97, reviewsCount: 64, tone: 'sunset' },
  { id: '3', title: 'Loft de diseño en el centro', location: 'Barcelona, España', category: 'tendencias', pricePerNight: 118, rating: 4.81, reviewsCount: 233, tone: 'stone' },
  { id: '4', title: 'Cabaña de madera en el bosque', location: 'Asturias, España', category: 'cabanas', pricePerNight: 92, rating: 4.88, reviewsCount: 87, tone: 'forest' },
  { id: '5', title: 'Casa con piscina y jardín', location: 'Marbella, España', category: 'piscinas', pricePerNight: 260, rating: 4.9, reviewsCount: 41, tone: 'sand' },
  { id: '6', title: 'Mirador sobre los acantilados', location: 'Menorca, España', category: 'vistas', pricePerNight: 175, rating: 4.95, reviewsCount: 152, tone: 'sea' },
  { id: '7', title: 'Masía restaurada entre viñedos', location: 'Priorat, España', category: 'campo', pricePerNight: 135, rating: 4.86, reviewsCount: 58, tone: 'sand' },
  { id: '8', title: 'Apartamento a dos pasos de la playa', location: 'Cádiz, España', category: 'playa', pricePerNight: 84, rating: 4.74, reviewsCount: 310, tone: 'sunset' },
  { id: '9', title: 'Estudio con vistas a la Alhambra', location: 'Granada, España', category: 'vistas', pricePerNight: 99, rating: 4.93, reviewsCount: 199, tone: 'night' },
  { id: '10', title: 'Refugio de montaña con chimenea', location: 'Pirineo, España', category: 'cabanas', pricePerNight: 110, rating: 4.84, reviewsCount: 76, tone: 'forest' },
];
