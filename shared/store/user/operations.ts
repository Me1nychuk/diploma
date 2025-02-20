import { UserData } from "@/shared/components/shared/user-form";
import {
  loginUser,
  loginWithGoogle,
  logoutUser,
  registerUser,
  updateUser,
} from "@/shared/services";
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
  { accessToken: string },
  Omit<RegisterUserPayload, "fullname">,
  { rejectValue: RegisterUserError }
>("currentUser/login", async (dto, thunkAPI) => {
  try {
    const response = await loginUser(dto);
    if (response.statusCode !== 201) {
      toast.error(
        "Нажаль не вдалося залогінитися!  \n Причина: " + response.error,
        {
          duration: 4000,
        }
      );
      return thunkAPI.rejectWithValue({
        message: response.error || "Login failed.",
        statusCode: response.statusCode,
      });
    }

    toast.success("Ви успішно залогінились!", {
      duration: 2000,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export const apiLogoutUser = createAsyncThunk<
  { status: string },
  void,
  { rejectValue: RegisterUserError }
>("currentUser/logout", async (_, thunkAPI) => {
  try {
    const response = await logoutUser();
    if (response.statusCode !== 200) {
      toast.error("Нажаль не вдалося вийти!  \n Причина: " + response.error, {
        duration: 4000,
      });
      return thunkAPI.rejectWithValue({
        message: response.error || "Logout failed.",
        statusCode: response.statusCode,
      });
    }

    toast.success("Ви успішно вийшли", {
      duration: 2000,
    });
    return { status: "success" };
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export const apiUpdateCurrentUser = createAsyncThunk<
  User,
  { newData: UserData; id: string },
  { rejectValue: RegisterUserError }
>("currentUser/updateUser", async (dto, thunkAPI) => {
  try {
    const response = await updateUser(dto.id, dto.newData);
    console.log(response);
    if (response.statusCode !== 200) {
      toast.error("Нажаль не вдалося оновити профіль", {
        duration: 4000,
      });
      return thunkAPI.rejectWithValue({
        message: response.error || "Update failed.",
        statusCode: response.statusCode,
      });
    }

    toast.success("Ви успішно оновили профіль", { duration: 2000 });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export const apiLoginWithGoogle = createAsyncThunk<
  { accessToken: string },
  { token: string },
  { rejectValue: RegisterUserError }
>("currentUser/loginWithGoogle", async (dto, thunkAPI) => {
  try {
    const response = await loginWithGoogle(dto);
    if (response.statusCode !== 201) {
      toast.error(
        "Нажаль не вдалося залогінитися!  \n Причина: " + response.error,
        {
          duration: 4000,
        }
      );
      return thunkAPI.rejectWithValue({
        message: response.error || "Login failed.",
        statusCode: response.statusCode,
      });
    }

    toast.success("Ви успішно залогінились!", {
      duration: 2000,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
