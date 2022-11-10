import React from "react";
import AddtoCartButton from "../common/AddtoCartButton";

const SingleProductView = (props) => {
  return (
    <div className="card border-primary mb-3 col-sm-3">
      <img
        class="img-thumbnail card-img-top"
        src={props.product.products_images[0]}
        alt="product thumbnail"></img>
      <div className="card-body">
        <h5>{props.product.product_name}</h5>
        <p className="card-text">Price: {props.product.product_price}</p>
      </div>
      <div className="card-body" style={{ alignSelf: "flex-end", display: "flex" }}>
        <AddtoCartButton
          product_name={props.product.product_name}
          product_id={props.product.product_id}
          product_image={props.product.products_images[0]}
        />
      </div>
    </div>
  );
};

export default SingleProductView;
