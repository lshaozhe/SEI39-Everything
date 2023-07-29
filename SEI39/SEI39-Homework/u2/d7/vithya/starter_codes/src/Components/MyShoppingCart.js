import React, { useContext } from "react";
import SomeContext from "../context/memory";

function MyShoppingCart() {
  const Memory = useContext(SomeContext);

  const removeFromCart = (index) => {
    const cartArr = Memory.cart.filter((d, i) => i !== index);
    Memory.setCart(cartArr);
  };

  let things = Memory.cart.map((d, i) => {
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
