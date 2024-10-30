'use client';

import { create } from 'zustand';

const useItemStore = create((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  addItem: (item) => set((state) => ({ items: [item, ...state.items] })),
  deleteItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item._id !== id) })),
  // updateItem: (updatedItem) =>
  //   set((state) => ({
  //     items: state.items.map((item) =>
  //       item._id === updatedItem._id ? updatedItem : item
  //     ),
    // })),
  
}));

export default useItemStore;
