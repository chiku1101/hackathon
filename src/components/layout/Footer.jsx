import React from 'react'
import { FaCar, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <FaCar className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">DriveLuxe</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium car rental service providing luxury and comfort for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">Cars</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Car Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Car Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">Luxury</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">SUVs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">Electric</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">Convertibles</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400">Economy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Rental Street, Carville, CA 90210, USA
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">info@driveluxe.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DriveLuxe. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-blue-400 mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 mx-2">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 mx-2">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;