import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="px-2 sm:px-4 py-4 bg-gray-800 w-full z-20 top-0 left-0 border-b border-gray-600">
        <div className="flex justify-center">
          <h1 className="text-blue-100 text-3xl font-bold">
            CRYPTO PRICE DATA REACT APP
          </h1>
        </div>
        <ul className="flex justify-center">
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "block text-2xl font-bold underline decoration-4 py-2 pr-4 pl-3 rounded md:hover:text-white text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                  : "block text-2xl font-bold py-2 pr-4 pl-3 rounded md:hover:text-white text-gray-400 hover:bg-gray-900 hover:text-white md:hover:bg-transparent border-gray-700 "
              }
              to="/main"
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "block text-2xl font-bold underline decoration-4 py-2 pr-4 pl-3 rounded md:hover:text-white text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                  : "block text-2xl font-bold py-2 pr-4 pl-3 rounded md:hover:text-white text-gray-400 hover:bg-gray-900 hover:text-white md:hover:bg-transparent border-gray-700 "
              }
              to="/watchlist"
            >
              Watchlist
            </NavLink>
          </li>
        </ul>
        <p className="text-red-500 text-xs flex justify-center pt-4 hover:text-red-900">
          <a href="https://github.com/lshaozhe/SEI-39-Project-2-ReactApp">
            My Github Repo
          </a>
        </p>
      </nav>
    </header>
  );
};

export default NavBar;
