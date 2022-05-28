import React from "react";

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AddMember from "../";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
}));

describe("AddMember tests", () => {
    it("Should renders correctly", () => {
        render(<AddMember />);

        const addBtn = screen.getByTestId("icon");
        expect(addBtn).toBeInTheDocument();

        const addBtnTitle = screen.getByText(/Add team member to this test/i);
        expect(addBtnTitle).toBeInTheDocument();

        const dropdown = screen.queryByTestId("dropdown");
        expect(dropdown).not.toBeInTheDocument();
    });

    it("Should display the dropdown list after clicking on the add member", () => {
        render(<AddMember />);

        const addBtn = screen.getByTestId("icon");
        userEvent.click(addBtn);

        const addBtnTitle = screen.queryByText(/Add team member to this test/i);
        expect(addBtnTitle).not.toBeInTheDocument();

        const dropdown = screen.getByTestId("dropdown");
        expect(dropdown).toBeInTheDocument();
    });
});