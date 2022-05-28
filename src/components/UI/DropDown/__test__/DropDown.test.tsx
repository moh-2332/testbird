import React from "react";

import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import DropDown from "../";

const handler = jest.fn();
const options = [
    {
        username: "username1",
        role: "role1",
        picture: "avatar-default.png",
        id: 1
    }
]

describe("DropDown tests", () => {
    it("Should match the snapshot", () => {
        const dropDownList = renderer.create(<DropDown options={options} id="id" label="username" value="select option" onOptionSelected={handler} onClose={handler} />);
        expect(dropDownList).toMatchSnapshot();
    });

    it("Should renders correctly", () => {
        const { container } = render(<DropDown options={options} id="id" label="username" value="select option" onOptionSelected={handler} onClose={handler} />);

        const optionsList = container.getElementsByClassName("dropdown__options--option");
        expect(optionsList.length).toBe(1);

        const textBox = screen.getByRole("textbox");
        expect(textBox).toBeInTheDocument();
    });

    it("Should renders the not-found status correctly", () => {
        render(<DropDown options={options} id="id" label="username" value="select option" onOptionSelected={handler} onClose={handler} />);

        const textBox = screen.getByRole("textbox");
        userEvent.type(textBox, "aaaa");

        const notFoundOption = screen.getByTestId("not-found");
        expect(notFoundOption).toBeInTheDocument();

    });

    it("Should run the onclick function after selecting the option", () => {
        const { container } = render(<DropDown options={options} id="id" label="username" value="select option" onOptionSelected={handler} onClose={handler} />);

        const optionsList = container.getElementsByClassName("dropdown__options--option");
        userEvent.click(optionsList[0]);

        expect(handler).toBeCalled();
    });
});