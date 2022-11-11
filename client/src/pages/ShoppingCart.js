import React, { useContext } from "react";
import ContextStorage from "../misc/context";
import Cart from "../components/Cart";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(ContextStorage);

  return (
    <div className="container">
      <Cart />

      <div className="row">
        <button> Submit my order</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
