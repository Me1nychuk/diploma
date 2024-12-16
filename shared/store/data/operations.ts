import { fetchUsers } from "@/shared/services";
import { News, PaginatedResponse, User } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface GetUsersPayload {
  page: number;
  perPage: number;
}

interface Error {
  message?: string;
  statusCode?: number;
}

export const apiGetUsers = createAsyncThunk<
  PaginatedResponse<User>,
  GetUsersPayload,
  { rejectValue: Error }
>("data/fetchUsers", async (dto, thunkAPI) => {
  try {
    const res = await fetchUsers(dto);
    if (res.statusCode !== 200) {
      toast.error("Нажаль не вдалося отримати користувачів", {
        duration: 2000,
      });
      return thunkAPI.rejectWithValue({
        message: res.error || "Fetch users failed.",
        statusCode: res.statusCode,
      });
    }
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export const apiGetNews = createAsyncThunk<
  PaginatedResponse<News>,
  GetUsersPayload,
  { rejectValue: Error }
>("data/fetchUsers", async (dto, thunkAPI) => {
  try {
    const res = await fetchUsers(dto);
    if (res.statusCode !== 200) {
      toast.error("Нажаль не вдалося отримати користувачів", {
        duration: 2000,
      });
      return thunkAPI.rejectWithValue({
        message: res.error || "Fetch users failed.",
        statusCode: res.statusCode,
      });
    }
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
