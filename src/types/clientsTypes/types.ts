import type { SerializedError } from "@reduxjs/toolkit";

export type Client = {
  availableAmount: number;
};

export type ClientsListSumInformation = {
  amount: number;
  count: number;
};

export interface ManageClientsState {
  clients: number[];
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  error?: SerializedError;
}
