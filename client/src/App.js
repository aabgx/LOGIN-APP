import "./App.css";
import { useContext, useState, useEffect } from "react";
import Input from "./RealApp/components/Input";
import FormComponent from "./RealApp/components/FormComponent";
import { FormContext } from "./RealApp/contexts/formContext";

function App() {
  const inputPropsLogin = useContext(FormContext);

  const defaultLoginValues = {
    email: "",
    pass: "",
  };

  const [loginValues, setLoginValues] = useState(defaultLoginValues);
  const [errors, setErrors] = useState({
    email: "",
    pass: "",
  });
  const [disableSubmit, setDisableSubmit] = useState(false);

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

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  useEffect(() => {
    if (!isEmail(loginValues.email) && loginValues.pass.length > 0) {
      setDisableSubmit(true);
      setErrors({ email: "email must be in the format example@mail.com" });
      return;
    }

    setDisableSubmit(false);
    setErrors({});
  }, [loginValues.email, loginValues.pass]);

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
        disableSubmit={disableSubmit}
      >
        {inputPropsLogin.map(getNewInput)}
        <div className="errorMessage">
          {Object.entries(errors).map(([key, error]) => (
            <span className="error" key={`${key}: ${error}`}>
              {key}: {error}
            </span>
          ))}
        </div>
      </FormComponent>
    </div>
  );
}

export default App;
