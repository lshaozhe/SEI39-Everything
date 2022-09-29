import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", auth: false },
  reducers: {
    login(state, action) {
      state.username = action.payload;
      state.auth = true;
    },
    logout(state) {
      state.username = "";
      state.auth = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
