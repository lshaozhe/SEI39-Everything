import React, { useContext } from "react";
import Context from "../Context/context";

function MyShoppingCart() {
  const useCtx = useContext(Context);
  //console.log("this is props  from MyShoppingCart", props)
  let things = useCtx.cart.map((d, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          useCtx.removeFromCart(i);
        }}
      >
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
