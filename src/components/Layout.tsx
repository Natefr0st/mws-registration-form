import React from 'react';
import Step from "./stepper/Step";
import Stepper from "./stepper/Stepper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <div className="flex flex-col items-center min-h-[85vh] min-w-[35vw] p-6 rounded bg-white shadow-lg">
        <h2 className="text-xl font-bold text-slate-600">Register</h2>
        <form className="flex flex-col items-center mt-8">
          <Stepper>
            <Step title="Account Details" url="/registration/step-1">1</Step>
            <Step title="User Details" url="/registration/step-2">2</Step>
            <Step title="Contact Details" url="/registration/step-3">3</Step>
          </Stepper>
          {children}
        </form>
      </div>
    </div>
  );
};

export default Layout;