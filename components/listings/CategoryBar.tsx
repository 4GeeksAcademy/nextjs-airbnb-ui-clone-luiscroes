import type { Category, CategoryId } from '@/types';
import CategoryItem from './CategoryItem';

interface CategoryBarProps {
  categories: Category[];
  activeId: CategoryId;
  onSelect: (id: CategoryId) => void;
}

// Horizontal, scrollable row of category filters (icon + label)
const CategoryBar = ({ categories, activeId, onSelect }: CategoryBarProps) => (
  <div className="border-b border-neutral-100 bg-white">
    <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 pt-4 md:gap-8 md:px-8">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          isActive={category.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </div>
  </div>
);

export default CategoryBar;
