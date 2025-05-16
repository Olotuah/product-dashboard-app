// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-50 to-white p-6">
      <h1 className="text-6xl font-extrabold text-sky-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page not found</p>
      <Link
        to="/"
        className="px-5 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
