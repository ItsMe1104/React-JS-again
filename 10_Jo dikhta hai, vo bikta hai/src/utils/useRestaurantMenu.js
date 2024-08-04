
import { useState, useEffect } from "react";
import resList from "./mockData";

const useRestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  // Use empty array inside useEffect() as we only want an api call to be made during initial render
  useEffect(() => {

    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setTimeout(() => {
      setResInfo(resList)
    }, 500);
  }

  return resInfo;
}


export default useRestaurantMenu;

