import { useEffect, useState } from "react";

function useValidation(fieldValues, validationType) {
  const [errors, setErrors] = useState({
    email: "",
    pass: "",
    general: "",
  });

  const [disableSubmit, setDisableSubmit] = useState(false);

  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  function isPassword(password) {
    if (password.length < 8) {
      return false;
    }

    if (!/[a-z]/.test(password)) {
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/\d/.test(password)) {
      return false;
    }
    return true;
  }

  const isName = (name) => /^[A-Z][a-z]+$/.test(name);

  const errorObj = {
    register: [
      {
        errorCond:
          !isEmail(fieldValues.email) &&
          Object.values(fieldValues).some((value) => value.length > 0),
        errorType: "email",
        message: "Email must be in the format example@mail.com",
      },
      {
        errorCond:
          !isPassword(fieldValues.pass) &&
          Object.values(fieldValues).some((value) => value.length > 0),
        errorType: "pass",
        message:
          "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number",
      },
      {
        errorCond:
          !isName(fieldValues.firstName) &&
          Object.values(fieldValues).some((value) => value.length > 0),
        errorType: "firstName",
        message:
          "First name must start with a capital letter and contain only letters",
      },
      {
        errorCond:
          !isName(fieldValues.lastName) &&
          Object.values(fieldValues).some((value) => value.length > 0),
        errorType: "lastName",
        message:
          "Last name must start with a capital letter and contain only letters",
      },
      {
        errorCond: !/^\d{10}$/.test(fieldValues.phone),
        errorType: "phone",
        message: "Phone number must contain 10 digits",
      },
      {
        errorCond: Object.values(fieldValues).some(
          (value) => value.length === 0
        ),
        errorType: "general",
        message: "All fields are required",
      },
    ],
    login: [
      {
        errorCond:
          !isEmail(fieldValues.email) &&
          Object.values(fieldValues).some((value) => value.length > 0),
        errorType: "email",
        message: "Email must be in the format example@mail.com",
      },
      {
        errorCond:
          !isPassword(fieldValues.pass) &&
          Object.values(fieldValues).some((value) => value.length > 0),
        errorType: "pass",
        message:
          "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number",
      },
      {
        errorCond: Object.values(fieldValues).some(
          (value) => value.length === 0
        ),
        errorType: "general",
        message: "All fields are required",
      },
    ],
  };

  useEffect(() => {
    const isError = errorObj[validationType].find((error) => error.errorCond);
    if (isError) {
      setErrors({ [isError.errorType]: isError.message });
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
      setErrors({});
    }
  }, [fieldValues]);

  return { errors, disableSubmit };
}

export default useValidation;
