import React, { useContext } from "react";
import SomeContext from "./some-context";

function AllTheThings() {
  // create a addToCart function that takes in an item as a param
  const someCtx = useContext(SomeContext);
  const addToCart = (item) => {
    someCtx.setCart([...someCtx.cart, item]);
  };
  // console.log('this is props  from ALlTheThings', props);
  let things = someCtx.products.map((d, i) => {
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
