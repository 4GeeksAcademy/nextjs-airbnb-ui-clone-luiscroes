import Link from 'next/link';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

interface NavbarProps {
  search?: string;
  onSearchChange?: (value: string) => void;
}

// Shows a live search box when the view passes search props (Home);
// otherwise a compact link to the catalog.
const Navbar = ({ search, onSearchChange }: NavbarProps) => (
  <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white">
    <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:justify-between md:px-8">
      <Logo />
      {onSearchChange ? (
        <SearchBar value={search ?? ''} onChange={onSearchChange} />
      ) : (
        <Link href="/catalog" className="flex-1 rounded-full border border-neutral-200 px-4 py-2.5 text-sm text-neutral-500 shadow-sm md:w-[28rem] md:flex-none">
          🔍 Ver todos los alojamientos
        </Link>
      )}
      <UserMenu />
    </nav>
  </header>
);

export default Navbar;
