import React from "react";
import * as redux from 'react-redux'

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import TeamMembers from "../";
import Member from "../../../../models/member";

const members: { [key: string]: Member } = {
    1: {
        id: 1,
        username: "user1",
        role: "role1",
        picture: "user1.png"
    },
    2: {
        id: 2,
        username: "user2",
        role: "role2",
        picture: "user2.png"
    },
    3: {
        id: 3,
        username: "user3",
        role: "role3",
        picture: "user3.png"
    },
    4: {
        id: 4,
        username: "user3",
        role: "role3",
        picture: "user3.png"
    },
    5: {
        id: 5,
        username: "user3",
        role: "role3",
        picture: "user3.png"
    },
    6: {
        id: 6,
        username: "user3",
        role: "role3",
        picture: "user3.png"
    }
}

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
}));

describe("AddMember tests", () => {
    beforeEach(() => {
        jest.spyOn(redux, 'useSelector').mockImplementation(callback => {
            return callback({ members: { members } });
        });
    });
    afterEach(() => {
        jest.spyOn(redux, 'useSelector').mockClear();
    });

    it("Should renders correctly and just displays 5 members and the 'show all' button", () => {
        render(<TeamMembers />);

        const allRoles = screen.getAllByTestId("member-role");
        expect(allRoles).toHaveLength(5);

        const allDescriptions = screen.getAllByTestId("member-description");
        expect(allDescriptions).toHaveLength(5);

        const showAll = screen.getByText(/show all/i);
        expect(showAll).toBeInTheDocument();
    });

    it("Should display all of the members after clicking on the 'show all' button", () => {
        render(<TeamMembers />);

        const showAll = screen.getByText(/show all/i);
        userEvent.click(showAll);

        const allRoles = screen.getAllByTestId("member-role");
        expect(allRoles).toHaveLength(6);

        const allDescriptions = screen.getAllByTestId("member-description");
        expect(allDescriptions).toHaveLength(6);
    });
});