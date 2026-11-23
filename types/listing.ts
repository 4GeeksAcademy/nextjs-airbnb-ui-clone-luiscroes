export type CategoryId =
  | 'todo'
  | 'playa'
  | 'mansiones'
  | 'tendencias'
  | 'cabanas'
  | 'piscinas'
  | 'vistas'
  | 'campo';

export interface Category {
  id: CategoryId;
  label: string;
  icon: string;
}

export type PhotoTone = 'sea' | 'sand' | 'forest' | 'sunset' | 'stone' | 'night';

export interface Listing {
  id: string;
  title: string;
  location: string;
  category: Exclude<CategoryId, 'todo'>;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  tone: PhotoTone;
}

export type SortOrder = 'asc' | 'desc';
