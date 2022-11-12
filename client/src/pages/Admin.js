import React, { useContext } from "react";
import ContextStorage from "../misc/context";

const Admin = () => {
  const { userDetails, setUserDetails } = useContext(ContextStorage);

  const toggleAdminView = () => {
    if (userDetails.isAdmin == true) {
      return (
        <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <div className="row d-flex flex-column justify-content-center">
            <label htmlFor="productID" className="form-label">
              Select a product ID to edit
            </label>
            <input id="productID" className="form-control"></input>
          </div>
          <br />
          <div className="row">
            <button className="btn btn-primary">Edit this Product</button>
          </div>
          <div className="row">
            <button className="btn btn-danger">Delete this Product</button>
          </div>
          <br />
          <div className="row">
            <h5>OR</h5>
          </div>
          <br />
          <div className="row">
            <button className="btn btn-warning">Create a new Product</button>
          </div>
        </div>
      );
    } else {
      return <h1>Not Authorised to view</h1>;
    }
  };
  return <div className="container">{toggleAdminView()}</div>;
};

export default Admin;
