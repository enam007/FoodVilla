import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState([]);
  const [resDetail, setResDetail] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    //data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0734262&lng=72.626571&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    setMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    console.log(json.data.cards);
    setResDetail(json.data.cards[0].card.card);
    console.log(resDetail);
    //.[0].card.info.name
  }
  console.log(id);

  return (
    <div className="menu-page">
      <div>
        <div>{resDetail?.info?.name}</div>
        <img src={IMG_CDN_URL + resDetail?.info?.cloudinaryImageId} />
      </div>
      <div className="menu">
        <ul>
          {menu.map((m) => (
            <li key={m?.card?.info?.id}>{m?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
