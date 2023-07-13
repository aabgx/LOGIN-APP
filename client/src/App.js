import "./App.css";
import { useContext, useState, useEffect } from "react";
import Input from "./components/Input";
import FormComponent from "./components/FormComponent";
import { FormContext } from "./contexts/formContext";
import useValidation from "./hooks/useValidation";

function App() {
  const inputPropsLogin = useContext(FormContext);

  const defaultLoginValues = {
    email: "",
    pass: "",
  };

  const [loginValues, setLoginValues] = useState(defaultLoginValues);

  const { errors, disableSubmit: disableSubmitHook } =
    useValidation(loginValues);

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

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setLoginValues(defaultLoginValues);
  };

  return (
    <div className="App">
      <FormComponent
        title="Welcome back!"
        message="Enter your credentials to access your account"
        buttonText="LOG IN"
        onSubmit={onSubmitHandler}
        disableSubmit={disableSubmitHook}
      >
        {inputPropsLogin.map(getNewInput)}
        <div className="errorMessage">
          {Object.entries(errors).map(([key, error]) => (
            <span className="error" key={`${key}: ${error}`}>
              {error}
            </span>
          ))}
        </div>
      </FormComponent>
    </div>
  );
}

export default App;
