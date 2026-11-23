import type { SortOrder } from '@/types';
import SortControl from './SortControl';

interface ResultsHeaderProps {
  count: number;
  sortOrder: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

const ResultsHeader = ({ count, sortOrder, onSortChange }: ResultsHeaderProps) => (
  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
    <div>
      <h1 className="text-xl font-semibold">Alojamientos en España</h1>
      <p className="text-sm text-neutral-500">{count} resultados</p>
    </div>
    <SortControl value={sortOrder} onChange={onSortChange} />
  </div>
);

export default ResultsHeader;
