import { useState } from "react";
import { IMG_CDN_URL } from "../config.js";

const RestaurantMenu = ({ itemCards }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="">
        <button className="" onClick={handleClick}>
          {showMenu ? "close" : "open"}
        </button>
        {showMenu && (
          <div>
            {itemCards.map((item) => {
              console.log("item", item);
              return (
                <div>
                  <div>
                    <div>{item.card.info.name}</div>
                    <div>{`₹ ${item.card.info.price / 100}`}</div>
                    <div>{item.card.info.description}</div>
                  </div>
                  <div>
                    <img
                      className="h-24"
                      src={IMG_CDN_URL + item.card.info.imageId}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default RestaurantMenu;
