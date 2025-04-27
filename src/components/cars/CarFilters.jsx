import React from 'react'
import { useState } from 'react';
import { useCarRental } from '../../context/CarRentalContext';

const CarFilters = () => {
  const { filterCars } = useCarRental();
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Cars' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'suv', name: 'SUVs' },
    { id: 'sports', name: 'Sports' },
    { id: 'electric', name: 'Electric' },
    { id: 'economy', name: 'Economy' },
  ];
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    filterCars(categoryId);
  };
  
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarFilters;