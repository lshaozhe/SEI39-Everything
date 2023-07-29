import React from "react";
import Context from "../context/context";

function MyShoppingCart(props) {
  const contx = useContext(Context);

  let things = contx.cart.map((d, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          const cartArr = contx.cart.filter((d, i) => i !== index);
          contx.setCart(cartArr);
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
