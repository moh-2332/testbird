import React from "react";

import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import Tooltip from "../";

describe("Tooltip tests", () => {
    it("Should match the snapshot", () => {
        const tooltip = renderer.create(<Tooltip text="help" />);
        expect(tooltip).toMatchSnapshot();
    });

    it("Should renders correctly", () => {
        render(<Tooltip text="help" />);

        const sampleText = screen.getByText(/help/i);
        expect(sampleText).toBeInTheDocument();

        const tooltip = screen.getByTestId("tooltip");
        expect(tooltip).toBeInTheDocument();
    });
});