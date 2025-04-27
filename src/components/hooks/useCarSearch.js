
import { useState, useEffect } from 'react';
import { useCarRental } from '../../context/CarRentalContext';

const useCarSearch = (initialFilters = {}) => {
  const { cars } = useCarRental();
  const [filters, setFilters] = useState({
    category: 'all',
    priceMin: 0,
    priceMax: 1000,
    seats: 0,
    ...initialFilters
  });
  const [searchResults, setSearchResults] = useState(cars);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    // Simulate API call with setTimeout
    const timeoutId = setTimeout(() => {
      const filtered = cars.filter(car => {
        // Filter by category
        if (filters.category !== 'all' && car.category !== filters.category) {
          return false;
        }
        
        // Filter by price
        if (car.pricePerDay < filters.priceMin || car.pricePerDay > filters.priceMax) {
          return false;
        }
        
        // Filter by seats
        if (filters.seats > 0 && car.seats < filters.seats) {
          return false;
        }
        
        return true;
      });
      
      setSearchResults(filtered);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [cars, filters]);
  
  const updateFilters = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };
  
  return {
    filters,
    searchResults,
    loading,
    updateFilters
  };
};

export default useCarSearch;