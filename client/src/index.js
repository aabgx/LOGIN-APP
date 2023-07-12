import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FormContextProvider } from "./RealApp/contexts/formContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>
);
