import { combineReducers } from "redux";
import { eventReducer } from "../../features/events/eventReducer";
import { testReducer } from "../../features/sandbox/textReducer";
import { configureStore } from "./configureStore";

export const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
})