import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DELIVERY_ICON_URL } from "../config.js";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import Shimmer from "./Shimmer.js";

const RestaurantDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [menu, resDetail] = useRestaurantMenu(id);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="mx-auto pt-6 mt-4 w-3/4">
      {console.log(resDetail)}
      {Object.keys(resDetail).length ? (
        <div className="border-b border-dotted border-grey-200 pb-2">
          <div className="flex justify-between font-sans">
            <div className="">
              {console.log("resDeatil", resDetail?.cuisines)}
              <p className="pt-2text-xl font-bold">{resDetail?.name}</p>
              <p className="pt-2 text-xs">{resDetail?.cuisines.join(" ,")}</p>
              <p className="pt-1 text-xs">{resDetail?.areaName}</p>
            </div>
            <div className="display: block border border-grey-100 rounded p-2">
              <span
                className={`flex flex-row text-sm font-bold pb-3 ${
                  resDetail?.avgRating > 3.5 ? "text-green-500" : "text-red-500"
                }`}
              >
                {resDetail?.avgRatingString}
              </span>
              <span className="flex flex-row text-xs">
                {resDetail?.totalRatingsString}
              </span>
            </div>
          </div>

          <div className="pb-2">
            <ul className="text-xs pt-3 pb-2">
              <li className="flex">
                <img
                  className="mr-2"
                  src={DELIVERY_ICON_URL + resDetail?.feeDetails?.icon}
                />
                <span>{resDetail?.feeDetails?.message}</span>
              </li>
            </ul>
          </div>
          <div className="pt-2 mt-2">
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
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default RestaurantDetail;
