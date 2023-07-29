import React, { useContext } from "react";
import SomeContext from "./some-context";

function MyShoppingCart() {
  const someCtx = useContext(SomeContext);
  // create a removeFromCart function that takes in an index as a param
  const removeFromCart = (index) => {
    const cartArr = someCtx.cart.filter((d, i) => i !== index);
    someCtx.setCart(cartArr);
  };

  //console.log("this is props  from MyShoppingCart", props)
  let things = someCtx.cart.map((d, i) => {
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
