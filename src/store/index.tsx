import { configureStore } from "@reduxjs/toolkit"

import membersReducer from "./members"

const store = configureStore({
    reducer: { members: membersReducer }
})

export default store;