import { combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as userReducer } from "./user/reducer";

const rootReducer = combineReducers({
    authReducer,
    userReducer
})

export const store = legacy_createStore(rootReducer);