import "./App.css";
import { useContext, useState, useEffect } from "react";
import Input from "./RealApp/components/Input";
import FormComponent from "./RealApp/components/FormComponent";
import { FormContext } from "./RealApp/contexts/formContext";

function App() {
  const inputPropsLogin = useContext(FormContext);
  const [loginValues, setLoginValues] = useState({
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState({});
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
    const errors = {};
    if (!isEmail(loginValues.email)) {
      setDisableSubmit(true);
      errors.email = "email must be in the format example@mail.com";
    } else {
      setDisableSubmit(false);
    }
    setErrors(errors);
  }, [loginValues.email]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setLoginValues({ email: "", pass: "" });
    console.log({ loginValues });
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
        {Object.entries(errors).map(([key, error]) => (
          <span className="error" key={`${key}: ${error}`}>
            {key}: {error}
          </span>
        ))}
      </FormComponent>
    </div>
  );
}

export default App;
