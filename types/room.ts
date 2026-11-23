import type { Listing, PhotoTone } from './listing';

export interface Host {
  name: string;
  yearsHosting: number;
  isSuperhost: boolean;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface Room extends Listing {
  description: string;
  photos: PhotoTone[];
  host: Host;
  amenities: Amenity[];
  maxGuests: number;
}
