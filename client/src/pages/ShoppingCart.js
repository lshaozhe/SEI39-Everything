import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextStorage from "../misc/context";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(ContextStorage);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    setCart([]);

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const shoppingCartMapper = () => {
    return cart.map((element) => (
      <div className="col-sm-12 row border">
        <div className="col-sm-4">
          <img
            src={element.product_image}
            style={{ height: "200px", width: "200px" }}
            alt="product item"
          />
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
        <button className="btn btn-success col-sm-3" onClick={submitHandler}>
          Submit my order
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
