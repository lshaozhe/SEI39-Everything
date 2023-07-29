import React from "react";
import Context from "../context/context";

function AllTheThings() {
  const contx = useContext(Context);

  let things = contx.products.map((d, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          contx.setCart([...contx.cart, d]);
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
