import React from "react";
import MultiProductView from "../components/MultiProductView";

const homepage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <div className="row">
            <h2>All Products</h2>
          </div>
          <MultiProductView />
        </div>
        <div className="col-sm-2">
          <h3>Shopping Cart</h3>
        </div>
      </div>
    </div>
  );
};

export default homepage;
