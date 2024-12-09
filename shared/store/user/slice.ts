import { createSlice } from "@reduxjs/toolkit";
import { apiRegisterUser } from "./operations";
import { User } from "@/types";

export interface currentUserState {
  currentUser: User | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  token: string | undefined;
}

const initialState: currentUserState = {
  currentUser: undefined,
  isLoading: false,
  isError: false,
  errorMessage: "",
  token: undefined,
};

const slice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    clearCurrentUser: (state) => {
      state.currentUser = undefined;
      state.token = undefined;
      state.isError = false;
      state.errorMessage = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
        state.errorMessage = "";
      })
      .addCase(apiRegisterUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(apiRegisterUser.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const {} = slice.actions;

export const currentUserReducer = slice.reducer;
