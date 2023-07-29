import React, { useContext } from "react";
import SomeContext from "../context/context-holder";

function AllTheThings() {
  const SomeCtx = useContext(SomeContext);

  const addToCart = (item) => {
    SomeCtx.setCart([...SomeCtx.cart, item]);
  };

  let things = SomeCtx.products.map((d, i) => {
    return (
      <li key={i} onClick={() => addToCart(d)}>
        {d.name} - ${d.price}
        <br></br>
        {d.description}
      </li>
    );
  });

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      {things}
    </div>
  );
}

export default AllTheThings;
