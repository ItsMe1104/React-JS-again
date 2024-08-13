import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = (props) => {
  console.log(props);

  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  }

  return (
    <div>
      {/* Header */}
      <div></div>
      <div className="w-7/12 mx-auto my-5 bg-gray-200 shadow-xl p-10">
        <div className='flex justify-between mb-10 cursor-pointer' onClick={toggle}>
          <span className='font-bold text-3xl'>{props.type[0]} ({Object.entries(props.type[1]).length})</span>
          <span className='font-bold text-3xl'>⬇️</span>
        </div>
        {/* Accordian Body */}
        {collapse === true ? <ItemList items={props.type[1]} /> : <></>}
      </div>
    </div >
  )
}

export default RestaurantCategory;
