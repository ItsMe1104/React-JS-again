import React from "react";


const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="m-4 p-4 w-[400px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img className="rounded-lg" src={resData.image_src} alt="restaurant-logo" />
      <h3 className="font-bold py-4 text-xl">{resData.resName}</h3>
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine.join(", ")}</h4>
      <h4>{`${resData.stars}⭐`}</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
