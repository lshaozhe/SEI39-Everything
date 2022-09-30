import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            {/* href goes out to the web to pull the page data, so to be self contained, import link or navlink (can import styles) and use it */}
            {/* <a href="/page-one">Page One</a> */}
            {/* <Link to="/page-one">Page One</Link> */}
            <NavLink activeClassName={styles.active} to="/page-one">
              Page One
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/page-two">
              Page Two
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/page-three">
              Page Three
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
