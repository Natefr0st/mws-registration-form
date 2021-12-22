import React from 'react';

const Stepper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center">
      {
        [children]
          .flat()
          .reduce((previousStep, currentStep) => (
            <>
              {previousStep}
              <div className="border-t-2 border-slate-500 w-20" />
              {currentStep}
            </>
          ))
      }
    </div>
  );
};

export default Stepper;