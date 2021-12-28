import React, { useState, useContext } from "react";
import {FormContext} from "../context/FormContext";

const useForm = (validate: any) => {
  const [state, setState]: any = useContext(FormContext);
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });

    setErrors(validate(state));
  }

  return { handleChange, state, errors }
};

export default useForm;