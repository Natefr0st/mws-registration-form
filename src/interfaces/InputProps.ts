import { LiteralUnion } from "../types/LiteralUnion";

export interface InputProps {
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'date'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text',
    string
    >;
  name?: string;
  placeholder?: string;
}