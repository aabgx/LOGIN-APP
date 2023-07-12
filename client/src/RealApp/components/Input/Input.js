import React from "react";
import "./Input.css";

const Input = (props) => {
  const {
    id,
    name,
    type,
    placeholder,
    label = "",
    inputValue,
    onChange,
  } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
