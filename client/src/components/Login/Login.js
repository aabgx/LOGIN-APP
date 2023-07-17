import React, { useState, useContext, useEffect } from "react";
import Input from "../Input";
import { FormContext } from "../../contexts/formContext";
import useValidation from "../../hooks/useValidation";
import FormComponent from "../FormComponent/FormComponent";
import axiosInstance from "../../services/axios";

const Login = () => {
  const [inputPropsLogin] = useContext(FormContext);

  const defaultLoginValues = {
    email: "",
    pass: "",
  };

  const [loginValues, setLoginValues] = useState(defaultLoginValues);

  const { errors, disableSubmit: disableSubmitHook } = useValidation(
    loginValues,
    "login"
  );

  const onChangeHandler = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const getNewInput = (input) => (
    <Input
      key={input.name}
      type={input.type}
      id={input.id}
      name={input.name}
      placeholder={input.placeholder}
      label={input.label}
      inputValue={loginValues[input.name]}
      onChange={onChangeHandler}
    />
  );

  const putRequest = async function (email) {
    try {
      const response = await axiosInstance.put(`/users/${email}`, {
        firstName: "Peter",
        lastName: "Borza",
        email: email,
        pass: "parola",
        birthday: "1985-03-12",
        userRole: "USER",
        adresses: "whetever1",
        phoneNumbers: "0000000000",
        technologies: [],
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    putRequest(loginValues.email);
    setLoginValues(defaultLoginValues);
  };

  return (
    <FormComponent
      title="Welcome back!"
      message="Enter your credentials to access your account"
      buttonText="LOG IN"
      onSubmit={onSubmitHandler}
      disableSubmit={disableSubmitHook}
    >
      {inputPropsLogin.map(getNewInput)}
      <div className="errorMessage">
        {Object.entries(errors).map(
          ([key, error]) =>
            error !== "" && (
              <span className="error" key={`${key}: ${error}`}>
                {error}
              </span>
            )
        )}
      </div>
    </FormComponent>
  );
};

export default Login;
