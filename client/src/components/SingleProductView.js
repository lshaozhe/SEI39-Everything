import React from "react";

const SingleProductView = (props) => {
  //   console.log(props.product.products_images);
  return (
    <div className="card border-primary mb-3 col-sm-3">
      <img
        class="img-thumbnail card-img-top"
        src={props.product.products_images[0]}
        alt="Card image cap"
      ></img>
      <div className="card-body" style={{ height: "10rem" }}>
        <h5>{props.product.product_name}</h5>
        <p className="card-text">Price: {props.product.product_price}</p>
      </div>
      <div className="card-body" style={{ alignSelf: "flex-end" }}>
        <button class="btn btn-danger">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProductView;
