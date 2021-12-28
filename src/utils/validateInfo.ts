import { FormContextInterface } from "../interfaces/FormContextInterface";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants";

export default function validate(values: FormContextInterface) {
  let errors: FormContextInterface = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  if (!values.email) {
    errors.email = "Email is Required"
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = "Password is Required"
  } else if (!PASSWORD_REGEX.test(values.password)) {
    errors.password = "Password is invalid"
  }

  return errors;
}