import axios from "axios";
import { axiosInstance } from "./axiosInstance";
import { Role } from "@/types";
import { GetUsersPayload } from "../store/data/operations";

export const createUser = async () => {};
export const updateUser = async (
  id: string,
  updateUserDto: {
    fullname?: string;
    email?: string;
    password?: string;
    phone?: string;
    bio?: string;
    role?: Role;
    resetToken?: string;
    resetTokenExp?: Date;
    isVerified?: boolean;
    isBlocked?: boolean;
  }
) => {
  try {
    const response = await axiosInstance.patch("/users/" + id, {
      ...updateUserDto,
    });
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
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
export const deleteUser = async (idOrEmail: string) => {
  try {
    const response = await axiosInstance.delete("/users/" + idOrEmail);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
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
export const fetchUsers = async ({
  page = "1",
  perPage = "10",
  order = "asc",
  sortBy = "title",
  nameOrEmail = "",
}: GetUsersPayload) => {
  try {
    const response = await axiosInstance.get(
      `/users?page=${page}&sortBy=${sortBy}&order=${order}&name-or-email=${nameOrEmail}&per_page=${perPage}`
    );
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
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
export const fetchUserByIdOrEmail = async (idOrEmail: string) => {
  try {
    const response = await axiosInstance.get("/users/" + idOrEmail);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
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
