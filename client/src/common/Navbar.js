import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import ContextStorage from "../misc/context";

const NavBar = () => {
  const { userDetails, setUserDetails } = useContext(ContextStorage);

  const LoginButtonToggle = () => {
    if (userDetails.isAuthenticated == false) {
      return (
        <NavLink to="/login">
          <button className="btn btn-outline-primary">Login / Sign Up</button>
        </NavLink>
      );
    } else {
      return (
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            localStorage.clear();
            setUserDetails({
              isAdmin: false,
              isAuthenticated: false,
              userName: "",
            });
          }}
        >
          Logout
        </button>
      );
    }
  };

  const displayUser = () => {
    if (userDetails.isAuthenticated == false) {
      return;
    } else {
      if (userDetails.isAdmin == true) {
        return (
          <>
            <NavLink to="/admin">
              <button className="btn btn-danger">Admin</button>
            </NavLink>
          </>
        );
      } else {
        return (
          <p className="blockquote text-center">
            Welcome, {userDetails.userName}
          </p>
        );
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid flex">
          <div className="col-2">
            <NavLink to="/home">
              <button
                className="navbar-brand bg-light"
                style={{ border: "none" }}
              >
                <img
                  src={logo}
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                  alt="LOGO"
                />
                My Shopping App
              </button>
            </NavLink>
          </div>
          <div className="col-2" />
          <div className="col-4">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-2 self-align-end flex">{displayUser()}</div>
          <div className="col-2 self-align-end">{LoginButtonToggle()}</div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

// <NavLink
//   className={(navData) =>
//     navData.isActive
//       ? "block text-2xl font-bold underline decoration-4 py-2 pr-4 pl-3 rounded md:hover:text-white text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
//       : "block text-2xl font-bold py-2 pr-4 pl-3 rounded md:hover:text-white text-gray-400 hover:bg-gray-900 hover:text-white md:hover:bg-transparent border-gray-700 "
//   }
//   to="/watchlist">
//   Watchlist
// </NavLink>
