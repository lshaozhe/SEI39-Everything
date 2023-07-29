import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//useSelector is akin to "read", useDispatch is the one that calls the action/ sets the state

import { userActions } from "../store/user";
import { otherActions } from "../store/other";

const Auth = () => {
  const dispatch = useDispatch();
  const storeAuth = useSelector((state) => state.user.auth);
  const storeUsername = useSelector((state) => state.user.username);

  const [username, setUsername] = useState("");

  const loginUser = () => {
    dispatch(userActions.login(username));
    //username is called the payload, it can be an object or array as well
  };

  const logoutUser = () => {
    dispatch(userActions.logout());
    setUsername("");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <label className="col-md-4" htmlFor="username">
          Username
        </label>
        <input
          className="col-md-8"
          id="username"
          type="text"
          onChange={handleUsernameChange}
          value={username}></input>
      </div>
      <div className="row">
        <button className="col-md-6" onClick={loginUser} type="submit">
          Login
        </button>
        <button className="col-md-6" onClick={logoutUser} type="submit">
          Logout
        </button>
      </div>

      {storeAuth ? "logged in" : "logged out"}
      <br />
      {storeUsername}
    </div>
  );
};

export default Auth;
