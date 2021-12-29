import React from "react";

import { InputProps } from "../../interfaces/InputProps";

const Input = ({type, name, placeholder, changeHandler, value}: InputProps) => {
  return (
    <input
      className="w-full rounded border-2 border-slate-600 p-3"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default Input;