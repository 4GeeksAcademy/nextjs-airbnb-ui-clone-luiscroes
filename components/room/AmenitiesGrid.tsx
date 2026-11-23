import type { Amenity } from '@/types';

interface AmenitiesGridProps {
  amenities: Amenity[];
}

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => (
  <section aria-labelledby="amenities-title" className="space-y-4">
    <h2 id="amenities-title" className="text-xl font-semibold">Qué ofrece este alojamiento</h2>
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {amenities.map((amenity) => (
        <li key={amenity.label} className="flex items-center gap-3">
          <span className="text-xl" aria-hidden="true">{amenity.icon}</span>
          <span>{amenity.label}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default AmenitiesGrid;
