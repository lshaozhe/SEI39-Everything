import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";
import otherReducer from "./other";

const store = configureStore({
  reducer: { user: userReducer, other: otherReducer },
});

export default store;

// import { createSlice, configureStore } from "@reduxjs/toolkit";

// import userReducer from "./user";

// const userSlice = createSlice({
//   name: "user",
//   initialState: { username: "", auth: false },
//   reducers: {
//     login(state, action) {
//       state.username = action.payload;
//       state.auth = true;
//     },
//     logout(state) {
//       state.username = "";
//       state.auth = false;
//     },
//   },
// });

// const store = configureStore({
//   reducer: userSlice.reducer,
// });

// export const userActions = userSlice.userActions;

// export default store;

// //there can be only 1 store in the entire redux
// //there can be more than 1 slice (requires: name, initialstate, reducer)
// //export store and all the actions (within store)

// //note: reducers in line 6 != reducer in line 19
