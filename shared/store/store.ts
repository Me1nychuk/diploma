import { configureStore } from "@reduxjs/toolkit";
import { sliceReducer } from "./template/slice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { currentUserReducer } from "./user/slice";

const store = configureStore({
  reducer: {
    field: sliceReducer,
    user: currentUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
