import React, { useContext } from "react";
import Context1 from "../context/context1";

function MyShoppingCart() {
  const Ctx1 = useContext(Context1);

  let things = Ctx1.cartState.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => Ctx1.removeFromCart(i)}>
        {d.name} {d.price}
      </li>
    );
  });

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{things}</ul>
    </div>
  );
}

export default MyShoppingCart;
