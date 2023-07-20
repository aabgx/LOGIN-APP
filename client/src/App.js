import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserListWrapper from "./components/UserList/UserListWrapper";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userList" element={<UserListWrapper />} />
        <Route path="*" element={<div> 404 </div>} />
      </Routes>
    </div>
  );
}

export default App;
