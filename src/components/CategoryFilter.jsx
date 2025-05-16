// src/components/CategoryFilter.jsx
import React from 'react';

function CategoryFilter({ categories, value, onChange }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full sm:w-1/3 border border-gray-300 p-2 rounded"
    >
      {categories.map((cat, index) => (
        <option key={index} value={cat}>{cat}</option>
      ))}
    </select>
  );
}

export default CategoryFilter;