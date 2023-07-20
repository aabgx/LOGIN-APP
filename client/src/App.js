import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;
