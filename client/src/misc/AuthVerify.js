import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContextStorage from "./context";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = () => {
  const { userDetails, setUserDetails } = useContext(ContextStorage);
  let location = useLocation();

  useEffect(() => {
    const access_key = JSON.parse(localStorage.getItem("access_key"));
    const refresh_key = JSON.parse(localStorage.getItem("refresh_key"));

    if (access_key) {
      const decodedJwt = parseJwt(access_key);

      if (decodedJwt.exp * 1000 < Date.now()) {
        localStorage.removeItem("access_key");
      } else {
        setUserDetails({
          isAdmin: decodedJwt.is_admin,
          isAuthenticated: true,
          userName: decodedJwt.name,
        });
      }
    }
  }, [location]);

  return;
};

export default AuthVerify;
