import { createSlice } from "@reduxjs/toolkit";
import { User, News, Discussion, PaginatedResponse } from "@/types";

export type DataType = {
  users: PaginatedResponse<User>;
  news: PaginatedResponse<News>;
  discussions: PaginatedResponse<Discussion>;
};

export interface dataState {
  data: DataType | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: dataState = {
  data: undefined,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const slice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    clearData: (state) => {
      state.data = undefined;
      state.isError = false;
      state.errorMessage = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => builder,
  // .addCase()
});

export const { clearData } = slice.actions;

export const dataReducer = slice.reducer;
