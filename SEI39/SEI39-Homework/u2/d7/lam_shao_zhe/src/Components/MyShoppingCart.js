import React, { useContext } from "react";
import SomeContext from "../context/context-holder";

function MyShoppingCart() {
  const SomeCtx = useContext(SomeContext);

  const removeFromCart = (index) => {
    const cartArr = SomeCtx.cart.filter((d, i) => i !== index);
    SomeCtx.setCart(cartArr);
  };

  let things = SomeCtx.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => removeFromCart(i)}>
        {d.name} - ${d.price}
        <br></br>
        {d.description}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {things}
    </div>
  );
}

export default MyShoppingCart;
