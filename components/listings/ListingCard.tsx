import Link from 'next/link';
import type { Listing } from '@/types';
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder';
import RatingStars from '@/components/ui/RatingStars';

interface ListingCardProps {
  listing: Listing;
}

// Reused on Home and Catalog. The whole card links to the room detail.
const ListingCard = ({ listing }: ListingCardProps) => (
  <Link href={`/rooms/${listing.id}`} className="group block">
    <PhotoPlaceholder
      tone={listing.tone}
      label={`Foto de ${listing.title}`}
      className="aspect-square w-full rounded-2xl transition-transform group-hover:scale-[1.02]"
    />
    <div className="mt-3 flex items-start justify-between gap-2">
      <div className="min-w-0">
        <h3 className="truncate font-semibold">{listing.location}</h3>
        <p className="truncate text-sm text-neutral-500">{listing.title}</p>
      </div>
      <RatingStars rating={listing.rating} />
    </div>
    <p className="mt-1 text-sm">
      <span className="font-semibold">{listing.pricePerNight} €</span> noche
    </p>
  </Link>
);

export default ListingCard;
