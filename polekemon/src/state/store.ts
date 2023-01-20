// store done here

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const store = configureStore({
    reducer: rootReducer,
});

export type IState = ReturnType<typeof rootReducer>;
