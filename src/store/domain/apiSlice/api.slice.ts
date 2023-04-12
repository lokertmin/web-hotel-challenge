import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serviceURL } from "../../../constants/constants";

export const ROOT = "root";

export const apiSlice = createApi({
  reducerPath: ROOT,
  baseQuery: fetchBaseQuery({
    baseUrl: serviceURL,
  }),
  endpoints: () => ({}),
});

export const { middleware } = apiSlice;
