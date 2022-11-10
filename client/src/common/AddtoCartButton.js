import React, { useContext } from "react";
import ContextStorage from "../misc/context";

const AddtoCartButton = (props) => {
  const { cart, setCart } = useContext(ContextStorage);

  const addToCartHandler = (e) => {
    if (cart.length !== 0) {
      console.log(props.product_image);
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product_id == e.target.id) {
          let tempCart = [...cart];
          tempCart[i].product_qty++;
          setCart(tempCart);
          break;
        } else {
          setCart([
            ...cart,
            {
              product_id: props.product_id,
              product_name: props.product_name,
              product_image: props.product_image,
              product_qty: 1,
            },
          ]);
        }
      }
    } else {
      setCart([
        ...cart,
        {
          product_id: props.product_id,
          product_name: props.product_name,
          product_image: props.product_image,
          product_qty: 1,
        },
      ]);
    }
  };

  return (
    <>
      <button
        id={props.product_id}
        style={{ height: "2.5em" }}
        type="button"
        className="btn btn-danger"
        onClick={addToCartHandler}
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddtoCartButton;
