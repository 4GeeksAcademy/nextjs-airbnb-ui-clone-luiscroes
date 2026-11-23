import type { Category } from '@/types';

interface CategoryItemProps {
  category: Category;
  isActive: boolean;
  onSelect: (id: Category['id']) => void;
}

const CategoryItem = ({ category, isActive, onSelect }: CategoryItemProps) => (
  <button
    type="button"
    onClick={() => onSelect(category.id)}
    aria-pressed={isActive}
    className={`flex shrink-0 flex-col items-center gap-1 border-b-2 pb-2 text-xs transition-colors ${
      isActive
        ? 'border-neutral-900 font-semibold text-neutral-900'
        : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800'
    }`}
  >
    <span className="text-2xl" aria-hidden="true">{category.icon}</span>
    <span className="whitespace-nowrap">{category.label}</span>
  </button>
);

export default CategoryItem;
