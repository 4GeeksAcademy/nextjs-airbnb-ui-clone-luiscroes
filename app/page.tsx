'use client';

import { useEffect, useState } from 'react';
import type { CategoryId, Listing } from '@/types';
import { LISTINGS } from '@/data/listings';
import { CATEGORIES } from '@/data/categories';
import Navbar from '@/components/layout/Navbar';
import CategoryBar from '@/components/listings/CategoryBar';
import ListingGrid from '@/components/listings/ListingGrid';
import LoadingState from '@/components/ui/LoadingState';

/*
 * Vision spec — Home (from the 375px Airbnb screenshot, see context.md):
 * <Navbar> sticky top: <Logo> · <SearchBar value onChange> · <UserMenu>
 * <CategoryBar categories activeId onSelect> → horizontal scroll of <CategoryItem icon label>
 * <ListingGrid listings> → 1 column on mobile, 3–4 from 768px → <ListingCard listing>
 */
const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryId>('todo');

  // Simulated data load on mount: empty list → 1s → data
  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(LISTINGS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const query = search.trim().toLowerCase();
  const visible = listings.filter(
    (l) =>
      (category === 'todo' || l.category === category) &&
      (l.title.toLowerCase().includes(query) || l.location.toLowerCase().includes(query)),
  );

  return (
    <>
      <Navbar search={search} onSearchChange={setSearch} />
      <CategoryBar categories={CATEGORIES} activeId={category} onSelect={setCategory} />
      <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-8">
        {loading ? <LoadingState /> : <ListingGrid listings={visible} />}
      </main>
    </>
  );
};

export default HomePage;
