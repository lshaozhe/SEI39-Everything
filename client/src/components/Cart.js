import React, { useContext } from "react";
import ContextStorage from "../misc/context";
import CartCard from "./CartCard";

const Cart = () => {
  const { cart } = useContext(ContextStorage);

  const displayCards = () => {
    return cart.map((element) => <CartCard product={element} key={element.product_name} />);
  };
  return <>{displayCards()}</>;
};

export default Cart;
