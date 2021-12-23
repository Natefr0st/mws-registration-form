import React, { useState } from "react";

import { FormContextInterface } from "../interfaces/FormContextInterface";

const initialState: FormContextInterface = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
}

export const FormContext = React.createContext([initialState, {}]);

const FormProvider = ({children}: {children: React.ReactNode}) => {
  const [state, setState] = useState(initialState);

  return (
    <FormContext.Provider value={[state, setState]}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
