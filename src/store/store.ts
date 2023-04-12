import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { apiSlice, manageClientsSlice } from "./domain";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [manageClientsSlice.name]: manageClientsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
