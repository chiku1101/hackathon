import React from 'react';
import Hero from '../home/Hero';
import HowItWorks from '../home/HowItWorks';
import FeaturedCars from '../home/FeaturedCars';

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated background blob */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <HowItWorks />
        <FeaturedCars />
      </div>
    </div>
  );
};

export default Home;