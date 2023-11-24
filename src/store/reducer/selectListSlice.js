import { createSlice } from "@reduxjs/toolkit";

const regionMonth = String(new Date().getMonth() + 1);

let currentMonth = "";

if (regionMonth.length < 2) {
    currentMonth = "0" + regionMonth;
} else {
    currentMonth = regionMonth;
}

const initialState = {
    guname: "전체",
    free: 0,
    month: currentMonth,
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
        selectedMonth: (state, action) => {
            state.month = action.payload;
        },
    },
});

export default selectListSlice;
export const { selectedGuname, checkedFree, selectedMonth } =
    selectListSlice.actions;
