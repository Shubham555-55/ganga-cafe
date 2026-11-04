import React from 'react'
import {dishes} from '../data'

const MenueCard = () => {
  return (
    <div className='flex justify-center items-center'>
       <div className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden p-4">
      {dishes.map((item) => {
        return (
          <div key={item.id} className="mb-4">
            <h1>{item.name}</h1>
            <h1>₹{item.price}</h1>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default MenueCard