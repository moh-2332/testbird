import { createSlice } from "@reduxjs/toolkit"
import Member from "../models/member";

export interface MemberState {
    members: Array<Member>
}

const initializeMemberState: MemberState = { members: [] };

const membersSlice = createSlice({
    name: "members",
    initialState: initializeMemberState,
    reducers: {
        add(state, action) {
            if (state.members.some(member => member.id === action.payload.id)) return;
            state.members.push(action.payload);
        },
        remove(state, action) {
            state.members = state.members.filter(member => member.id !== action.payload);
        }
    }
})

export const membersActions = membersSlice.actions;

export default membersSlice.reducer;