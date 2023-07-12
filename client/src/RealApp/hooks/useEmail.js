import React, { useEffect } from "react";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function useEmail(email) {
  useEffect(() => {
    const errors = {};
    if (!isEmail(email)) {
      errors.email = "email must be in the format example@mail.com";
    } else {
      setDisableSubmit(false);
    }
  }, [email]);
}
