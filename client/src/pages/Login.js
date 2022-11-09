import React, { useState } from "react";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const onInputChange = (e) => {
    e.preventDefault();
    if (e.target.id === "inputEmail") {
      setLoginInfo({ ...loginInfo, email: e.target.value });
    }
    if (e.target.id === "inputPassword") {
      setLoginInfo({ ...loginInfo, password: e.target.value });
    }
  };

  const handleSubmit = (e) => {};

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

            <div className="mb-3 align-self-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <button type="submit" classNames="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
