import Link from 'next/link';

const BackLink = () => (
  <nav aria-label="Ruta de navegación" className="text-sm">
    <Link href="/catalog" className="inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline">
      <span aria-hidden="true">←</span> Volver al catálogo
    </Link>
  </nav>
);

export default BackLink;
