import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaEnvelope, FaIdCard } from 'react-icons/fa';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null; // Should not happen due to ProtectedRoute
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-blue-600 px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-white">Your Profile</h1>
          <p className="mt-1 text-sm text-blue-100">Manage your account and booking preferences</p>
        </div>
        
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 mb-6 sm:mb-0 flex flex-col items-center">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="h-32 w-32 rounded-full object-cover border-4 border-blue-100"
                />
              ) : (
                <div className="h-32 w-32 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUser className="h-16 w-16 text-blue-500" />
                </div>
              )}
              
              <button 
                className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Change Photo
              </button>
            </div>
            
            <div className="sm:w-2/3 sm:pl-8">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-md mb-3">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <FaIdCard className="mr-2" /> Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.name}
                  </dd>
                </div>
                
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-md mb-3">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <FaEnvelope className="mr-2" /> Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.email}
                  </dd>
                </div>
                
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-md">
                  <dt className="text-sm font-medium text-gray-500">Account ID</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.id}
                  </dd>
                </div>
              </dl>
              
              <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4">
                <button 
                  className="mb-3 sm:mb-0 w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Edit Profile
                </button>
                <button 
                  onClick={logout}
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Your Rental History</h2>
          <p className="mt-1 text-sm text-gray-500">View your past and upcoming rentals</p>
        </div>
        
        <div className="px-4 py-12 text-center text-gray-500">
          You have no rental history yet.
        </div>
      </div>
    </div>
  );
};

export default Profile;