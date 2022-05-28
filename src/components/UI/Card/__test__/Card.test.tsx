import React from "react";

import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import Card from "../";

describe("Card tests", () => {
    it("Should match the snapshot", () => {
        const card = renderer.create(<Card><h1>This is a test</h1></Card>);
        expect(card).toMatchSnapshot();
    });

    it("Should renders correctly", () => {
        render(<Card><h1>This is a test</h1></Card>);

        const sampleText = screen.getByText(/This is a test/i);
        expect(sampleText).toBeInTheDocument();
    });
});