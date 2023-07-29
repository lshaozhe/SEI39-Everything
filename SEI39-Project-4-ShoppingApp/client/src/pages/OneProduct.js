import React, { useContext } from "react";
import ContextStorage from "../misc/context";
import useFetch from "../misc/useFetch";
import AddtoCartButton from "../common/AddtoCartButton";
import Cart from "../components/Cart";

const OneProduct = () => {
  const { context: ctxURL, currentSelection } = useContext(ContextStorage);
  const { response } = useFetch(
    ctxURL.current.APIendpoint + "/api/products/get/" + currentSelection
  );

  const displayProduct = () => {
    if (response !== null) {
      let product = response.data;
      return (
        <div className="container">
          <br />
          <div className="row"></div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-5">
              <img
                className="img-fluid rounded"
                src={product.products_images[0]}
                alt={product.product_name}
              />
            </div>
            <div className="col-sm-4 flex">
              <h1>{product.product_name}</h1>
              <br />
              <h5>Price: {product.product_price}</h5>
              <h5>Brand: {product.product_brand}</h5>
              <h5>Description: {product.product_description}</h5>
              <h5>Current Stock: {product.product_stock}</h5>
              <br />
              <div className="row">
                {product.products_images.map((e) => (
                  <img
                    key={Math.random()}
                    className="img-thumbnail"
                    style={{ height: "100px", width: "100px" }}
                    src={e}
                    alt=""
                  />
                ))}
              </div>
              <br />
              <AddtoCartButton
                product_name={product.product_name}
                product_id={product.product_id}
                product_image={response.data.products_images[0]}
              />
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-2">
              <br />
              <h3>Shopping Cart</h3>
              <Cart />
            </div>
          </div>
        </div>
      );
    }
  };
  return <>{displayProduct()}</>;
};

export default OneProduct;
