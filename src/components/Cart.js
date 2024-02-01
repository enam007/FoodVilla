import { useSelector } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <RestaurantMenu itemCards={cartItems} />;
    </>
  );
};

export default Cart;
