// Styled placeholder: below the list on mobile, sticky on the right on desktop
const MapPlaceholder = () => (
  <aside
    aria-label="Mapa"
    className="flex h-64 items-center justify-center rounded-2xl bg-neutral-200 text-lg font-semibold text-neutral-500 md:sticky md:top-24 md:h-[calc(100vh-8rem)]"
  >
    🗺️ Mapa
  </aside>
);

export default MapPlaceholder;
