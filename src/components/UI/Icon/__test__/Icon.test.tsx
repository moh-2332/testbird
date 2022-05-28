import React from "react";

import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Icon from "../";

const handler = jest.fn();

describe("Icon tests", () => {
    it("Should match the snapshot", () => {
        const homeIcon = renderer.create(<Icon><span className="material-icons">home</span></Icon>);
        expect(homeIcon).toMatchSnapshot();
    });

    it("Should renders correctly", () => {
        render(<Icon><span className="material-icons">home</span></Icon>);

        const homeIcon = screen.getByTestId("icon");
        expect(homeIcon).toBeInTheDocument();
    });

    it("Should run the onclick function", () => {
        render(<Icon onClick={handler}><span className="material-icons">home</span></Icon>);

        const homeIcon = screen.getByTestId("icon");
        userEvent.click(homeIcon);

        expect(handler).toBeCalled();
    });

    it("Should show/hide the tooltip after hovering/unhovering", () => {
        render(<Icon tooltipText="home"><span className="material-icons">home</span></Icon>);

        const homeIcon = screen.getByTestId("icon");
        userEvent.hover(homeIcon);

        const tooltip = screen.getByTestId("tooltip");
        expect(tooltip).toBeInTheDocument();

        userEvent.unhover(homeIcon);

        expect(tooltip).not.toBeInTheDocument();
    });
});