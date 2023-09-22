import { useState, useEffect } from "react";
const useGetRestaurantData = (url) => {
  const [restaurants, setRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    getRestarants();
    console.log("useEffect");
  }, []);

  async function getRestarants() {
    console.log("useEffect");
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);

    async function checkJsonData(json) {
      const cards = json?.data?.cards;
      console.log(cards);
      if (cards) {
        console.log(cards);
        for (const card of cards) {
          const checkData =
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
    }
    const resData = await checkJsonData(json);
    console.log(resData);
    setRestaurant(resData);
    setFilteredRestaurants(resData);
  }
  return [restaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useGetRestaurantData;
