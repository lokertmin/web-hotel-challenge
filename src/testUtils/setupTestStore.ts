import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import { apiSlice, manageClientsSlice } from "../store/domain";
import { RootState } from "../store/store";

export const setupTestStore = (
  overrides?: ConfigureStoreOptions<RootState>["preloadedState"]
) =>
  configureStore({
    reducer: combineReducers({
      [apiSlice.reducerPath]: apiSlice.reducer,
      [manageClientsSlice.name]: manageClientsSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    preloadedState: overrides,
  });
