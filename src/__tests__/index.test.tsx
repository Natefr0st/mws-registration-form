import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../pages";

describe("Home Page", () => {
  it("should render home page title", () => {
    render(<Home />);

    const title = screen.getByText(/Welcome to/i);

    expect(title).toBeInTheDocument();
  });

  it("should render register button", () => {
    render(<Home />);

    const registerButton = screen.getByRole("button");

    expect(registerButton).toBeInTheDocument();
  });
});