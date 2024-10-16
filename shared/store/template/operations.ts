import { createAsyncThunk } from "@reduxjs/toolkit";

interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

interface RegisterUserError {
  message: string;
}

export const apiRegisterUser = createAsyncThunk<
  string, // Тут вказуємо тип, який буде повертатися (response)
  RegisterUserPayload, // Тип аргументу, що передається (object)
  { rejectValue: RegisterUserError } // Тип для thunkAPI.rejectWithValue
>("slice/async", async (object, thunkAPI) => {
  try {
    const response = (await 1) + 3;
    return response.toString();
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
