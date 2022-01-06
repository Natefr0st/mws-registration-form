import React from "react";

export interface InputProps {
  type: 'button'
    | 'checkbox'
    | 'date'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'text';
  name: string;
  placeholder: string;
  value: string;
  changeHandler?(event: React.ChangeEvent<HTMLInputElement>): void;
}