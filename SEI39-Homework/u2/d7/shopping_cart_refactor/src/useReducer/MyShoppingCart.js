import React from "react";

function MyShoppingCart(props) {
  // create a removeFromCart function that takes in an index as a param
  // const removeFromCart = (index) => {
  //   const cartArr = cart.filter((d, i) => i !== index);
  //   setCart(cartArr);
  // };
  const handleRemove = (index) => {
    props.dispatchCart({ type: "REMOVE_CART", payload: { index: index } });
  };

  //console.log("this is props  from MyShoppingCart", props)
  let things = props.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => handleRemove(i)}>
        {d.name} - ${d.price}
        <br></br>
        {d.description}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      {things}
    </div>
  );
}

export default MyShoppingCart;
