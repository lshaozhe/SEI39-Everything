import React, { useContext } from "react";
import ContextStorage from "../misc/context";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(ContextStorage);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default ShoppingCart;
