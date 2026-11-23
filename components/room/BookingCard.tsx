'use client';

import { useState } from 'react';
import GuestCounter from './GuestCounter';

interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

const MIN_GUESTS = 1;

const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(MIN_GUESTS);

  return (
    <aside className="space-y-4 rounded-2xl border border-neutral-200 p-6 shadow-lg md:sticky md:top-24">
      <p>
        <span className="text-2xl font-semibold">{pricePerNight} €</span>{' '}
        <span className="text-neutral-500">noche</span>
      </p>
      <GuestCounter value={guests} min={MIN_GUESTS} max={maxGuests} onChange={setGuests} />
      <button type="button" className="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white transition-colors hover:bg-rose-600">
        Reservar
      </button>
      <p className="text-center text-xs text-neutral-500">
        {guests} {guests === 1 ? 'huésped' : 'huéspedes'} · No se hará ningún cargo todavía
      </p>
    </aside>
  );
};

export default BookingCard;
