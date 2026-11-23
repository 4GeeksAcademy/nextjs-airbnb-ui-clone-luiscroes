interface RatingStarsProps {
  rating: number;
  reviewsCount?: number;
}

const RatingStars = ({ rating, reviewsCount }: RatingStarsProps) => (
  <span className="inline-flex items-center gap-1 text-sm">
    <span aria-hidden="true">★</span>
    <span className="font-medium">{rating.toFixed(2).replace('.', ',')}</span>
    {reviewsCount !== undefined && (
      <span className="text-neutral-500">· {reviewsCount} reseñas</span>
    )}
  </span>
);

export default RatingStars;
