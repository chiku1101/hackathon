import React from 'react'
import { useCarRental } from '../../context/CarRentalContext';
import CarCard from './CarCard';

const CarGrid = () => {
  const { filteredCars } = useCarRental();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700">No cars found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
};

export default CarGrid;