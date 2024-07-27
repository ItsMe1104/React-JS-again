import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import resList from "../utils/mockData";
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();


  // Use empty array inside useEffect() as we only want an api call to be made during initial render
  useEffect(() => {

    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setTimeout(() => {
      setResInfo(resList)
    }, 500);
  }

  let current_idx = 0;
  if (resInfo === null) return <Shimmer></Shimmer>
  for (let idx = 0; idx < resInfo.length; idx++) {
    if (resInfo[idx].id == resId) {
      current_idx = idx;
      break;
    }
  }


  return (resInfo === null) ? (<Shimmer />) : (
    <div className='menu'>
      <h1>{resInfo[current_idx].resName}</h1>
      <h3>{resInfo[current_idx].cuisine.join(", ") + " - " + resInfo[current_idx].costForTwo} </h3>

      <br />
      <h1>Menu</h1>
      {/*  
      <ul>
         {itemsCard.map(item => <li key={ }>{item.category[0]}</li>)} 
       {itemsCard.map(item => <li key={ }>{item.category[1]}</li>)}  
    </ul>
    */}

      <h2>Categories :-</h2>
      <br />
      <h2> Veg :-</h2>
      {Object.entries(resInfo[current_idx].categories.veg).map(items => {

        let key = items[0];
        let value = items[1];

        return <h3>{key + " -> " + value}</h3>
      })}
      <br />

      <h2> Non-Veg :-</h2>
      {Object.entries(resInfo[current_idx].categories.non_veg).map(items => {

        let key = items[0];
        let value = items[1];

        return <h3>{key + " -> " + value}</h3>
      })}

    </div >
  )
}

export default RestaurantMenu;
