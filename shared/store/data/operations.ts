import {
  CommentParameters,
  DiscussionParameters,
  fetchComments,
  fetchDiscussions,
  fetchNews,
  fetchOpinions,
  fetchUsers,
  NewsParameters,
  OpinionParameters,
} from "@/shared/services";
import {
  Comment,
  Discussion,
  FecthError,
  News,
  Opinion,
  PaginatedResponse,
  User,
} from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

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
  NewsParameters,
  { rejectValue: Error }
>("data/fetchNews", async (dto, thunkAPI) => {
  try {
    const res = await fetchNews(dto);
    if (res.statusCode !== 200) {
      return thunkAPI.rejectWithValue({
        message: res.error || "Fetch news failed.",
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

export const apiGetComments = createAsyncThunk<
  PaginatedResponse<Comment>,
  CommentParameters,
  { rejectValue: Error }
>("data/fetchComments", async (dto, thunkAPI) => {
  try {
    const res:
      | FecthError
      | { statusCode: number; data: PaginatedResponse<Comment> } =
      await fetchComments(dto);
    if ("error" in res) {
      return thunkAPI.rejectWithValue({
        message: res.error || "Fetch news failed.",
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

export const apiGetDiscussions = createAsyncThunk<
  PaginatedResponse<Discussion>,
  DiscussionParameters,
  { rejectValue: Error }
>("data/fetchDiscussions", async (dto, thunkAPI) => {
  try {
    const res = await fetchDiscussions(dto);
    if (res.statusCode !== 200) {
      return thunkAPI.rejectWithValue({
        message: res.error || "Fetch discussions failed.",
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

export const apiGetOpinions = createAsyncThunk<
  PaginatedResponse<Opinion>,
  OpinionParameters,
  { rejectValue: Error }
>("data/fetchOpinions", async (dto, thunkAPI) => {
  try {
    const res = await fetchOpinions(dto);
    if (res.statusCode !== 200) {
      return thunkAPI.rejectWithValue({
        message: res.error || "Fetch discussions failed.",
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
