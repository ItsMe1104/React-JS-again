import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log("Renedered");
  return (
    <div className="body">
      {/* Filter 4.0+ Restaurants */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //FILTER LOGIC
            filteredList = resList.filter((restaurant) => {
              return restaurant.stars > 4.0;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Container */}
      <div className="res-container">
        {listOfRestaurants.map((restuarant) => (
          <RestaurantCard key={restuarant.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
