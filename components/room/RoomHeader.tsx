import RatingStars from '@/components/ui/RatingStars';

interface RoomHeaderProps {
  title: string;
  rating: number;
  reviewsCount: number;
  location: string;
}

const RoomHeader = ({ title, rating, reviewsCount, location }: RoomHeaderProps) => (
  <div className="space-y-1">
    <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
    <div className="flex flex-wrap items-center gap-x-2 text-sm">
      <RatingStars rating={rating} reviewsCount={reviewsCount} />
      <span className="text-neutral-400" aria-hidden="true">·</span>
      <span className="font-medium underline underline-offset-2">{location}</span>
    </div>
  </div>
);

export default RoomHeader;
