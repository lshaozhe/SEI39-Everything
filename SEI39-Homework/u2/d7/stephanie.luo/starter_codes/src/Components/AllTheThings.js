import React, { useContext } from "react";
import SomeContext from "../Context/some-context";

function AllTheThings() {
  // console.log('this is props  from ALlTheThings', props);
  const someCtx = useContext(SomeContext);

  let things = someCtx.products.map((d, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          someCtx.setCart([...someCtx.cart, d]);
        }}
      >
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
