'use client';

import { useEffect, useState } from 'react';
import type { Listing, SortOrder } from '@/types';
import { LISTINGS } from '@/data/listings';
import Navbar from '@/components/layout/Navbar';
import ResultsHeader from '@/components/listings/ResultsHeader';
import ListingGrid from '@/components/listings/ListingGrid';
import MapPlaceholder from '@/components/listings/MapPlaceholder';
import LoadingState from '@/components/ui/LoadingState';

/*
 * Vision spec — Catalog (from the 375px Airbnb screenshot, see context.md):
 * <Navbar> · <ResultsHeader count sortOrder onSortChange> (contains <SortControl>)
 * Mobile: <ListingGrid columns="catalog"> then <MapPlaceholder> below.
 * Desktop (≥768px): two columns → list left, sticky map right.
 */
const CatalogPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(LISTINGS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sorted = [...listings].sort((a, b) =>
    sortOrder === 'asc' ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
  );

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 md:px-8">
        <ResultsHeader count={sorted.length} sortOrder={sortOrder} onSortChange={setSortOrder} />
        <div className="grid gap-6 md:grid-cols-[3fr_2fr]">
          <section aria-label="Resultados">
            {loading ? <LoadingState /> : <ListingGrid listings={sorted} columns="catalog" />}
          </section>
          <MapPlaceholder />
        </div>
      </main>
    </>
  );
};

export default CatalogPage;
