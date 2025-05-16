// src/pages/ProductDashboard.jsx
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CreateProductModal from '../components/CreateProductModal';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const categories = useMemo(
    () => ['All', ...new Set(products.map(p => p.category))],
    [products]
  );

  useEffect(() => {
    let result = [...products];
    if (searchQuery) {
      result = result.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    setFiltered(result);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, products]);

  // Handler passed to modal to add product
  const handleAddProduct = (newProduct) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-sky-700">🛒 Product Dashboard</h1>
        <button
          className="bg-sky-600 text-white px-4 py-2 rounded-md shadow hover:bg-sky-700 transition-all"
          onClick={() => setIsOpen(true)}
        >
          + Create Product
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoryFilter categories={categories} value={selectedCategory} onChange={setSelectedCategory} />
      </div>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] mb-6">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filtered.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />

      <CreateProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCreate={handleAddProduct}
      />
    </div>
  );
}

export default ProductDashboard;