import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

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
  const categories_name = [["Veg - Food", veg], ["Non Veg - Food", non_veg]]
  return (resInfo === null) ? (<Shimmer />) : (
    <div className='text-center'>
<<<<<<< HEAD
      <h1 className='font-bold mt-20 mb-6 text-7xl'>{resInfo[current_idx].resName}</h1>
      <h3 className="font-bold text-4xl mb-28">{resInfo[current_idx].cuisine.join(", ") + " - " + resInfo[current_idx].costForTwo} </h3>

      {/* Categories */}

      {Object.entries(resInfo[current_idx]?.categories).map((items, idx) => {

        return <RestaurantCategory key={idx} type={categories_name[idx]}  ></RestaurantCategory>
      })}
=======
      <h1 className='font-bold my-6 text-7xl'>{resInfo[current_idx].resName}</h1>
      <h3 className="font-bold text-4xl">{resInfo[current_idx].cuisine.join(", ") + " - " + resInfo[current_idx].costForTwo} </h3>

      {/* Categories */}

>>>>>>> b13cbca5089bcad1e7d5a818cb71aedfda049ae4

    </div >
  )
}

export default RestaurantMenu;
