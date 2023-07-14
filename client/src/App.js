import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import axiosInstance from "./services/axios";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const buttonText = isLogin
    ? "Don't have an account? Sign up"
    : "Have an account? Log in";

  useEffect(() => {
    async function makeCall() {
      const response = axiosInstance.get("/todos/1");
      console.log(response);
    }
    makeCall();
  }, []);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      {isLogin ? <Login /> : <Register />}
      <div className="switch">
        <button className="switchForm" onClick={handleToggle}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default App;
