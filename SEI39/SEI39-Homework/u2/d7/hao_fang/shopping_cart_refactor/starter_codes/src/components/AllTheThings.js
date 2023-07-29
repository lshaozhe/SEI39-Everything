import React, { useContext } from "react";
import Context1 from "../context/context1";

function AllTheThings() {
  const Ctx1 = useContext(Context1);
  const array = Ctx1.productsState.products;

  let things = array.map((d, i) => {
    return (
      <li key={i} onClick={() => Ctx1.addToCart(d)}>
        {d.name} - ${d.price}
      </li>
    );
  });

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{things}</ul>
    </div>
  );
}

export default AllTheThings;
