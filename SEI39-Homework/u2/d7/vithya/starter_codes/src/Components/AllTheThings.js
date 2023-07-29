import React, { useContext } from "react";
import SomeContext from "../context/memory";

function AllTheThings() {
  const Memory = useContext(SomeContext);

  const addToCart = (item) => {
    Memory.setCart([...Memory.cart, item]);
  };

  let things = Memory.products.map((d, i) => {
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
