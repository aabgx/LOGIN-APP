import { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [registerDetails, setRegisterDetails] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    birthday: "",
    technologies: [],
  });

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        loginDetails,
        setLoginDetails,
        registerDetails,
        setRegisterDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
