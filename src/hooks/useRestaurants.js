import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constants";
import useFetch from "./useFetch";

const useRestaurants = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const json = await useFetch(RES_URL);

    const restaurantsList = json?.data?.cards[2]?.data?.data?.cards;

    setListOfRestaurents(restaurantsList);
    setFilteredRestaurents(restaurantsList);
  };

  return [listOfRestaurents, filteredRestaurents, setFilteredRestaurents];
};

export default useRestaurants;
