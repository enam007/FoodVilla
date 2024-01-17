import { MENU_URL } from "../config";
import { useState, useEffect } from "react";
import useGetRestaurantData from "./useGetRestaurantData";

const useRestaurantMenu = (id) => {
  const [menu, setMenu] = useState([]);
  const [resDetail, setResDetail] = useState({});

  useEffect(() => {
    console.log("in useEffect");
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
    try {
      console.log(id);
      const data = await fetch(MENU_URL + id);
      const json = await data.json();
      const menuData = await getMenuData(json);
      const restaurantDetail = await getRestaurantDetail(json);

      setMenu(menuData);
      setResDetail(restaurantDetail);
      console.log("menu", menu);
      console.log("resDetail", resDetail);
    } catch (error) {}
    async function getMenuData(json) {
      const cards = json?.data?.cards;
      //console.log(cards);
      const menuObject = cards.find((card) => card?.groupedCard);
      //console.log(menuObject);
      const menuArray = menuObject?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filteredCards = menuArray.filter((card) => {
        return (
          card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        //return card
      });
      return filteredCards;
    }
    async function getRestaurantDetail(json) {
      const cards = json?.data?.cards;
      //console.log(cards);
      const resDetails = cards.find(
        (card) =>
          card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      return resDetails?.card?.card?.info;
    }
  }

  return [menu, resDetail];
};

export default useRestaurantMenu;
