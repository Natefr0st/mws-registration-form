import React from 'react';

import { InputProps } from "../../interfaces/InputProps";

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <div>
      <input
        className="border-2 border-slate-600 p-2"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;