import React, { useContext } from "react";
import Context from "../Context/context";

function AllTheThings() {
  const useCtx = useContext(Context);
  // console.log('this is props  from ALlTheThings', props);
  let things = useCtx.products.map((d, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          useCtx.addToCart(d);
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
