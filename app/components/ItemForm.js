import { useState } from 'react';
import useItemStore from '@/store/useItemStore';

const ItemForm = () => {
  const [name, setName] = useState('');

  const {addItem} = useItemStore()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const item = {name}

    const response = await fetch('https://addtocart-backend-4ph3.onrender.com/api/items', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json'
        }
    })

    const json = await response.json()

    addItem(json)

    setName('')
  }

  return (
    <form className='flex flex-col justify-center items-center w-[15rem] gap-6' onSubmit={handleSubmit}>
      <input
        className='p-2 w-[80%] bg-[#dce1eb] sm:text-[1.5rem] rounded-lg'
        type='text'
        placeholder='add item'
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button className='p-2 w-[80%] bg-[#ac485a] hover:bg-[brown] text-white sm:text-[1.5rem] rounded-lg'>Add to Cart</button>
    </form>
  );
};

export default ItemForm;
