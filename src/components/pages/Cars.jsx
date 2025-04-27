import React from 'react'
import { useState } from 'react';
import { useCarRental } from '../../context/CarRentalContext';
import CarFilters from '../cars/CarFilters';
import CarGrid from '../cars/CarGrid';

const Cars = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Fleet</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <CarFilters />
            </div>
            
            <div className="lg:col-span-3">
              <CarGrid />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cars;