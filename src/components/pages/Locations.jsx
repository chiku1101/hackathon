import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCarSide, FaSearch } from 'react-icons/fa';

const Locations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');

  // Location data
  const locations = [
    {
      id: 1,
      city: 'New York',
      area: 'Manhattan',
      address: '123 Broadway, New York, NY 10013',
      phone: '+1 (212) 555-7890',
      email: 'nyc@driveluxe.com',
      hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm',
      image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      availableCars: 45,
      region: 'east',
      features: ['Airport shuttle', 'Express pickup', 'Premium lounge', 'Valet service']
    },
    {
      id: 2,
      city: 'Los Angeles',
      area: 'Beverly Hills',
      address: '789 Sunset Blvd, Los Angeles, CA 90028',
      phone: '+1 (310) 555-1234',
      email: 'la@driveluxe.com',
      hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      availableCars: 38,
      region: 'west',
      features: ['Airport shuttle', 'Express pickup', 'Premium lounge', 'Car delivery']
    },
    {
      id: 3,
      city: 'Miami',
      area: 'South Beach',
      address: '456 Ocean Drive, Miami, FL 33139',
      phone: '+1 (305) 555-6543',
      email: 'miami@driveluxe.com',
      hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm',
      image: 'https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      availableCars: 32,
      region: 'south',
      features: ['Airport shuttle', 'Beach delivery', 'Premium lounge', 'Convertible specialists']
    },
    {
      id: 4,
      city: 'Chicago',
      area: 'Downtown',
      address: '321 Michigan Ave, Chicago, IL 60601',
      phone: '+1 (312) 555-8901',
      email: 'chicago@driveluxe.com',
      hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      availableCars: 28,
      region: 'midwest',
      features: ['Airport shuttle', 'Express pickup', 'Winter vehicle specialists']
    },
    {
      id: 5,
      city: 'San Francisco',
      area: 'Union Square',
      address: '555 Market St, San Francisco, CA 94105',
      phone: '+1 (415) 555-2345',
      email: 'sf@driveluxe.com',
      hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm',
      image: 'https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      availableCars: 25,
      region: 'west',
      features: ['Airport shuttle', 'Electric vehicle specialists', 'Car delivery', 'Premium lounge']
    },
    {
      id: 6,
      city: 'Las Vegas',
      area: 'The Strip',
      address: '3570 Las Vegas Blvd, Las Vegas, NV 89109',
      phone: '+1 (702) 555-6789',
      email: 'vegas@driveluxe.com',
      hours: 'Mon-Sun: 7am-10pm',
      image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      availableCars: 52,
      region: 'west',
      features: ['24/7 pickup', 'Express pickup', 'Premium lounge', 'VIP concierge', 'Exotic cars']
    }
  ];

  // Filter locations based on search query and filter
  const filteredLocations = locations.filter(location => {
    const matchesSearch = 
      location.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
      location.area.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      currentFilter === 'all' || 
      location.region === currentFilter;
    
    return matchesSearch && matchesFilter;
  });

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'east', name: 'East Coast' },
    { id: 'west', name: 'West Coast' },
    { id: 'midwest', name: 'Midwest' },
    { id: 'south', name: 'South' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Locations</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Find a DriveLuxe location near you for premium car rental services
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setCurrentFilter(region.id)}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      currentFilter === region.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredLocations.length === 0 ? (
            <div className="text-center py-12">
              <FaMapMarkerAlt className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No locations found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find available locations.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLocations.map((location) => (
                <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={location.image} 
                      alt={`${location.city} - ${location.area}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-blue-600 text-white py-1 px-3 rounded-bl-lg">
                      <div className="flex items-center">
                        <FaCarSide className="mr-1" />
                        <span>{location.availableCars} cars available</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{location.city}</h3>
                    <p className="text-blue-600 mb-4">{location.area}</p>
                    
                    <div className="space-y-3 text-gray-600 mb-6">
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <FaPhone className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <FaClock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Location Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature, index) => (
                          <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition-colors flex-1">
                        Book at This Location
                      </button>
                      <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Map Section - This would typically be implemented with a mapping service */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Find Us on the Map</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Locate our rental centers across the country
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations; 