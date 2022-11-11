import React, { useContext } from "react";
import ContextStorage from "../misc/context";
import cross from "../assets/cart_cross.svg";

const CartCard = (props) => {
  const { cart, setCart } = useContext(ContextStorage);

  const removeFromCartHandler = (e) => {
    if (cart.length !== 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product_id == e.target.id) {
          let tempCart = [...cart];
          tempCart.pop(i);
          setCart(tempCart);
        }
      }
    }
  };

  return (
    <>
      <div className="d-flex flex-row">
        <img
          className="img-thumbnail-cart"
          src={props.product.product_image}
          alt=""
        />
        <div>
          <img
            id={props.product.product_id}
            src={cross}
            className="crosssvg"
            alt=""
            onClick={removeFromCartHandler}
          />
          <p style={{ fontSize: "16px" }}>{props.product.product_name}</p>
          <p style={{ fontSize: "14px" }}>Qty: {props.product.product_qty}</p>
        </div>
      </div>
    </>
  );
};

export default CartCard;
