import { useState, useEffect } from "react"; // useGetRes
const useGetRestaurantData = (url) => {
  const [restaurants, setRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestarants();
  }, []);

  async function getRestarants() {
    try {
      const data = await fetch(url);
      const json = await data.json();
      const resData = await checkJsonData(json);
      console.log(resData);
      setRestaurant(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.error("API ERROR: ", error);
    }

    //console.log(json);

    async function checkJsonData(json) {
      try {
        const cards = json?.data.cards;
        for (const card of cards) {
          const restaurantData =
            card?.card?.card?.id === "restaurant_grid_listing" &&
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (restaurantData) {
            console.log(restaurantData);
            return restaurantData;
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  return [restaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useGetRestaurantData;
