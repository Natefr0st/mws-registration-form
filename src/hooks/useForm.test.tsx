import { render } from "@testing-library/react";

import useForm from "./useForm";
import validate from "../utils/validateInfo";

describe("useForm", () => {
  it("should return object with state, handleChagnge and errors", () => {
    const MockedUseForm = () => {
      const result = useForm(validate)

      expect(result).toBeInstanceOf(Object);

      return <div>test</div>
    }

    render(<MockedUseForm />)
  });
});
