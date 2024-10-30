'use client';

import useItemStore from '@/store/useItemStore';

const ItemCard = ({ item }) => {
  const { deleteItem } = useItemStore();

  const handleDelete = async () => {
    const response = await fetch(
      `https://addtocart-backend-4ph3.onrender.com/api/items/${item._id}`,
      {
        method: 'DELETE',
      }
    );
    const json = await response.json();

    console.log(json);

    deleteItem(item._id);
  };

  return (
    <span
      className='flex items-center justify-center bg-[#fffdf8] cursor-pointer p-[.5rem_1rem] rounded-lg shadow-md flex-1'
      onClick={handleDelete}
    >
      {item.name}
    </span>
  );
};

export default ItemCard;
