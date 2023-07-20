import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserListWrapper from "../UserList/UserListWrapper";

const Navigation = () => {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userList" element={<UserListWrapper />} />
        {/* <Route path="*" element={<div>404</div>} /> */}
      </Routes>
    </>
  );
};

export default Navigation;
