import React from 'react'
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaGasPump, FaCog, FaUsers, FaStar, FaArrowRight, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';

const FEATURED_CARS = [
  {
    id: 1,
    name: 'Tesla Model 3',
    category: 'Electric',
    price: 89,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    transmission: 'Automatic',
    seats: 5,
    rating: 4.9,
    fuelType: 'Electric',
    delay: '0ms'
  },
  {
    id: 2,
    name: 'BMW X5',
    category: 'SUV',
    price: 129,
    image: 'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    transmission: 'Automatic',
    seats: 5,
    rating: 4.8,
    fuelType: 'Petrol',
    delay: '100ms'
  },
  {
    id: 3,
    name: 'Mercedes-Benz C-Class',
    category: 'Luxury',
    price: 110,
    image: 'https://images.unsplash.com/photo-1549520018-2281f8d1a7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    transmission: 'Automatic',
    seats: 5,
    rating: 4.7,
    fuelType: 'Hybrid',
    delay: '200ms'
  },
  {
    id: 4,
    name: 'Porsche 911',
    category: 'Sports',
    price: 199,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac9725be22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    transmission: 'Automatic',
    seats: 2,
    rating: 5.0,
    fuelType: 'Petrol',
    delay: '300ms'
  }
];

const FeaturedCarCard = ({ car }) => {
  const getCategoryColor = (category) => {
    switch(category.toLowerCase()) {
      case 'electric': return 'from-emerald-400 via-green-500 to-teal-600';
      case 'suv': return 'from-blue-400 via-blue-500 to-indigo-600';
      case 'luxury': return 'from-violet-400 via-purple-500 to-pink-600';
      case 'sports': return 'from-rose-400 via-red-500 to-orange-600';
      default: return 'from-gray-400 via-gray-500 to-gray-600';
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.8) return 'bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900';
    if (rating >= 4.5) return 'bg-gradient-to-r from-green-400 to-emerald-500 text-emerald-900';
    return 'bg-gradient-to-r from-blue-400 to-indigo-500 text-indigo-900';
  };

  // Add a custom hover animation with delay
  const animationStyle = {
    transitionDelay: car.delay,
    transform: 'translateY(0)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg group transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl relative"
      style={animationStyle}
    >
      {/* Enhanced reveal border on hover with glow effect */}
      <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-500/80 group-hover:to-indigo-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 group-hover:blur-[1px]"></div>
      
      <div className="relative z-10 bg-white rounded-[10px] overflow-hidden">
        {/* Image section with enhanced hover effects */}
        <div className="relative h-56 bg-gray-200 overflow-hidden">
          {/* Image with enhanced zoom effect and brightness adjustment */}
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
          />
          
          {/* Enhanced category badge with animation */}
          <div className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(car.category)} shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
            {car.category}
          </div>
          
          {/* Enhanced price badge with animation */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg transform transition-all duration-300 group-hover:bg-white/95 group-hover:shadow-xl">
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">${car.price}</span>
            <span className="text-gray-500 text-xs">/day</span>
          </div>
          
          {/* Enhanced gradient overlay with stronger opacity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-5 w-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium text-lg">{car.name}</span>
                <div className={`flex items-center ${getRatingColor(car.rating)} rounded-full px-2.5 py-1 text-xs font-bold shadow-lg`}>
                  <FaStar className="mr-1 animate-pulse" />
                  <span>{car.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content section with enhanced styles */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{car.name}</h3>
          </div>
          
          {/* Features icons with enhanced visual effects */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-100 group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:border-blue-100 transition-all duration-300">
              <FaGasPump className="mb-1 text-blue-600 group-hover:scale-110 transform transition-transform duration-300" />
              <span className="text-xs font-medium text-gray-700">{car.fuelType}</span>
            </div>
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-100 group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:border-blue-100 transition-all duration-300">
              <FaCog className="mb-1 text-blue-600 group-hover:scale-110 transform transition-transform duration-300 group-hover:rotate-45" />
              <span className="text-xs font-medium text-gray-700">{car.transmission}</span>
            </div>
            <div className="flex flex-col items-center p-2.5 rounded-lg bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-100 group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:border-blue-100 transition-all duration-300">
              <FaUsers className="mb-1 text-blue-600 group-hover:scale-110 transform transition-transform duration-300" />
              <span className="text-xs font-medium text-gray-700">{car.seats} Seats</span>
            </div>
          </div>
          
          {/* Enhanced action buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <Link 
              to={`/cars/${car.id}`}
              className="text-sm font-medium flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group-hover:tracking-wider"
            >
              View Details
              <FaArrowRight className="ml-1 transform transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
            <button className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedCars = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Small animated particles */}
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-blue-400/20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-400/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-5 h-5 rounded-full bg-amber-400/20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700">Our Fleet</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
            Featured Vehicles
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our top-rated vehicles with the best prices and exceptional comfort
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_CARS.map((car) => (
            <FeaturedCarCard key={car.id} car={car} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link 
            to="/cars" 
            className="inline-flex items-center px-10 py-4 rounded-full font-medium text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Cars
            <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;