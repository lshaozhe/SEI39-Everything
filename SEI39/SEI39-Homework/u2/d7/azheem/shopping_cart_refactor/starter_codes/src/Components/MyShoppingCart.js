import React, { useContext } from "react";
import SomeContext from "../context/some-context";

function MyShoppingCart() {
  //console.log("this is props  from MyShoppingCart", props)
  const someCtx = useContext(SomeContext);

  const removeFromCart = (index) => {
    const cartArr = someCtx.cart.filter((d, i) => i !== index);
    someCtx.setCart(cartArr);
  };

  let things = someCtx.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => removeFromCart(i)}>
        {d.name} - ${d.price}
        <br />
        {d.description}
      </li>
    );
  });

  // let things = props.cart.map((d, i) => {
  //   return (
  //     <li key={i} onClick={() => props.handleClick(i)}>
  //       {d.name} - ${d.price}
  //       <br></br>
  //       {d.description}
  //     </li>
  //   );
  // });

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {things}
    </div>
  );
}

export default MyShoppingCart;
