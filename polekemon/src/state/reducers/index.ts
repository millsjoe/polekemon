// reducers go here

import { combineReducers } from "@reduxjs/toolkit";
import value from "./value";

export const rootReducer = combineReducers({
    counter: value,
});
