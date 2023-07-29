import React, { useContext } from "react";
import { someCtx } from "../App";

function MyShoppingCart(props) {
  const someContext = useContext(someCtx);

  //console.log("this is props  from MyShoppingCart", props)
  let things = someContext.cart.map((d, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          const cartArr = someContext.cart.filter((d, index) => index !== i);
          someContext.setCart(cartArr);
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
