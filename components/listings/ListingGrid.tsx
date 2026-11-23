import type { Listing } from '@/types';
import ListingCard from './ListingCard';

interface ListingGridProps {
  listings: Listing[];
  columns?: 'home' | 'catalog';
}

// Mobile-first: 1 column at 375px, more columns from md (768px) upwards
const COLUMNS = {
  home: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4',
  catalog: 'grid-cols-1 md:grid-cols-2',
};

const ListingGrid = ({ listings, columns = 'home' }: ListingGridProps) => {
  if (listings.length === 0) {
    return <p className="py-16 text-center text-neutral-500">No hay alojamientos que coincidan.</p>;
  }
  return (
    <div className={`grid gap-6 ${COLUMNS[columns]}`}>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingGrid;
