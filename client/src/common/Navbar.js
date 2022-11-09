import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/main">
          <button class="navbar-brand">
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
            My Shopping App
          </button>
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a>some tab</a>
          </div>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 m-sm-0" type="submit">
            Search
          </button>
        </div>
      </nav>
    </>
    // <NavLink
    //   className={(navData) =>
    //     navData.isActive
    //       ? "block text-2xl font-bold underline decoration-4 py-2 pr-4 pl-3 rounded md:hover:text-white text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
    //       : "block text-2xl font-bold py-2 pr-4 pl-3 rounded md:hover:text-white text-gray-400 hover:bg-gray-900 hover:text-white md:hover:bg-transparent border-gray-700 "
    //   }
    //   to="/watchlist">
    //   Watchlist
    // </NavLink>
  );
};

export default NavBar;
