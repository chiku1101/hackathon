import React from 'react'
import { useState } from "react";
import { FaMapMarkerAlt, FaCar } from "react-icons/fa";
import { useCarRental } from "../../context/CarRentalContext";
import DatePicker from "./DatePicker";

const BookingForm = () => {
  const { bookingDetails, setBookingDetails } = useCarRental();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleDateChange = (field, date) => {
    setBookingDetails(prev => ({
      ...prev,
      [field]: date
    }));
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="pickupLocation"
              value={bookingDetails.pickupLocation}
              onChange={handleInputChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter pickup location"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dropoff Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="dropoffLocation"
              value={bookingDetails.dropoffLocation}
              onChange={handleInputChange}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter dropoff location"
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Date
          </label>
          <DatePicker 
            selectedDate={bookingDetails.pickupDate}
            onChange={(date) => handleDateChange('pickupDate', date)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dropoff Date
          </label>
          <DatePicker 
            selectedDate={bookingDetails.dropoffDate}
            onChange={(date) => handleDateChange('dropoffDate', date)}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;