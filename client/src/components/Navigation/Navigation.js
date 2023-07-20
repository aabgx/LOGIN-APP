import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-link">
            <span className="btnText">LOGIN</span>
          </Link>
        </li>
        <li>
          <Link to="/register" className="navbar-link">
            <span className="btnText">REGISTER</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
