import React from 'react'
import { useEffect } from 'react';
import { FaGasPump, FaUsers, FaCog, FaSuitcase, FaCheckCircle } from 'react-icons/fa';
import { useCarRental } from '../../context/CarRentalContext';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import BookingForm from '../booking/BookingForm';

const CarDetails = ({ carId }) => {
  const { getCarById, selectCar, selectedCar } = useCarRental();
  
  useEffect(() => {
    // Get car details when component mounts
    selectCar(carId);
  }, [carId, selectCar]);
  
  if (!selectedCar) {
    return <div>Loading...</div>;
  }
  
  const features = [
    'Bluetooth connectivity',
    'Navigation system',
    'Leather seats',
    'Backup camera',
    'Keyless entry',
    'Cruise control',
    'Climate control',
    'Premium sound system'
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Car images */}
            <div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={selectedCar.image} 
                  alt={`${selectedCar.make} ${selectedCar.model}`} 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            
            {/* Car details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {selectedCar.make} {selectedCar.model}
              </h1>
              <p className="text-xl text-gray-600 mt-2">{selectedCar.year} • {selectedCar.category}</p>
              
              <div className="mt-6">
                <div className="text-3xl font-bold text-blue-600">
                  ${selectedCar.pricePerDay}
                  <span className="text-lg text-gray-500 font-normal ml-2">per day</span>
                </div>
                
                {selectedCar.discount && (
                  <div className="mt-2">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold">
                      {selectedCar.discount}% OFF
                    </span>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center text-gray-700">
                  <FaUsers className="mr-2 text-blue-500" />
                  <span>{selectedCar.seats} Seats</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaGasPump className="mr-2 text-blue-500" />
                  <span>{selectedCar.fuelType}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaCog className="mr-2 text-blue-500" />
                  <span>{selectedCar.transmission}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaSuitcase className="mr-2 text-blue-500" />
                  <span>{selectedCar.luggage} Bags</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book This Car</h2>
            <BookingForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CarDetails;