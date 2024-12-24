import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = (props) => {
  console.log(props);

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  }

  // To get the length we have to convert the object into array just for length purpose

  const category_arr = Object.entries(props.category)
  return (
    <div>
      {/* Accordian Container */}

      <div className="w-7/12 mx-auto my-5 bg-gray-200 shadow-xl px-32 py-10">

        {/* Accordian Header */}

        <div className='flex justify-between mb-12 cursor-pointer' onClick={handleClick}>
          <span className='font-bold text-3xl'>{props.type} ({category_arr.length})</span>
          <span className='font-bold text-3xl'>⬇️</span>
        </div>

        {/* Accordian Body */}

        {showItems === true ? <ItemList items={props.category} /> : <></>}
      </div>
    </div >
  )
}

export default RestaurantCategory;
