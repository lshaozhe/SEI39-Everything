import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContextStorage from "../misc/context";
import useFetch from "../misc/useFetch";

const AdminUpdate = () => {
  const {
    context: ctxURL,
    userDetails,
    currentSelection,
  } = useContext(ContextStorage);
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState("");

  const { response, fetchPost } = useFetch(
    ctxURL.current.APIendpoint + "/api/products/get/" + currentSelection
  );

  const clickHandler = (e) => {
    e.preventDefault();
    fetchPost(
      ctxURL.current.APIendpoint + "/api/products/update/" + currentSelection,
      "PATCH",
      JSON.stringify(productDetails)
    );
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const formHandler = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "product_name":
        setProductDetails({ ...productDetails, product_name: e.target.value });
        break;
      case "product_price":
        setProductDetails({ ...productDetails, product_price: e.target.value });
        break;
      case "product_brand":
        setProductDetails({ ...productDetails, product_brand: e.target.value });
        break;
      case "product_description":
        setProductDetails({
          ...productDetails,
          product_description: e.target.value,
        });
        break;
      case "product_stock":
        setProductDetails({ ...productDetails, product_stock: e.target.value });
        break;
      case "products_categories":
        setProductDetails({
          ...productDetails,
          products_categories: e.target.value,
        });
        break;
      case "products_images":
        setProductDetails({
          ...productDetails,
          products_images: e.target.value,
        });
        break;
      case "products_information":
        setProductDetails({
          ...productDetails,
          products_informatione: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const toggleView = () => {
    if (userDetails.isAdmin === true && response !== null) {
      return (
        <div className="row d-flex flex-column justify-content-center">
          <label htmlFor="product_name" className="form-label">
            Product Name
          </label>
          <input
            id="product_name"
            className="form-control"
            value={productDetails.product_name}
            onChange={formHandler}
          />

          <label htmlFor="product_price" className="form-label">
            Product Price
          </label>
          <input
            id="product_price"
            className="form-control"
            value={productDetails.product_price}
            onChange={formHandler}
          />

          <label htmlFor="product_brand" className="form-label">
            Product Brand
          </label>
          <input
            id="product_brand"
            className="form-control"
            value={productDetails.product_brand}
            onChange={formHandler}
          />

          <label htmlFor="product_description" className="form-label">
            Product Description
          </label>
          <input
            id="product_description"
            className="form-control"
            value={productDetails.product_description}
            onChange={formHandler}
          />

          <label htmlFor="product_stock" className="form-label">
            Product Stock
          </label>
          <input
            id="product_stock"
            className="form-control"
            value={productDetails.product_stock}
            onChange={formHandler}
          />

          <label htmlFor="products_categories" className="form-label">
            Product Categories
          </label>
          <input
            id="products_categories"
            className="form-control"
            value={productDetails.products_categories}
            onChange={formHandler}
          />

          <label htmlFor="products_images" className="form-label">
            Product Images
          </label>
          <input
            id="products_images"
            className="form-control"
            value={productDetails.products_images}
            onChange={formHandler}
          />

          <label htmlFor="products_information" className="form-label">
            Product Information
          </label>
          <input
            id="products_information"
            className="form-control"
            value={productDetails.products_information}
            onChange={formHandler}
          />

          <button className="btn btn-primary" onClick={clickHandler}>
            Submit
          </button>
        </div>
      );
    } else {
      return <h1>Not Authorised to view</h1>;
    }
  };

  useEffect(() => {
    if (response !== null) {
      setProductDetails(response.data);
    }
  }, [response]);

  return <div className="container">{toggleView()}</div>;
};

export default AdminUpdate;
