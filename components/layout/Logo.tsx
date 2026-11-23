import Link from 'next/link';

const Logo = () => (
  <Link href="/" aria-label="Ir al inicio" className="flex shrink-0 items-center gap-1 text-rose-500">
    <span className="text-2xl" aria-hidden="true">⌂</span>
    <span className="hidden text-xl font-bold tracking-tight md:inline">airbnb</span>
  </Link>
);

export default Logo;
