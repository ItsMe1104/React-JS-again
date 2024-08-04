import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

  const { resId } = useParams();



  const resInfo = useRestaurantMenu();

  //Since, we have the restaurant infos are also integrated in our main API unlike having separate apis for separate restaurants, hence we need to search which restaurant we are searching about and get its index by comparing the 'id' of all restaurants with the given id
  let current_idx = 0;
  if (resInfo === null) return <Shimmer></Shimmer>
  for (let idx = 0; idx < resInfo.length; idx++) {
    if (resInfo[idx].id == resId) {
      current_idx = idx;
      break;
    }
  }

  const { veg, non_veg } = resInfo[current_idx]?.categories

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
      {Object.entries(veg).map((items, idx) => {

        let key2 = items[0];
        let value = items[1];

        return <h3 key={resInfo[current_idx].id + idx}>{key2 + " -> " + value}</h3>
      })}
      <br />

      <h2> Non-Veg :-</h2>
      {Object.entries(non_veg).map((items, idx) => {

        let key1 = items[0];
        let value1 = items[1];

        return <h3 key={resInfo[current_idx].id + idx}>{key1 + " -> " + value1}</h3>
      })}

    </div >
  )
}

export default RestaurantMenu;
