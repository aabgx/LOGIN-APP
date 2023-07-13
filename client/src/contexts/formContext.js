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

  const inputPropsRegister = [
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
    {
      name: "firstName",
      type: "text",
      id: "firstName",
      placeholder: "type your first name",
      label: "First Name",
    },
    {
      name: "lastName",
      type: "text",
      id: "lastName",
      placeholder: "type your last name",
      label: "Last Name",
    },
    {
      name: "phone",
      type: "text",
      id: "phone",
      placeholder: "type your phone number",
      label: "Phone Number",
    },
    {
      name: "address",
      type: "text",
      id: "address",
      placeholder: "type your address",
      label: "Address",
    },
    {
      name: "birthday",
      type: "date",
      id: "birthday",
      placeholder: "type your birthday",
      label: "Birthday",
    },
    {
      name: "technologies",
      type: "text",
      id: "technologies",
      placeholder: "type your technologies",
      label: "Technologies",
    },
  ];

  return (
    <FormContext.Provider value={[inputPropsLogin, inputPropsRegister]}>
      {children}
    </FormContext.Provider>
  );
};
