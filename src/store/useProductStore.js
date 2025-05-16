// src/store/useProductStore.js
import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (items) => set({ products: items }),
  addProduct: (product) => set((state) => ({ products: [product, ...state.products] })),
}));

export default useProductStore;