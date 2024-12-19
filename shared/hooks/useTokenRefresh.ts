import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { clearCurrentUser, updateToken } from "../store/user/slice";
import { refreshTokes } from "../services";

export const useTokenRefresh = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const isRefreshing = React.useRef(false);
  React.useEffect(() => {
    if (!user.currentUser && !user.token) return;
    const refreshTokensinterval = setInterval(async () => {
      if (isRefreshing.current) return;
      isRefreshing.current = true;

      try {
        if (user.currentUser && user.token) {
          const response = await refreshTokes();
          if (response.statusCode !== 201) {
            throw new Error("Invalid");
          }
          dispatch(updateToken(response.accessToken));
        }
      } catch (error) {
        console.error("Failed to refresh" + error);
        dispatch(clearCurrentUser());
      } finally {
        isRefreshing.current = false;
      }
    }, 15 * 60 * 1000);
    return () => clearInterval(refreshTokensinterval);
  }, [user.currentUser, user.token, dispatch]);
};
