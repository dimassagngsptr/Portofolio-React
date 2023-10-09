import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: "user",
   initialState: {
      value: {},
   },
   reducers: {
      setData: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;
