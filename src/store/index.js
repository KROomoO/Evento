import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectListSlice from "./reducer/selectListSlice";
import userInfoSlice from "./reducer/userInfoSlice";

const reducer = combineReducers({
    selectedList: selectListSlice.reducer,
    userInfo: userInfoSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
