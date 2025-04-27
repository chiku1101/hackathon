import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  // Office locations
  const offices = [
    {
      id: 1,
      city: 'New York',
      address: '123 Broadway, Suite 500, New York, NY 10013',
      phone: '+1 (212) 555-7890',
      email: 'nyc@driveluxe.com',
      hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm'
    },
    {
      id: 2,
      city: 'Los Angeles',
      address: '789 Sunset Blvd, Los Angeles, CA 90028',
      phone: '+1 (310) 555-1234',
      email: 'la@driveluxe.com',
      hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm'
    },
    {
      id: 3,
      city: 'Miami',
      address: '456 Ocean Drive, Miami, FL 33139',
      phone: '+1 (305) 555-6543',
      email: 'miami@driveluxe.com',
      hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to our team with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>There was an error sending your message. Please try again later.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Have a question about our car rental services? Our team is here to help. Reach out to us using any of the methods below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaPhone className="text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (800) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@driveluxe.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Headquarters</p>
                      <p className="text-gray-600">123 Rental Street, Carville, CA 90210, USA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday: 8am - 8pm EST</p>
                <p className="text-gray-600">Saturday - Sunday: 9am - 6pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Locations</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Visit one of our office locations across the country
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                  
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <FaPhone className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <FaEnvelope className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{office.email}</span>
                    </div>
                    
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Working Hours:</p>
                      <p>{office.hours}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md shadow-sm transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - In a real application, you would integrate Google Maps or another mapping service */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

export default Contact; 