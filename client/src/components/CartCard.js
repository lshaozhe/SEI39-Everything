import React from "react";
import cross from "../assets/cart_cross.svg";

const CartCard = (props) => {
  return (
    <>
      <div className="d-flex flex-row">
        <img
          className="img-thumbnail-cart"
          src={props.product.product_image}
          alt=""
        />
        <div>
          <img src={cross} className="crosssvg" alt="" />
          <p style={{ fontSize: "16px" }}>{props.product.product_name}</p>
          <p style={{ fontSize: "14px" }}>Qty: {props.product.product_qty}</p>
        </div>
      </div>
    </>
  );
};

export default CartCard;
