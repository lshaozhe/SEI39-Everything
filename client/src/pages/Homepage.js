import React from "react";
import MultiProductView from "../components/MultiProductView";

const homepage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 scrollit">
          <div className="row">
            <h3>All Products</h3>
          </div>
          <MultiProductView />
        </div>
        <div className="col-sm-2 fixed">
          <h3>Shopping Cart</h3>
        </div>
      </div>
    </div>
  );
};

export default homepage;
