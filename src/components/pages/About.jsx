import React from 'react';
import { FaCheckCircle, FaCarSide, FaUserShield, FaStar } from 'react-icons/fa';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      bio: 'Sarah has over 15 years of experience in the automotive industry and founded DriveLuxe with a vision to revolutionize car rentals.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      bio: 'Michael oversees all operational aspects of DriveLuxe, ensuring seamless service delivery and customer satisfaction.'
    },
    {
      id: 3,
      name: 'Jessica Patel',
      position: 'Fleet Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      bio: 'Jessica manages our diverse fleet of vehicles, ensuring they are well-maintained and ready for our customers.'
    }
  ];

  // Company values
  const values = [
    {
      id: 1,
      title: 'Premium Quality',
      description: 'We maintain our vehicles to the highest standards to ensure safety and comfort.',
      icon: <FaStar className="w-6 h-6 text-blue-600" />
    },
    {
      id: 2,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.',
      icon: <FaUserShield className="w-6 h-6 text-blue-600" />
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'We continuously improve our services with the latest technology and features.',
      icon: <FaCarSide className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About DriveLuxe</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Premium car rental service providing luxury and comfort for all your travel needs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, DriveLuxe began with a simple mission: to provide premium car rental services with a focus on customer satisfaction and exceptional vehicles.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small fleet of luxury cars has grown into a comprehensive selection of vehicles catering to various needs, from business trips to family vacations.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of customers across the country, offering them not just cars, but experiences they'll remember.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    'Premium vehicles maintained to the highest standards',
                    'Flexible rental options tailored to your needs',
                    'Exceptional customer service available 24/7',
                    'Transparent pricing with no hidden fees',
                    'Convenient pickup and drop-off locations'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1617814076668-8dfc6fe4b667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury car showroom" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="font-semibold">Established 2015</p>
                <p className="text-sm text-blue-100">Excellence in car rentals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at DriveLuxe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals behind DriveLuxe's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 