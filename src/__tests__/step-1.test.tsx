import { render, screen } from "@testing-library/react";

import StepOne from "../pages/registration/step-1";

describe("Step One Page", () => {
  it("should render email input field", () => {
    render(<StepOne />)

    const emailInputField = screen.getByPlaceholderText("Email");

    expect(emailInputField).toBeInTheDocument();
  });

  it("should render password input field", () => {
    render(<StepOne />)

    const passwordInputField = screen.getByPlaceholderText("Password");

    expect(passwordInputField).toBeInTheDocument();
  });

  it("should render continue button", () => {
    render(<StepOne />)

    const continueButton = screen.getByRole("button");

    expect(continueButton).toBeInTheDocument();
  })
});