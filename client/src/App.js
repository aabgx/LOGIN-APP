import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const buttonText = isLogin
    ? "Don't have an account? Sign up"
    : "Have an account? Log in";

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
