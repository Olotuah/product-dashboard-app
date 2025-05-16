// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full sm:w-1/2 border border-gray-300 p-2 rounded"
    />
  );
}

export default SearchBar;
