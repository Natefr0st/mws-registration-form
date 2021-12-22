import { render, screen } from "@testing-library/react";
import Step from "./Step";

describe("Step Component", () => {
  it("should render step element", () => {
    render(<Step title="Test" url="/" >test</Step>)
  });
});