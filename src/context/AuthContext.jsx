import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext(null);

// Custom hook to use the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // In a real app, you would make an API call here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock successful login
        if (email && password) {
          const userData = { 
            id: 1, 
            name: 'John Doe', 
            email: email,
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
          };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  };

  // Register function
  const register = (name, email, password) => {
    // In a real app, you would make an API call here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock successful registration
        if (name && email && password) {
          const userData = { 
            id: Math.floor(Math.random() * 1000), 
            name: name, 
            email: email,
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
          };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid registration data'));
        }
      }, 500);
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Values provided by the context
  const value = {
    user,
    isLoading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 