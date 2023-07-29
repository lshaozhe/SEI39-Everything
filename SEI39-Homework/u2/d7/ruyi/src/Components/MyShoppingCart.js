import React, {useContext} from 'react';
import Context from '../context/context';

function MyShoppingCart(props) {

  const context = useContext(Context);
  //console.log("this is props  from MyShoppingCart", props)

  // FOR USECONTEXT HW
  // let things = context.cart.map((d, i) => {
  //   return (
  //     <li key={i} onClick={() => props.handleClick(i)}>
  //       {d.name} - ${d.price}
  //       <br></br>
  //       {d.description}
  //     </li>
  //   );
  // });

  let things = props.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => props.dispatchCart({type: "REMOVE_FROM_CART", payload: i})}>
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
