import React, { useContext } from "react";
import ContextStorage from "../misc/context";

const AddtoCartButton = (props) => {
  const ctx = useContext(ContextStorage);

  const addToCartHandler = (e) => {
    if (ctx.current.cart.length > 0) {
      for (let element of ctx.current.cart) {
        if (element.product_id == e.target.id) {
          element.product_qty++;
          break;
        } else {
          ctx.current.cart.push({
            product_id: props.product_id,
            product_name: props.product_name,
            product_image: props.product_image,
            product_qty: 1,
          });
          break;
        }
      }
    } else {
      ctx.current.cart.push({
        product_id: props.product_id,
        product_name: props.product_name,
        product_image: props.product_image,
        product_qty: 1,
      });
    }
  };

  return (
    <>
      <button id={props.product_id} type="button" class="btn btn-danger" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </>
  );
};

export default AddtoCartButton;
