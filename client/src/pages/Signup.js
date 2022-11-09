import React, { useState } from "react";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    given_name: "",
    name: "",
    password: "",
  });

  const onInputChange = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "signupEmail":
        setSignupInfo({ ...signupInfo, email: e.target.value });
        break;
      case "signupGivenName":
        setSignupInfo({ ...signupInfo, given_name: e.target.value });
        break;
      case "signupName":
        setSignupInfo({ ...signupInfo, name: e.target.value });
        break;
      case "signupPassword":
        setSignupInfo({ ...signupInfo, password: e.target.value });
        break;
    }
  };

  const handleSignup = (e) => {
    setSignupInfo({ email: "", given_name: "", name: "", password: "" });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlfor="signupEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="signupEmail"
                aria-describedby="emailHelp"
                value={signupInfo.email}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="signupGivenName" className="form-label">
                First Name
              </label>
              <input
                type="givenName"
                className="form-control"
                id="signupGivenName"
                value={signupInfo.given_name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlfor="signupName" className="form-label">
                Last Name
              </label>
              <input
                type="name"
                className="form-control"
                id="signupName"
                value={signupInfo.name}
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
                value={signupInfo.password}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
