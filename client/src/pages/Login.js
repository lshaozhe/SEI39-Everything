import React, { useState, useContext } from "react";
import ContextStorage from "../misc/context";
import useFetch from "../misc/useFetch";

const Login = () => {
  const ctxURL = useContext(ContextStorage);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const { response, isLoading, error, fetchPost } = useFetch(
    ctxURL.current + "/api/products/"
  );

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
    const { response } = fetchPost(
      ctxURL.current + "/api/accounts/login/",
      "POST",
      loginInfo
    );
    localStorage.setItem("JWT", JSON.stringify(response));
    setLoginInfo({ email: "", password: "" });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlfor="inputEmail" className="form-label">
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
              <label htmlfor="inputPassword" className="form-label">
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

            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="mb-3">
              <button type="button" classNames="btn btn-warning">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
