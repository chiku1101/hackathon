import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cars from './components/pages/Cars';
import CarDetails from './components/pages/CarDetails';
import Booking from './components/pages/Booking';
import Profile from './components/pages/Profile';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Locations from './components/pages/Locations';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { CarRentalProvider } from './context/CarRentalContext';

function App() {
  return (
    <AuthProvider>
      <CarRentalProvider>
        <HashRouter>
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/cars/:id" element={<CarDetails />} />
                <Route path="/booking" element={
                  <ProtectedRoute>
                    <Booking />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </CarRentalProvider>
    </AuthProvider>
  );
}

export default App;
