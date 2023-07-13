import { createContext } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const inputPropsLogin = [
    {
      name: "email",
      type: "text",
      id: "email",
      placeholder: "type your email",
      label: "Email",
    },
    {
      name: "pass",
      type: "password",
      id: "pass",
      placeholder: "type your password",
      label: "Password",
    },
  ];

  return (
    <FormContext.Provider value={inputPropsLogin}>
      {children}
    </FormContext.Provider>
  );
};
