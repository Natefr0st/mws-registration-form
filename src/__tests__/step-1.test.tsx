import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {RouterContext} from "next/dist/shared/lib/router-context";

import StepOne from "../pages/registration/step-1";
import {createMockRouter} from "../utils/createMockRouter";

describe("Step One Page", () => {
    it("should render email input field", () => {
        render(<StepOne/>)

        const emailInputField = screen.getByPlaceholderText("Email");

        expect(emailInputField).toBeInTheDocument();
    });

    it("should render password input field", () => {
        render(<StepOne/>)

        const passwordInputField = screen.getByPlaceholderText("Password");

        expect(passwordInputField).toBeInTheDocument();
    });

    it("should render continue button", () => {
        render(<StepOne/>)

        const continueButton = screen.getByRole("button");

        expect(continueButton).toBeInTheDocument();
    })
});

it("should navigate to /registration/step-2 when continue button is clicked", () => {
    const router = createMockRouter({
        pathname: "/registration/step-2"
    });
    render(
        <RouterContext.Provider value={createMockRouter(router)}>
            <StepOne/>
        </RouterContext.Provider>
    );

    const continueButton = screen.getByText(/continue/i);
    userEvent.click(continueButton);
    expect(router.push).toHaveBeenCalledWith("/registration/step-2");
});