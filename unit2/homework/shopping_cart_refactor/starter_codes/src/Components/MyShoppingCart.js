import React from 'react';

function MyShoppingCart(props) {
  //console.log("this is props  from MyShoppingCart", props)
  let things = props.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(i)}>
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
