import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_id: "",
};

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUser_id: (state, action) => {
            state.user_id = action.payload;
        },
    },
});

export default userInfoSlice;
export const { setUser_id } = userInfoSlice.actions;
