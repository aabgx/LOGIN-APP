import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FormContextProvider } from "./contexts/formContext";
import { AppContextProvider } from "./contexts/appContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
