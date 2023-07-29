import React, { useContext } from "react";
import { someCtx } from "../App";

function AllTheThings(props) {
  const someContext = useContext(someCtx);

  console.log("this is props  from ALlTheThings", props);
  let things = someContext.products.map((d, i) => {
    return (
      <li key={i} onClick={() => someContext.setCart([...someContext.cart, d])}>
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
