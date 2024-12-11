import axios from "axios";
import { axiosInstance } from "./axiosInstance";

export const createUser = async () => {};
export const updateUser = async () => {};
export const deleteUser = async () => {};
export const getMe = async () => {
     try {
    const response = await axiosInstance.get("/users/me");

    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};
export const fetchUsers = async () => {};
export const fetchUserByIdOrEmail = async () => {};
