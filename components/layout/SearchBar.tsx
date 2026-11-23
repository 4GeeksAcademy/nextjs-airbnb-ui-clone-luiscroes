interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

// Controlled input: the parent view owns the search state
const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <label className="flex flex-1 items-center gap-2 rounded-full border border-neutral-200 px-4 py-2.5 shadow-sm md:w-[28rem] md:flex-none">
    <span aria-hidden="true">🔍</span>
    <span className="sr-only">Buscar alojamientos</span>
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="¿A dónde vas?"
      className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
    />
  </label>
);

export default SearchBar;
