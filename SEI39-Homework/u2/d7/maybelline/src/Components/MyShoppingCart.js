import React, { useContext } from "react";
import someContext from "../context/some-context";

function MyShoppingCart() {
  const someCtx = useContext(someContext);
  //console.log("this is props  from MyShoppingCart", props)
  let things = someCtx.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => someCtx.handleClick(i)}>
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
