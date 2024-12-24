import React from 'react'

const ItemList = (props) => {

  // To use map, we have to convert the received items objects into array containing name and price
  const items = Object.entries(props.items);

  return (
    <div>
      {
        items.map((item, idx) => {
          return (
            <div className='flex justify-between py-2 my-1 border-gray-300 border-b-2' key={idx}>
              <span className='font-bold'>{item[0]}</span>
              <div>
                <span className='font-bold'> ₹ {item[1]}</span>
                <button className='ml-10 px-1 border-gray-600 border-2 rounded-md bg-blue-200 shadow-lg'>Add +</button>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default ItemList;
