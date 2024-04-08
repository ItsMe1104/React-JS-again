import React from "react";

// style for restaurant card
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //Destructuring props
  //resData is the key
  const { resData } = props;

  return (
    // one restaurant card
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={resData.image_src} alt="restaurant-logo" />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine.join(", ")}</h4>
      <h4>{`${resData.stars}⭐`}</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
