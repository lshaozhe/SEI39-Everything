import React, { useReducer } from "react";

function AllTheThings(props) {
  // create a addToCart function that takes in an item as a param

  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  //   console.log("hello");
  // };
  const handleAdd = (product) => {
    props.dispatchCart({ type: "ADD_CART", payload: { item: product } });
    console.log("reduce cart work");
  };

  // console.log('this is props  from ALlTheThings', props);
  let things = props.products.map((d, i) => {
    return (
      <li key={i} onClick={() => handleAdd(d)}>
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
