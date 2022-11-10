import React from "react";

const CartCard = (props) => {
  return (
    <>
      <div className="row">
        <p style={{ fontSize: "16px" }}>{props.product.product_name}</p>
        <p style={{ fontSize: "14px" }}>Qty: {props.product.product_qty}</p>
      </div>
    </>
  );
};

export default CartCard;
