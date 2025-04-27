import React from 'react';

export function DropdownMenu({ children }) {
  return <div className="relative inline-block text-left">{children}</div>;
}

export function DropdownMenuTrigger({ children, asChild }) {
  if (asChild) {
    return children;
  }
  return (
    <button className="inline-flex justify-center items-center">
      {children}
    </button>
  );
}

export function DropdownMenuContent({ children, align = "right" }) {
  const alignmentClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 transform -translate-x-1/2"
  };

  return (
    <div className={`absolute ${alignmentClasses[align]} mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}>
      <div className="py-1">{children}</div>
    </div>
  );
}

export function DropdownMenuItem({ children, className = "", ...props }) {
  return (
    <button
      className={`w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${className}`}
      role="menuitem"
      {...props}
    >
      {children}
    </button>
  );
}