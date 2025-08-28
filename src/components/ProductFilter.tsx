import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Filtrar por categoría:</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'Todos' ? 'default' : 'outline'}
          onClick={() => onCategoryChange('Todos')}
          className="mb-2"
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;