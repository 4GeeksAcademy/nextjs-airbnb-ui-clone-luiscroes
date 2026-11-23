import type { SortOrder } from '@/types';

interface SortControlProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

const SortControl = ({ value, onChange }: SortControlProps) => (
  <label className="flex items-center gap-2 text-sm">
    <span className="text-neutral-500">Ordenar por precio</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOrder)}
      className="rounded-lg border border-neutral-300 bg-white px-3 py-2 font-medium"
    >
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
  </label>
);

export default SortControl;
