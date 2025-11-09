import React from 'react';
import { Category } from '../types';
import { UI_TEXT } from '../constants';
import { CATEGORIES } from '../data/categories';
import { soundService } from '../services/soundService';

interface CategoryMenuProps {
  onSelectCategory: (category: Category) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: Category) => {
    soundService.playClick();
    onSelectCategory(category);
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-lg">
        {UI_TEXT.en.chooseCategory}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className="bg-white/90 hover:bg-white text-blue-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
            <span className="text-2xl font-bold">{category.name.en}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
