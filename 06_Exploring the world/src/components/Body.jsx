import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

import React from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    // fetchData();    Swiggy's api is not public hence using mock data

    fetchMockData();
  }, []);

  //Swiggy doesn't provide a public API for accessing their data. They do not officially expose an API for third-party use.

  /* const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     );

        const json = await data.json();
        console.log(json);
   };
 */
  //Hence, using mockData only for now

  const fetchMockData = () => {
    //using setTimeout just to give a 5 second delay as if we are fetching data from an api

    setTimeout(() => {
      setListOfRestaurants(resList);
    }, 500);
  };

  /* Conditional Rendering :-
    if (listOfRestaurants.length === 0) {
      For Loader...
      return <h1>Loading ...</h1>;


      For Shimmer UI...
      return (<Shimmer />)
  }
  */

  // Using ternary operator instead of if-else conditional rendering 
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter((restaurant) => {
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
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              resData={restaurant}
            ></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
