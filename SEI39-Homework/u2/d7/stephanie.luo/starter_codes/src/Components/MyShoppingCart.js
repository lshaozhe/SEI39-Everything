import React, { useContext } from "react";
import SomeContext from "../Context/some-context";

function MyShoppingCart() {
  const someCtx = useContext(SomeContext);

  //console.log("this is props  from MyShoppingCart", props)
  let things = someCtx.cart.map((d, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          const cartArr = someCtx.cart.filter((d, i) => i !== index);
          someCtx.setCart(cartArr);
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
