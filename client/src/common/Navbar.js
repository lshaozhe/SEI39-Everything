import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
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
          <div className="col-2 self-align-end">
            <NavLink to="/login">
              <button className="btn btn-outline-primary">
                Login / Sign Up
              </button>
            </NavLink>
          </div>
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
