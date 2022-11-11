import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ContextStorage from "../misc/context";
import CartCard from "./CartCard";

const Cart = () => {
  const { context, cart, userDetails } = useContext(ContextStorage);

  const displayCards = () => {
    return cart.map((element) => (
      <CartCard product={element} key={element.product_name} />
    ));
  };

  const displayShoppingCartLink = () => {
    console.log(userDetails);
    if (userDetails.isAuthenticated == true) {
      return (
        <>
          <NavLink to="/mycart">
            <button className="btn btn-success">View my cart</button>
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login">
            <button className="btn btn-secondary">Login to view cart</button>
          </NavLink>
        </>
      );
    }
  };
  return (
    <>
      {displayCards()}
      {displayShoppingCartLink()}
    </>
  );
};

export default Cart;
