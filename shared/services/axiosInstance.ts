import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axiosInstance.defaults.headers.common.Authorization = ``;
};
