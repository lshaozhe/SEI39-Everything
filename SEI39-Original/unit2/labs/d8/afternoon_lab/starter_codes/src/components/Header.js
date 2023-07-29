import React from "react";
import { Link } from "react-router-dom"
function Header() {

  return (
    <div className="nav">
      <div className="nav-item"><span className="nav-logo"><Link to="/">iStocks</Link></span></div>
      <div className="nav-item"><Link to="/stocks">Stocks</Link></div>
      <div className="nav-item"><Link to="/about">About</Link></div>
   </div>
  );
}

export default Header
