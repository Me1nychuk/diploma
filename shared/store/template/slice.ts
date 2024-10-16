import { createSlice } from "@reduxjs/toolkit";
import { apiRegisterUser } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
};

const slice = createSlice({
  // Ім'я слайсу
  name: "tasks",
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт case-редюсерів
  reducers: {},
  // Об'єкт async-редюсерів
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiRegisterUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(apiRegisterUser.rejected, (state) => {
        state.isLoading = false;
      }),
});

// Експортуємо фабрики екшенів
export const {} = slice.actions;

// Експортуємо редюсер слайсу
export const sliceReducer = slice.reducer;
