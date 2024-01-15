import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";

const RestaurantDetail = () => {
  const { id } = useParams();

  const [menu, resDetail] = useRestaurantMenu(id);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="menu-page">
      <div>
        <div>{resDetail?.name}</div>
        <img
          src={
            resDetail?.cloudinaryImageId
              ? IMG_CDN_URL + resDetail?.cloudinaryImageId
              : null
          }
        />
      </div>
      <div className="menu">
        <ul>
          {menu &&
            menu.map((m) => {
              console.log(m.card.card.itemCards);
              return (
                <div>
                  <li>{m.card.card.title}</li>
                  <RestaurantMenu itemCards={m.card.card.itemCards} />
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetail;
