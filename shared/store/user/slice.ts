import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import {
  apiLoginUser,
  apiLogoutUser,
  apiRegisterUser,
  apiUpdateCurrentUser,
  apiLoginWithGoogle,
} from "./operations";
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
    updateToken: (state, action) => {
      state.token = action.payload;
      const decodedToken = jwtDecode<JWTPayload>(action.payload.split(" ")[1]);
      state.currentUser = {
        id: decodedToken.id,
        email: decodedToken.email,
        role: decodedToken.role,
        fullname: decodedToken.fullname,
        isVerified: decodedToken.isVerified,
        isBlocked: decodedToken.isBlocked,
      };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
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
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        const decodedToken = jwtDecode<JWTPayload>(
          action.payload.accessToken.split(" ")[1]
        );
        state.currentUser = {
          id: decodedToken.id,
          email: decodedToken.email,
          role: decodedToken.role,
          fullname: decodedToken.fullname,
          isVerified: decodedToken.isVerified,
          isBlocked: decodedToken.isBlocked,
        };
      })
      .addCase(apiLoginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "login failed";
      })
      .addCase(apiLogoutUser.fulfilled, (state) => {
        state.currentUser = undefined;
        state.token = undefined;
        state.isError = false;
        state.errorMessage = "";
        state.isLoading = false;
      })
      .addCase(apiLogoutUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(apiLogoutUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "Failed to logout";
      })
      .addCase(apiUpdateCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(apiUpdateCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = {
          id: payload.id,
          email: payload.email,
          role: payload.role,
          fullname: payload.fullname,
          isVerified: payload.isVerified,
          isBlocked: payload.isBlocked,
        };
      })
      .addCase(apiUpdateCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "Failed to update user";
      })
      .addCase(apiLoginWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(apiLoginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        const decodedToken = jwtDecode<JWTPayload>(
          action.payload.accessToken.split(" ")[1]
        );
        state.currentUser = {
          id: decodedToken.id,
          email: decodedToken.email,
          role: decodedToken.role,
          fullname: decodedToken.fullname,
          isVerified: decodedToken.isVerified,
          isBlocked: decodedToken.isBlocked,
        };
      })
      .addCase(apiLoginWithGoogle.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "login failed";
      }),
});

export const { clearCurrentUser, updateToken } = slice.actions;

export const currentUserReducer = slice.reducer;
