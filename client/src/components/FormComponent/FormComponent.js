import React from "react";
import "./FormComponent.css";
import classNames from "classnames";

const FormComponent = (props) => {
  const { title, message, buttonText, children, onSubmit, disableSubmit } =
    props;

  const formButtonStyles = classNames("formButton", {
    formButtonDisabled: disableSubmit,
  });

  return (
    <form onSubmit={onSubmit}>
      <h1 className="formTitle">{title}</h1>
      <h2 className="formMessage">{message}</h2>
      <div className="inputs">{children}</div>
      <button
        className={formButtonStyles}
        id="formButton"
        type="submit"
        disabled={disableSubmit}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default FormComponent;
