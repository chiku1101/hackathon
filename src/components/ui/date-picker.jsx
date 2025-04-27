import React from 'react';

export function DatePicker({ date, setDate, className = "", ...props }) {
  const handleChange = (e) => {
    setDate(new Date(e.target.value));
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <input
      type="date"
      value={formatDate(date)}
      onChange={handleChange}
      className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}