'use client';

import { useEffect, useState } from 'react';
import type { Room } from '@/types';
import { ROOMS } from '@/data/rooms';
import LoadingState from '@/components/ui/LoadingState';
import BackLink from './BackLink';
import PhotoGallery from './PhotoGallery';
import RoomHeader from './RoomHeader';
import HostInfo from './HostInfo';
import AmenitiesGrid from './AmenitiesGrid';
import BookingCard from './BookingCard';

interface RoomDetailProps {
  id: string;
}

const RoomDetail = ({ id }: RoomDetailProps) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulates fetching the room by the id from the URL when the view mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(ROOMS.find((r) => r.id === id) ?? null);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <LoadingState label="Cargando alojamiento…" />;
  if (!room) return <p className="py-16 text-center">No encontramos este alojamiento.</p>;

  return (
    <div className="space-y-6">
      <BackLink />
      <PhotoGallery photos={room.photos} title={room.title} />
      <RoomHeader title={room.title} rating={room.rating} reviewsCount={room.reviewsCount} location={room.location} />
      <div className="grid gap-8 md:grid-cols-[1fr_22rem]">
        <div className="space-y-6">
          <HostInfo host={room.host} />
          <p className="leading-relaxed text-neutral-700">{room.description}</p>
          <AmenitiesGrid amenities={room.amenities} />
        </div>
        <BookingCard pricePerNight={room.pricePerNight} maxGuests={room.maxGuests} />
      </div>
    </div>
  );
};

export default RoomDetail;
