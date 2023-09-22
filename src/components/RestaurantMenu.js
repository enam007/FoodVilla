import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [menu, resDetail] = useRestaurantMenu(id);

  return (
    <div className="menu-page">
      <div>
        <div>{resDetail?.info?.name}</div>
        <img
          src={
            resDetail?.info?.cloudinaryImageId
              ? IMG_CDN_URL + resDetail?.info?.cloudinaryImageId
              : null
          }
        />
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
