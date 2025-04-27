import React from 'react'
import { FaGasPump, FaUsers, FaCog, FaStar } from "react-icons/fa";
import { useCarRental } from "../../context/CarRentalContext";
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  const { setSelectedCar } = useCarRental();

  const handleBookNow = () => {
    setSelectedCar(car);
    // Navigate to booking page - requires react-router-dom setup
    console.log("Navigate to booking for car:", car.id); 
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          {car.category}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{car.make} {car.model}</h3>
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">${car.price}</span>
            <span className="text-gray-500 text-xs ml-1">/day</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{car.rating}</span>
          </div>
          <div className="text-gray-500">Year: {car.year}</div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-500">
          <div className="flex flex-col items-center">
            <FaGasPump className="mb-1 text-gray-400" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCog className="mb-1 text-gray-400" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="mb-1 text-gray-400" />
            <span>{car.seats} Seats</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/cars/${car.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details
          </Link>
          <button 
            onClick={handleBookNow}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;