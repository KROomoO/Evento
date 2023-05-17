import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    guname: "",
    free: false,
};

const selectListSlice = createSlice({
    name: "selectedList",
    initialState,
    reducers: {
        selectedGuname: (state, action) => {
            state.guname = action.payload;
        },
        checkedFree: (state, action) => {
            state.free = action.payload;
        },
    },
});

export default selectListSlice;
export const { selectedGuname, checkedFree } = selectListSlice.actions;
