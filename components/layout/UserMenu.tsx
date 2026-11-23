const UserMenu = () => (
  <div className="flex shrink-0 items-center gap-2">
    <button type="button" aria-label="Idioma" className="hidden rounded-full p-2 hover:bg-neutral-100 md:block">
      🌐
    </button>
    <button
      type="button"
      aria-label="Menú de usuario"
      className="flex items-center gap-2 rounded-full border border-neutral-200 px-2 py-1.5 hover:shadow-md"
    >
      <span aria-hidden="true">☰</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-500 text-xs text-white" aria-hidden="true">
        👤
      </span>
    </button>
  </div>
);

export default UserMenu;
