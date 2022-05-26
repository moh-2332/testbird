import { configureStore } from "@reduxjs/toolkit"

import memberReducer from "./member"

const store = configureStore({
    reducer: memberReducer
})

export default store;