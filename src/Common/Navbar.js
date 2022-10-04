import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/main">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/watchlist">
              Watchlist
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
