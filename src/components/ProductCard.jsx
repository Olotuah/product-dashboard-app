// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-4 flex flex-col justify-between border border-gray-100 w-64 h-72">
      <div className="relative w-full h-36 mb-4 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain max-h-full w-auto"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-sm font-semibold mb-1 text-gray-900 truncate">{product.title}</h2>
        <p className="text-xs text-gray-500 mb-2 truncate">{product.category}</p>
      </div>
      <div>
        <p className="text-base font-bold text-sky-600">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
