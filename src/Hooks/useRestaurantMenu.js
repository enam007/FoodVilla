import { MENU_URL } from "../config";
import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [menu, setMenu] = useState([]);
  const [resDetail, setResDetail] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    const cards = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    //console.log("cards", cards);
    for (const card of cards) {
      console.log("card", card);
      if (card.card.card.itemCards) {
        console.log("ItemCards", card.card.card.itemCards);
        setMenu(card.card.card.itemCards);
        break;
      }
    }
    setResDetail(json.data.cards[0].card.card);
    //console.log(menu);
  }
  return [menu, resDetail];
};

export default useRestaurantMenu;
