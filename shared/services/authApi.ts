import { ApiResponse, User } from "@/types";
import axios from "axios";
import { axiosInstance, setToken } from "./axiosInstance";

export const registerUser = async ({
  email,
  password,
  fullname,
}: Pick<User, "email" | "password" | "fullname">): Promise<
  ApiResponse<User>
> => {
  try {
    const response = await axiosInstance.post("auth/register", {
      email,
      password,
      fullname,
    });
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "User registration failed.",
      };
    }

    return {
      statusCode: 500,
      error: "User registration failed. Something went wrong.",
    };
  }
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post("auth/login", {
      email,
      password,
    });

    setToken(response.data.accessToken);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "User login failed.",
      };
    }

    return {
      statusCode: 500,
      error: "User login failed. Something went wrong.",
    };
  }
};

export const verify = async (token: string) => {
  try {
    const response = await axiosInstance.get(`auth/verify/${token}`);

    return {
      statusCode: response.status,
      message: response.data.message,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "User verification failed.",
      };
    }

    return {
      statusCode: 500,
      error: "User verification failed. Something went wrong.",
    };
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post("auth/logout");

    setToken("");
    return {
      statusCode: response.status,
      message: response.data.message,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "User logout failed.",
      };
    }

    return {
      statusCode: 500,
      error: "User logout failed. Something went wrong.",
    };
  }
};
