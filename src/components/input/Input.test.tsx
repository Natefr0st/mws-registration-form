import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./Input";

describe("Input", () => {
  it("should render input field", () => {
    render(<Input placeholder="Email" />)
    const inputField = screen.getByPlaceholderText("Email");
    expect(inputField).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<Input placeholder="Email" />)

    const inputField = screen.getByPlaceholderText("Email");

    userEvent.type(inputField, "Test");
    expect(inputField).toHaveValue("Test");
  });
});