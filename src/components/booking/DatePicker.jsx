import React from 'react'
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const DatePicker = ({ selectedDate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDateChange = (e) => {
    onChange(e.target.value);
  };
  
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaCalendarAlt className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="date"
        value={selectedDate || ''}
        onChange={handleDateChange}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default DatePicker;