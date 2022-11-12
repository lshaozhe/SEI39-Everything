import React, { useContext, useState } from "react";
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
    // e.preventdefault();
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
    e.preventdefault();
    setProductDetails(e.target.value);
  };

  const toggleView = () => {
    if (userDetails.isAdmin === true && response !== null) {
      return (
        <div className="row d-flex flex-column justify-content-center">
          <label htmlFor="productID" className="form-label">
            Make any value update in the json below
          </label>
          <input
            id="productID"
            className="form-control json-text"
            type="text"
            style={{ height: "200px" }}
            value={productDetails}
            onChange={formHandler}
          ></input>
          <button className="btn btn-primary" onClick={clickHandler}>
            Submit
          </button>
        </div>
      );
    } else {
      return <h1>Not Authorised to view</h1>;
    }
  };

  return <div className="container">{toggleView()}</div>;
};

export default AdminUpdate;
