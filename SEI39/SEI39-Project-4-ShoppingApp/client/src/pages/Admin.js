import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ContextStorage from "../misc/context";
import useFetch from "../misc/useFetch";

const Admin = () => {
  const {
    context: ctxURL,
    userDetails,
    currentSelection,
    setCurrentSelection,
  } = useContext(ContextStorage);
  const navigate = useNavigate();
  const { fetchPost } = useFetch(
    ctxURL.current.APIendpoint + "/api/products/get/" + currentSelection
  );

  const handleInputChange = (e) => {
    e.preventDefault();
    setCurrentSelection(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    fetchPost(
      ctxURL.current.APIendpoint + "/api/products/update/" + currentSelection,
      "DELETE",
      JSON.stringify(currentSelection)
    );
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const toggleAdminView = () => {
    if (userDetails.isAdmin === true) {
      return (
        <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <div className="row d-flex flex-column justify-content-center">
            <label htmlFor="productID" className="form-label">
              Select a product ID to edit
            </label>
            <input
              id="productID"
              className="form-control"
              onChange={handleInputChange}
            ></input>
          </div>
          <br />
          <div className="row">
            <NavLink to="/adminupdate">
              <button className="btn btn-primary">Edit this Product</button>
            </NavLink>
          </div>
          <div className="row">
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete this Product
            </button>
          </div>
          <br />
          <div className="row">
            <h5>OR</h5>
          </div>
          <br />
          <div className="row">
            <a href="http://127.0.0.1:8000/admin/login/?next=/admin/">
              <button
                className="btn btn-warning"
                href="http://127.0.0.1:8000/admin/login/?next=/admin/"
              >
                Create a new Product
              </button>
            </a>
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
