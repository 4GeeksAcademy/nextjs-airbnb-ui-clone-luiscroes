import { LISTINGS } from '@/data/listings';
import Navbar from '@/components/layout/Navbar';
import RoomDetail from '@/components/room/RoomDetail';

/*
 * Vision spec — Room detail (from the 375px Airbnb screenshot, see context.md):
 * <BackLink> · <PhotoGallery photos title> (prev/next) · <RoomHeader title rating reviewsCount location>
 * <HostInfo host> · description · <AmenitiesGrid amenities> · <BookingCard pricePerNight maxGuests>
 * Mobile: single column, booking card last. Desktop: content left, sticky booking card right.
 */

// Known room ids are prerendered at build time
export const generateStaticParams = () => LISTINGS.map((listing) => ({ id: listing.id }));

const RoomPage = async ({ params }: PageProps<'/rooms/[id]'>) => {
  const { id } = await params;

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-0 py-4 md:px-8 md:py-6">
        <div className="px-4 md:px-0">
          <RoomDetail id={id} />
        </div>
      </main>
    </>
  );
};

export default RoomPage;
