import React, { useContext } from "react";
import ContextStorage from "../misc/context";

const ShoppingCart = () => {
  const { cart } = useContext(ContextStorage);

  const shoppingCartMapper = () => {
    return cart.map((element) => (
      <div className="col-sm-12 row border">
        <div className="col-sm-4">
          <img src={element.product_image} style={{ height: "200px", width: "200px" }} />
        </div>
        <div className="col-sm-8">
          <h3>{element.product_name}</h3>
          <h5>QTY: {element.product_qty}</h5>
        </div>
      </div>
    ));
  };

  return (
    <div className="container flex">
      {shoppingCartMapper()}
      <div className="row justify-content-center">
        <button className="btn btn-success col-sm-3">Submit my order</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
