import React from "react";
import { Link } from "react-router-dom";

const PageOne = () => {
  return (
    <>
      <h1>PageOne</h1>
      <ul>
        <li>
          <Link to="/page-one/a">Details A</Link>
        </li>
        <li>
          <Link to="/page-one/b">Details B</Link>
        </li>
      </ul>
      ;
    </>
  );
};

export default PageOne;
