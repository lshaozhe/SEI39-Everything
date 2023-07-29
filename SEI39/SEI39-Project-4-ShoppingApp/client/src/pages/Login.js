import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ContextStorage from "../misc/context";
import useFetch from "../misc/useFetch";

const Login = () => {
  const { context: ctxURL } = useContext(ContextStorage);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { fetchPost } = useFetch(ctxURL.current.APIendpoint + "/api/products/");

  const onInputChange = (e) => {
    e.preventDefault();
    if (e.target.id === "inputEmail") {
      setLoginInfo({ ...loginInfo, email: e.target.value });
    }
    if (e.target.id === "inputPassword") {
      setLoginInfo({ ...loginInfo, password: e.target.value });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchPost(
      ctxURL.current.APIendpoint + "/api/accounts/login/",
      "POST",
      JSON.stringify(loginInfo)
    );
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="container">
      <br />
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                value={loginInfo.email}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={loginInfo.password}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3 col-sm-4">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className="mb-3 col-sm-3">
              <NavLink to="/signup">
                <button className="btn btn-warning">Sign Up</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
