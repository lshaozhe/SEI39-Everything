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
  const { context } = useContext(ContextStorage);
  let location = useLocation();

  useEffect(() => {
    const access_key = JSON.parse(localStorage.getItem("access_key"));
    const refresh_key = JSON.parse(localStorage.getItem("refresh_key"));

    if (access_key) {
      const decodedJwt = parseJwt(access_key);
      console.log(decodedJwt);

      if (decodedJwt.exp * 1000 < Date.now()) {
        localStorage.removeItem("access_key");
      } else {
        context.current.isAdmin = decodedJwt.is_admin;
        context.current.isAuthticated = true;
        context.current.userName = decodedJwt.name;
      }
    }

    console.log(
      context.current.isAdmin,
      context.current.isAuthticated,
      context.current.userName
    );
  }, [location]);

  return;
};

export default AuthVerify;
