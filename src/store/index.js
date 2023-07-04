import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    initalise(state){
        if(localStorage.getItem("user") !== null)
            state.isLoggedIn = true
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("user");
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});