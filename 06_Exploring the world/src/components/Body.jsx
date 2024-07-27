import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import React from "react";
import ShimmerLoad from "./ShimmerLoad";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [newList, setNewList] = useState([]);
  const [searchWord, setSearchWord] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showShimmer, setShowShimmer] = useState(true);



  useEffect(() => {
    // fetchData();    Swiggy's api is not public hence using mock data

    fetchMockData();

  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
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
      setNewList(resList.slice(0, 8));
      setCurrentIndex(8);
      setShowShimmer(false);
    }, 500);
  };


  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 0.75 >= document.documentElement.scrollHeight) {
      setShowShimmer(true);
      fetchMoreMockData();
    }

  }

  const fetchMoreMockData = () => {
    setTimeout(() => {
      const endIndex = Math.min(currentIndex + 8, resList.length);

      const nextElements = resList.slice(0, endIndex);

      setShowShimmer(false);
      setNewList(nextElements);
      setCurrentIndex(endIndex);

    }, 500);
  }
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
        <div className="search">
          <input type="text" className="search-box" value={searchWord} onChange={(e) => {
            setSearchWord(e.target.value)
          }} />

          <button className="search-btn" onClick={() => {
            //Filter the restaurant cards
            filteredList = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.resName.toLowerCase().includes(searchWord.toLowerCase())
              }
            )

            //update the UI
            setNewList(filteredList);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.stars > 4.0;
            });

            setNewList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Container */}
      <div className="res-container">
        {newList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              resData={restaurant}
            ></RestaurantCard>
          );
        })}
      </div>
      {showShimmer && <ShimmerLoad />}
    </div>
  );
};

export default Body;
