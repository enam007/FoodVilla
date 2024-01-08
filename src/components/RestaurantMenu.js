import { useState } from "react";

const RestaurantMenu = ({ itemCards }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>{showMenu ? "close" : "open"}</button>
        {showMenu && (
          <ul>
            {itemCards.map((item) => {
              //console.log(itemCards);
              return <li>{item.card.info.name}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};
export default RestaurantMenu;
