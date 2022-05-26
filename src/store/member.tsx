import { createSlice } from "@reduxjs/toolkit"
import Member from "../models/member";

export interface MemberState {
    members: Array<Member>
}

const initializeMemberState: MemberState = { members: [] };

const memberSlice = createSlice({
    name: "member",
    initialState: initializeMemberState,
    reducers: {
        add(state, action) {
            state.members.push(action.payload as Member);
        },
        remove(state) { }
    }
})

export const memberActions = memberSlice.actions;

export default memberSlice.reducer;