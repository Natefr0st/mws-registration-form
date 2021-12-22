import React from 'react';

import { InputProps } from "../../interfaces/InputProps";

const Input = ({ type, name, placeholder }: InputProps) => {
  return (
    <div>
      <input
        className="w-full rounded border-2 border-slate-600 p-3 mb-4"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;