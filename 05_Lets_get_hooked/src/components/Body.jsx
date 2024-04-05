import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      {/* Search Bar */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            resList = resList.filter((restaurant) => {
              return restaurant.stars > 4.0;
            });

            setListOfRestaurants(resList);
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
