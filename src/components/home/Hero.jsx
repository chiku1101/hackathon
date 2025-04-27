import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaCar, FaSearch } from "react-icons/fa";
import { DatePicker } from "../ui/date-picker";

const Hero = () => {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date(new Date().setDate(new Date().getDate() + 3)));
  const [pickupLocation, setPickupLocation] = useState("");
  const [carType, setCarType] = useState("");

  const handleSearch = () => {
    console.log({
      pickupLocation,
      pickupDate,
      returnDate,
      carType
    });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-2 w-2 rounded-full bg-white/20 top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute h-3 w-3 rounded-full bg-white/30 top-1/3 left-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute h-2 w-2 rounded-full bg-white/20 top-2/3 left-1/3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute h-4 w-4 rounded-full bg-white/10 top-1/2 left-3/4 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute h-3 w-3 rounded-full bg-white/20 top-3/4 left-1/4 animate-pulse" style={{animationDelay: '0.7s'}}></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/car-pattern.svg')] bg-repeat"></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-indigo-600/30 animate-gradient-x"></div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Drive Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 drop-shadow-sm">Dream Car</span> Today
          </h1>
          <p className="mt-6 text-xl text-blue-100/90 max-w-3xl mx-auto font-light">
            Experience the ultimate in luxury and performance with our premium car rental service.
          </p>
        </div>
        
        {/* Search form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto border border-white/20 relative overflow-hidden">
          {/* Glass reflections */}
          <div className="absolute -inset-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-80 rounded-2xl"></div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">Pickup Location</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                  <select 
                    value={pickupLocation} 
                    onChange={e => setPickupLocation(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-lg shadow-sm focus:ring-amber-400 focus:border-amber-400 bg-white/10 backdrop-blur-md text-white"
                  >
                    <option value="" className="text-gray-900">Select location</option>
                    <option value="nyc" className="text-gray-900">New York City</option>
                    <option value="la" className="text-gray-900">Los Angeles</option>
                    <option value="chicago" className="text-gray-900">Chicago</option>
                    <option value="miami" className="text-gray-900">Miami</option>
                    <option value="vegas" className="text-gray-900">Las Vegas</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">Pickup Date</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 z-10" />
                  <DatePicker 
                    date={pickupDate} 
                    setDate={setPickupDate} 
                    className="pl-10 w-full py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">Return Date</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 z-10" />
                  <DatePicker 
                    date={returnDate} 
                    setDate={setReturnDate} 
                    className="pl-10 w-full py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">Car Type</label>
                <div className="relative">
                  <FaCar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                  <select 
                    value={carType} 
                    onChange={e => setCarType(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-lg shadow-sm focus:ring-amber-400 focus:border-amber-400 bg-white/10 backdrop-blur-md text-white"
                  >
                    <option value="" className="text-gray-900">Select car type</option>
                    <option value="luxury" className="text-gray-900">Luxury</option>
                    <option value="suv" className="text-gray-900">SUV</option>
                    <option value="sports" className="text-gray-900">Sports</option>
                    <option value="electric" className="text-gray-900">Electric</option>
                    <option value="economy" className="text-gray-900">Economy</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex justify-center">
              <button 
                className="px-8 py-4 text-base md:text-lg font-medium rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 hover:from-amber-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 flex items-center"
                onClick={handleSearch}
              >
                <FaSearch className="mr-2" />
                Find Your Car
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;