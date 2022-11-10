import React from "react";
import MultiProductView from "../components/MultiProductView";
import Cart from "../components/Cart";

const homepage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-10 scrollit">
          <div className="row">
            <h3>All Products</h3>
          </div>
          <MultiProductView />
        </div>
        <div className="col-sm-2 fixed">
          <h3>Shopping Cart</h3>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default homepage;
