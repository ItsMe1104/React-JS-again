import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      {/* Search Bar */}
      <div className="filter">
        <button className="filter-btn"> Top Rated Restaurants</button>
      </div>

      {/* Restaurant Container */}
      <div className="res-container">
        {
          //One way to get Components with props
          // RestaurantCard :- since it will be reused again and again
          // <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" />
          //using normal JS function syntax for using props :-
          // RestaurantCard({ resName: "KFC", cuisine: "Burger, Fast food" })
        }
        {
          //Mostly used when data is in the form of array of objects
          //With each object containing dynamic data of one complete component.

          //Just use map and keep on creating Restaurant card for the number of objects using map

          resList.map((restuarant) => (
            <RestaurantCard resData={restuarant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
