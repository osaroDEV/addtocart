'use client';

import { useEffect } from 'react';

import useItemStore from '@/store/useItemStore';
import ItemCard from './components/ItemCard';
import ItemForm from './components/ItemForm';

export default function Home() {
  const { items, setItems } = useItemStore();

  const getItems = async () => {
    const response = await fetch('https://addtocart-backend-4ph3.onrender.com/api/items');

    const json = await response.json();

    setItems(json);

    console.log(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className='bg-[#eef0f4] flex items-center justify-center min-h-[100vh] h-auto py-6'>
      <main className='border-[#800080] border-4 rounded-2xl w-[75%] sm:w-[50%] min-h-[calc(100vw*.1)] flex flex-col items-center gap-10 py-10'>
      <div className='w-1/3 bg-red-500 h-20'></div>
      <ItemForm />
        <>{items.length !== 0 ? (
          <div className='flex flex-col w-full'>
          <div className='w-full flex flex-wrap gap-2 p-4'>
            {items.map((item) => (
                <ItemCard key={item._id} item={item} />
            ))}
            </div>
          </div>
        ) : (
          <p>Nothing to display yet</p>
        )}</>
      </main>
    </div>
  );
}
