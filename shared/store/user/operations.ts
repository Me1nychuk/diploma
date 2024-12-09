import { loginUser, registerUser } from "@/shared/services";
import { User } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface RegisterUserPayload {
  fullname: string;
  email: string;
  password: string;
}

interface RegisterUserError {
  message?: string;
  statusCode?: number;
}

export const apiRegisterUser = createAsyncThunk<
  User[],
  RegisterUserPayload,
  { rejectValue: RegisterUserError }
>("currentUser/register", async (dto, thunkAPI) => {
  try {
    const response = await registerUser(dto);
    if (response.statusCode !== 201) {
      toast.error(
        "Нажаль, реєстрація не вдалась! \n Причина: " + response.error,
        {
          duration: 4000,
        }
      );
      return thunkAPI.rejectWithValue({
        message: response.error || "Registration failed.",
        statusCode: response.statusCode,
      });
    }

    toast.success(
      "Успішна реєстрація! ❤️ \n Перевірте свою електронну скриньку ✉️",
      {
        duration: 5000,
      }
    );
    return response.data as User[];
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Registration failed.",
    });
  }
});

export const apiLoginUser = createAsyncThunk<
  User | null,
  Omit<RegisterUserPayload, "fullname">,
  { rejectValue: RegisterUserError }
>("currentUser/login", async (object, thunkAPI) => {
  try {
    const response = await loginUser(object);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
