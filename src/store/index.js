import { configureStore } from "@reduxjs/toolkit";
import selectListSlice from "./reducer/selectListSlice";

const store = configureStore({
    reducer: {
        selectedList: selectListSlice.reducer,
    },
});

export default store;
