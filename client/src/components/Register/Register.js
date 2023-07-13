import React, { useState, useContext } from "react";
import Input from "../Input";
import { FormContext } from "../../contexts/formContext";
import useValidation from "../../hooks/useValidation";
import FormComponent from "../FormComponent/FormComponent";

const Register = () => {
  const [inputPropsLogin, inputPropsRegister] = useContext(FormContext);

  const defaultRegisterValues = {
    email: "",
    pass: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    technologies: "",
    birthday: "",
  };

  const [registerValues, setRegisterValues] = useState(defaultRegisterValues);

  const { errors, disableSubmit: disableSubmitHook } = useValidation(
    registerValues,
    "register"
  );

  const onChangeHandler = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const getNewInput = (input) => (
    <Input
      key={input.name}
      type={input.type}
      id={input.id}
      name={input.name}
      placeholder={input.placeholder}
      label={input.label}
      inputValue={registerValues[input.name]}
      onChange={onChangeHandler}
    />
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setRegisterValues(defaultRegisterValues);
  };

  return (
    <FormComponent
      title="Welcome!"
      message="Complete the form to register"
      buttonText="SIGN IN"
      onSubmit={onSubmitHandler}
      disableSubmit={disableSubmitHook}
    >
      {inputPropsRegister.map(getNewInput)}
      <div className="errorMessage">
        {Object.entries(errors).map(([key, error]) => (
          <span className="error" key={`${key}: ${error}`}>
            {error}
          </span>
        ))}
      </div>
    </FormComponent>
  );
};

export default Register;
