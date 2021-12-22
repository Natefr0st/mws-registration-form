import { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("should render input field", () => {
    render(<Input placeholder="Email" />)
    const inputField = screen.getByPlaceholderText("Email");
    expect(inputField).toBeInTheDocument();
  });
});