import { useState } from "react";
import { IMG_CDN_URL } from "../config.js";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utils/cartSlice.js";

const RestaurantMenu = ({ itemCards }) => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItems = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  return (
    <>
      <div className="">
        <div className="mx-auto p-6 m-4 w-3/4">
          {itemCards.map((item) => {
            console.log("item", item);
            return (
              <div className="flex justify-between p-2 m-4 h-36 border-b-2 pb-2 transform transition-transform hover:scale-105">
                <div className="p-2 m-2 w-2/3 h-24">
                  <div>{item.card.info.name}</div>
                  <div>{`₹ ${item.card.info.price / 100}`}</div>
                  <div className="text-xs text-balance">
                    {item.card.info.description}
                  </div>
                </div>
                <div className="w-28 h-24 object-cover rounded-md">
                  <img
                    width="256"
                    className="w-28 h-24 object-cover rounded-md"
                    src={IMG_CDN_URL + item.card.info.imageId}
                  />
                  <div className="flex shadow-md hover:bg-slate-100 active:bg-slate-200 justify-around border-solid border-slate-100 rounded-md border-2 mt-1 pt-1 items-center">
                    <button
                      className="w-1/3"
                      onClick={() => handleRemoveItems(item)}
                    >
                      -
                    </button>
                    <span className="w-1/3">Add</span>
                    <button
                      className="w-1/3"
                      onClick={() => handleAddItems(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
