// src/components/CreateProductModal.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z.string().min(2, 'Title is required'),
  price: z.preprocess((val) => parseFloat(val), z.number().min(1, 'Price must be at least $1')),
  category: z.string().min(2, 'Category is required'),
  image: z.string().url('Image must be a valid URL'),
});

export default function CreateProductModal({ isOpen, onClose, onCreate }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { title: '', price: '', category: '', image: '' },
  });

  const submit = (data) => {
    onCreate({ id: Date.now(), ...data });
    reset();
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">Create Product</h2>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input {...register('title')} className="w-full border border-gray-300 p-2 rounded" />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Price ($)</label>
            <input type="number" step="0.01" {...register('price')} className="w-full border border-gray-300 p-2 rounded" />
            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <input {...register('category')} className="w-full border border-gray-300 p-2 rounded" />
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input {...register('image')} className="w-full border border-gray-300 p-2 rounded" />
            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}