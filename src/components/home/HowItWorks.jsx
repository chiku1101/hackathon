import React from 'react';
import { FaCarSide, FaCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Choose Your Car',
    description: 'Browse our diverse fleet and select the perfect vehicle for your needs.',
    icon: <FaCarSide className="w-8 h-8 text-white" />,
    gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    delay: '0ms'
  },
  {
    id: 2,
    title: 'Pick Date & Location',
    description: 'Choose when and where you want to pick up and return your rental car.',
    icon: <FaCalendarAlt className="w-8 h-8 text-white" />,
    gradient: 'from-purple-500 via-purple-600 to-pink-600',
    delay: '100ms'
  },
  {
    id: 3,
    title: 'Enjoy Your Ride',
    description: 'Hit the road with confidence in our well-maintained, premium vehicles.',
    icon: <FaMapMarkedAlt className="w-8 h-8 text-white" />,
    gradient: 'from-amber-400 via-amber-500 to-orange-600',
    delay: '200ms'
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 opacity-80"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100 to-yellow-100 rounded-full translate-y-1/2 -translate-x-1/3 opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
            Easy as 1-2-3
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Renting a car with us is quick and simple. Follow these easy steps and hit the road in no time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.id} 
              className="relative rounded-xl overflow-hidden group transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: step.delay }}
            >
              {/* Card with gradient border */}
              <div className="absolute inset-0 p-1 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-600"></div>
              
              <div className="relative bg-white p-8 rounded-lg h-full flex flex-col">
                {/* Gradient circle with icon */}
                <div className={`w-20 h-20 rounded-xl mb-8 flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {step.icon}
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="flex items-center justify-center text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-8 h-8 mr-3 shadow-md">
                    {step.id}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                </div>
                
                <p className="text-gray-600 flex-grow">
                  {step.description}
                </p>
                
                {/* Hover shine effect */}
                <div className="absolute -inset-x-3 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-10 py-4 rounded-full font-medium text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;