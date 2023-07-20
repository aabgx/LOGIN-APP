import React, { useState, useContext, useEffect } from "react";
import Input from "../Input";
import { FormContext } from "../../contexts/formContext";
import { AppContext } from "../../contexts/appContext";
import useValidation from "../../hooks/useValidation";
import FormComponent from "../FormComponent/FormComponent";
import UserList from "../UserList/UserList.js";
import {
  putRequest,
  getRequest,
  deleteRequest,
  postRequest,
} from "../../services/requests";

const Login = () => {
  const [inputPropsLogin] = useContext(FormContext);
  const { users, setUsers } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const userDetails = {
    firstName: "Peter",
    lastName: "Borza",
    email: "peter.peter@gmail.com",
    pass: "parola",
    birthday: "1985-03-12",
    userRole: "USER",
    adresses: "whetever1",
    phoneNumbers: "0000000000",
    technologies: [],
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // postRequest(userDetails);
    // setUsers([...users, userDetails]);
    setLoginValues(defaultLoginValues);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest();
      setUsers(response.data);
    };
    getUsers();
  }, []);

  if (isLoggedIn) {
    return (
      <UserList
        title="User List"
        imageUrl="https://static.prod01.ue1.p.pcomm.net/blackbaud/user_content/photos/000/006/6783/a6132a5cd55abcae190bc82567ca8a47-original-users.png"
        users={users}
      />
    );
  }

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
