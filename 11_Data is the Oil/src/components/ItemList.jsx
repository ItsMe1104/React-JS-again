import React from 'react'

const ItemList = (props) => {

  return (
    <div>
      {
        Object.entries(props.items).map((item) => {
          return (
            <div className='flex justify-between p-2 m-1 border-gray-300 border-b-2'>
              <span className='font-bold'>{item[0]}</span>
              <span className='font-bold'> {item[1]}</span>
            </div>
          );
        })
      }
    </div>
  )
}

export default ItemList;
