import React from "react";

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import TeamMember from "../";
import Member from "../../../../../models/member";

const member: Member = {
    id: 1,
    username: "user",
    role: "role",
    picture: "user.png"
}

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn()
}));

describe("AddMember tests", () => {
    it("Should renders correctly", () => {
        render(<TeamMember member={member} />);

        const memberAvatar = screen.getByTestId("icon");
        expect(memberAvatar).toBeInTheDocument();

        const memberRole = screen.getByTestId("member-role");
        expect(memberRole).toBeInTheDocument();

        const memberDescription = screen.getByTestId("member-description");
        expect(memberDescription).toBeInTheDocument();
    });

    it("Should change the avatar picture to the remove icon after hovering the avatar", () => {
        render(<TeamMember member={member} />);

        let removeIcon = screen.queryByText(/close/i);
        expect(removeIcon).not.toBeInTheDocument();

        const memberAvatar = screen.getByTestId("icon");
        userEvent.hover(memberAvatar);

        removeIcon = screen.getByText(/close/i);
        expect(removeIcon).toBeInTheDocument();
    });
});