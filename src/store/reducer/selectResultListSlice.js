import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resultList: [],
};

const selectResultListSlice = createSlice({
    name: "selectResultList",
    initialState,
    reducers: {
        setResult: (state, action) => {
            state.resultList = action.payload;
        },
    },
});

export default selectResultListSlice;
export const { setResult } = selectResultListSlice.actions;
