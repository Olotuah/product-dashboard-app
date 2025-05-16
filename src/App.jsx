// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDashboard from './pages/ProductDashboard';
import NotFound from './pages/NotFound';


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-100 text-gray-800">
        <Routes>
          <Route path="/" element={<ProductDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}