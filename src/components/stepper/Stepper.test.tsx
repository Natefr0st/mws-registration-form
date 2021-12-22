import { render, screen } from "@testing-library/react";

import Stepper from "./Stepper";
import Step from "./Step";

describe("Stepper Component", () => {
  it("should render stepper component with its children", () => {
    render(
      <Stepper>
        <Step title="Account Details" url="/registration/step-1">1</Step>
        <Step title="User Details" url="/registration/step-2">2</Step>
        <Step title="Contact Details" url="/registration/step-3">3</Step>
      </Stepper>
    )

    const stepOne = screen.getByText(1);
    const stepTwo = screen.getByText(2);
    const stepThree = screen.getByText(3);

    expect(stepOne).toBeInTheDocument();
    expect(stepTwo).toBeInTheDocument();
    expect(stepThree).toBeInTheDocument();
  });
});