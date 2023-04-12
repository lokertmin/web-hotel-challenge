import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";
import { transformClientList } from "../../utils/mappers";
import { ManageClientsState } from "../../../types/clientsTypes";

export const CLIENTS_API_PATH =
  "lwhiteley/b01cf0964e19704df06fccf44d0c3c4d/raw/580a0aa9675985674dd1a70ffa799a4288c94bb3/guests.json";

export const clientsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query<number[], void>({
      query: () => CLIENTS_API_PATH,
      transformResponse: ({ clients }: { clients: number[] }) => clients,
    }),
  }),
});

export const MANAGE_CLIENTS_KEY = "manageClients";

export const manageClientsInitialState: ManageClientsState = {
  clients: [],
};

export const manageClientsSlice = createSlice({
  name: MANAGE_CLIENTS_KEY,
  initialState: manageClientsInitialState,
  reducers: {
    updateClientsList(
      state,
      action: PayloadAction<{
        fieldName: string;
        value: string | number | boolean | number[];
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.clients = {
        ...state.clients,
        [fieldName]: value,
      };
    },
    resetClientsList(state) {
      state.clients = manageClientsInitialState.clients;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      clientsSlice.endpoints.getClients.matchFulfilled,
      (state, action) => {
        state.clients = action.payload;
      }
    );
  },
});

export const domainSelectClients = clientsSlice.endpoints.getClients.select();

export const selectClients = createSelector(domainSelectClients, ({ data }) =>
  transformClientList(data)
);

export const { useGetClientsQuery } = clientsSlice;
