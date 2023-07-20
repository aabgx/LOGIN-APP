import { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  return (
    <AppContext.Provider
      value={{ users, setUsers, loginDetails, setLoginDetails }}
    >
      {children}
    </AppContext.Provider>
  );
};
