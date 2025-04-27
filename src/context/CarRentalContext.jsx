import React, { createContext, useContext, useState, useEffect } from 'react';

// Sample car data
const SAMPLE_CARS = [
  {
    id: 1,
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    category: 'Electric',
    price: 89,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    transmission: 'Automatic',
    seats: 5,
    rating: 4.9,
    fuelType: 'Electric'
  },
  {
    id: 2,
    make: 'BMW',
    model: 'X5',
    year: 2022,
    category: 'SUV',
    price: 129,
    image: 'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    transmission: 'Automatic',
    seats: 5,
    rating: 4.8,
    fuelType: 'Petrol'
  },
  {
    id: 3,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    category: 'Luxury',
    price: 110,
    image: 'https://images.unsplash.com/photo-1549520018-2281f8d1a7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    transmission: 'Automatic',
    seats: 5,
    rating: 4.7,
    fuelType: 'Hybrid'
  },
  {
    id: 4,
    make: 'Porsche',
    model: '911',
    year: 2023,
    category: 'Sports',
    price: 199,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac9725be22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    transmission: 'Automatic',
    seats: 2,
    rating: 5.0,
    fuelType: 'Petrol'
  }
];

// Create the context
const CarRentalContext = createContext(null);

// Custom hook to use the context
export const useCarRental = () => {
  const context = useContext(CarRentalContext);
  if (context === null) {
    throw new Error('useCarRental must be used within a CarRentalProvider');
  }
  return context;
};

// Provider component
export const CarRentalProvider = ({ children }) => {
  // State for cars and filtering
  const [cars, setCars] = useState(SAMPLE_CARS);
  const [filteredCars, setFilteredCars] = useState(SAMPLE_CARS);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: null,
    dropoffDate: null,
  });

  // Effect to filter cars when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter(car => car.category.toLowerCase() === activeFilter.toLowerCase()));
    }
  }, [activeFilter, cars]);

  const calculateTotalPrice = () => {
    // Implement your price calculation logic
    return 0;
  };

  const filterCars = (category) => {
    setActiveFilter(category);
  };

  // Values provided by the context
  const value = {
    cars,
    filteredCars,
    activeFilter,
    setActiveFilter,
    selectedCar,
    setSelectedCar,
    bookingDetails,
    setBookingDetails,
    calculateTotalPrice,
    filterCars
  };

  return (
    <CarRentalContext.Provider value={value}>
      {children}
    </CarRentalContext.Provider>
  );
};

export default CarRentalContext;