import React from 'react'
import { useState } from 'react';
import { useCarRental } from '../../context/CarRentalContext';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import BookingForm from '../booking/BookingForm';

const Booking = () => {
  const { selectedCar, bookingDetails, calculateTotalPrice } = useCarRental();
  const [formStep, setFormStep] = useState(1);
  
  const handleNextStep = () => {
    setFormStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setFormStep(prev => prev - 1);
  };
  
  const totalPrice = calculateTotalPrice();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Booking</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* Progress steps */}
            <div className="flex justify-between mb-8">
              <div className={`flex flex-col items-center ${formStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="mt-2">Car Selection</span>
              </div>
              <div className={`flex flex-col items-center ${formStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="mt-2">Personal Details</span>
              </div>
              <div className={`flex flex-col items-center ${formStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="mt-2">Payment</span>
              </div>
              <div className={`flex flex-col items-center ${formStep >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  4
                </div>
                <span className="mt-2">Confirmation</span>
              </div>
            </div>
            
            {/* Step content */}
            <div className="mt-8">
              {formStep === 1 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Select Your Car</h2>
                  <BookingForm />
                  
                  <div className="mt-8 flex justify-end">
                    <button 
                      onClick={handleNextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md"
                    >
                      Continue to Personal Details
                    </button>
                  </div>
                </div>
              )}
              
              {formStep === 2 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
                  {/* Personal details form would go here */}
                  
                  <div className="mt-8 flex justify-between">
                    <button 
                      onClick={handlePrevStep}
                      className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleNextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}
              
              {formStep === 3 && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
                  {/* Payment form would go here */}
                  
                  <div className="mt-8 flex justify-between">
                    <button 
                      onClick={handlePrevStep}
                      className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleNextStep}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md"
                    >
                      Complete Booking
                    </button>
                  </div>
                </div>
              )}
              
              {formStep === 4 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">Booking Confirmed!</h2>
                  <p className="text-gray-600 mb-8">Your booking has been confirmed. You will receive a confirmation email shortly.</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md">
                    View Booking Details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;