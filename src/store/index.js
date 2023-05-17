import { configureStore, combineReducers } from "@reduxjs/toolkit";
import selectListSlice from "./reducer/selectListSlice";
import selectResultListSlice from "./reducer/selectResultListSlice";

const reducer = combineReducers({
    selectResultList: selectResultListSlice.reducer,
    selectedList: selectListSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
