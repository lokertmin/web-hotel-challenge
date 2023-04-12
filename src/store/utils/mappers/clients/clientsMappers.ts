import { Client } from "../../../../types";
import { getClientsMock } from "../../../../mocks";

export const transformDomainClient = (client: number): Client => ({
  availableAmount: client,
});

export const transformClientList = (clients?: number[]): Client[] => {
  if (!clients) {
    const clientsMock = getClientsMock();
    return clientsMock.map(transformDomainClient);
  }

  return clients.map(transformDomainClient);
};
