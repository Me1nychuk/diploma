import { createSlice } from "@reduxjs/toolkit";
import { User, News, Discussion, PaginatedResponse } from "@/types";
import { apiGetNews } from "./operations";

export type DataType = {
  users: PaginatedResponse<User> | undefined;
  news: PaginatedResponse<News> | undefined;
  discussions: PaginatedResponse<Discussion> | undefined;
};

export interface dataState {
  data: DataType;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: dataState = {
  data: { users: undefined, news: undefined, discussions: undefined },
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const slice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    clearData: (state) => {
      state.data = {
        users: undefined,
        news: undefined,
        discussions: undefined,
      };
      state.isError = false;
      state.errorMessage = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiGetNews.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
        state.data.news = undefined;
      })
      .addCase(apiGetNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = "";
        state.data.news = action.payload;
      })
      .addCase(apiGetNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = String(action.error.message);
        state.data.news = undefined;
      }),
});

export const { clearData } = slice.actions;

export const dataReducer = slice.reducer;
