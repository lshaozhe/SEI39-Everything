import React, { useContext } from "react";
import SomeContext from "../context/some-context";

function AllTheThings() {
  const someCtx = useContext(SomeContext);
  let things = someCtx.products.map((d, i) => {
    return (
      <li key={i} onClick={() => someCtx.addToCart(d)}>
        {d.name} - ${d.price}
        <br />
        {d.description}
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
