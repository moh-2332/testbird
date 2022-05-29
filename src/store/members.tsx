import { createSlice } from "@reduxjs/toolkit"
import Member from "../models/member";

export interface MemberState {
    members: { [key: string]: Member }
}

const initializeMemberState: MemberState = { members: {} };

const membersSlice = createSlice({
    name: "members",
    initialState: initializeMemberState,
    reducers: {
        add(state, action) {
            if (state.members[action.payload]) return;
            state.members[action.payload.id] = action.payload;
        },
        remove(state, action) {
            delete state.members[action.payload];
        }
    }
})

export const membersActions = membersSlice.actions;

export default membersSlice.reducer;