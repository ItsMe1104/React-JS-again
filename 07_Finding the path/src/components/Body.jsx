import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import ShimmerLoad from "./ShimmerLoad";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import { Link } from "react-router-dom";

import React from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [newList, setNewList] = useState([]);
  const [new_filteredList, setNew_filteredList] = useState([]);
  const [searchWord, setSearchWord] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    // fetchData();    Swiggy's api is not public hence using mock data

    fetchMockData();
  }, []);



  const fetchMockData = () => {
    //using setTimeout just to give a 5 second delay as if we are fetching data from an api

    setTimeout(() => {

      const copiedArray = resList.slice(0, 12);
      setListOfRestaurants(resList);
      setNewList(copiedArray);
      setNew_filteredList(resList);
      setCurrentIndex(12);

    }, 500);
  };

  const nextFive = () => {
    setTimeout(() => {

      console.log("called");
      const endIndex = Math.min(currentIndex + 6, new_filteredList.length);

      const nextElements = new_filteredList.slice(0, endIndex);
      setNewList(nextElements);
      setCurrentIndex(endIndex >= resList.length ? endIndex : endIndex);
    }, 500);

  }



  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchWord} onChange={(e) => {
            setSearchWord(e.target.value)
          }} />

          <button className="search-btn" onClick={() => {
            //Filter the restaurant cards
            const filteredList = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.resName.toLowerCase().includes(searchWord.toLowerCase())
              }
            )

            //update the UI
            setNew_filteredList(filteredList);
            setNewList(filteredList.slice(0, 12));
            setCurrentIndex(12);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.stars > 4.0;
            });

            setNew_filteredList(filteredList);
            setNewList(filteredList.slice(0, 12));
            setCurrentIndex(12);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Container */}
      <InfiniteScroll dataLength={newList.length} next={nextFive} hasMore={newList.length != new_filteredList.length} loader={<ShimmerLoad />} >
        <div className="res-container">
          {newList.map((restaurant) => {
            return (
              <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
                <RestaurantCard

                  resData={restaurant}
                ></RestaurantCard>
              </Link>
            );
          })}
        </div>
      </InfiniteScroll>
    </div >
  );
};

export default Body;
