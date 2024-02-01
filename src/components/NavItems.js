import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartSlice from "../Utils/cartSlice";
const NavItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="m-3 p-3">
      <ul className="flex justify-around p-2 m-2">
        <li>
          <Link className="p-2 m-2" to="/FoodVilla">
            Home
          </Link>
        </li>
        <li>
          <Link className="p-2 m-2" to="/FoodVilla/about">
            About
          </Link>
        </li>
        <li>
          <Link className="p-2 m-2" to="/FoodVilla/contact">
            Contact
          </Link>
        </li>
        <li>
          {" "}
          <Link className="p-2 m-2" to="/cart">
            Cart {cartItems.length}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
