import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AddtoCartButton from "../common/AddtoCartButton";
import ContextStorage from "../misc/context";

const SingleProductView = (props) => {
  const { setCurrentSelection } = useContext(ContextStorage);

  const clickhandler = (e) => {
    setCurrentSelection(e.target.id);
  };

  return (
    <div className="card border-primary mb-3 col-sm-3">
      <NavLink to="/viewproduct">
        <img
          id={props.product.product_id}
          className="img-thumbnail card-img-top"
          src={props.product.products_images[0]}
          alt="product thumbnail"
          onClick={clickhandler}
        />
      </NavLink>
      <div className="card-body">
        <h5>{props.product.product_name}</h5>
        <p className="card-text">Price: {props.product.product_price}</p>
      </div>

      <div
        className="card-body"
        style={{ alignSelf: "flex-end", display: "flex" }}
      >
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
