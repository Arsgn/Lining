import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/ItemSlice";
import authData from "./slices/ItemSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    data: data,
    auth: authData,
  },
});
export default store;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
