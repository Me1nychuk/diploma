import axios from "axios";
import store, { AppDispatch } from "../store/store";
import { clearCurrentUser, updateToken } from "../store/user/slice";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const setToken = (token: string) => {
  Cookies.set("accessToken", token.split(" ")[1], {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
  axiosInstance.defaults.headers.common.Authorization = token;
};

export const clearToken = () => {
  Cookies.remove("accessToken", { sameSite: "strict" });
  axiosInstance.defaults.headers.common.Authorization = ``;
};

const MAX_RETRY_ATTEMPTS = 2; // максимальна кількість спроб оновлення токенів
let retryCount = 0; // лічильник спроб оновлення

//interceptor for refreshing
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      retryCount += 1;

      if (retryCount > MAX_RETRY_ATTEMPTS) {
        // якщо спроби перевищують ліміт, очищуємо токени і перенаправляємо
        const dispatch: AppDispatch = store.dispatch;
        dispatch(clearCurrentUser());
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const refreshResponse = await axiosInstance.get("auth/refresh-tokens");

        const newRefreshToken = refreshResponse.data.accessToken;

        const dispatch: AppDispatch = store.dispatch;

        dispatch(updateToken(newRefreshToken));
        setToken(newRefreshToken);
        retryCount = 0;

        originalRequest.headers.Authorization = newRefreshToken;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        const dispatch: AppDispatch = store.dispatch;

        dispatch(clearCurrentUser());
        clearToken();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
