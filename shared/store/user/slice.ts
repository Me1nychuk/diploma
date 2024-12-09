import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { apiLoginUser, apiRegisterUser } from "./operations";
import { JWTPayload } from "@/types";

export interface currentUserState {
  currentUser: JWTPayload | undefined;
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
      })
      .addCase(apiLoginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
        state.errorMessage = "";
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        const decodedToken = jwtDecode<JWTPayload>(action.payload.accessToken);
        state.currentUser = {
          id: decodedToken.id,
          email: decodedToken.email,
          role: decodedToken.role,
          fullname: decodedToken.fullname,
          isVerified: decodedToken.isVerified,
          isBlocked: decodedToken.isBlocked,
        };
      }),
});

export const {} = slice.actions;

export const currentUserReducer = slice.reducer;
