import fetchMock from "jest-fetch-mock";
import { setupTestStore } from "../../../testUtils/setupTestStore";
import {
  testApiSuccessResponse,
  testApiErrorResponse,
} from "../../../testUtils/helpers";
import { clientsSlice, CLIENTS_API_PATH } from "./clients.slice";
import { getClientsMock } from "../../../mocks/clients";
import { serviceURL } from "../../../constants/constants";

describe("clients.slice", () => {
  describe("getClients", () => {
    beforeAll(() => {
      fetchMock.enableMocks();
    });

    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it("should make correct API call", async () => {
      fetchMock.mockResponse(JSON.stringify({ clients: getClientsMock() }));
      const store = setupTestStore();
      await store
        .dispatch(clientsSlice.endpoints.getClients.initiate())
        .then(() => {
          expect(fetchMock).toBeCalledTimes(1);
          const { method, url } = fetchMock.mock.calls[0][0] as Request;

          expect(method).toEqual("GET");
          expect(url).toEqual(`${serviceURL}${CLIENTS_API_PATH}`);
        });
    });

    it("successful response", async () => {
      fetchMock.mockResponse(JSON.stringify({ clients: getClientsMock() }));
      const store = setupTestStore();

      const action = await store.dispatch(
        clientsSlice.endpoints.getClients.initiate()
      );
      testApiSuccessResponse(action, getClientsMock());
    });

    it("unsuccessful response", async () => {
      const errorMessage = "Clients list does not exist.";
      fetchMock.mockReject(new Error(errorMessage));
      const store = setupTestStore();

      const action = await store.dispatch(
        clientsSlice.endpoints.getClients.initiate()
      );
      testApiErrorResponse(action, errorMessage);
    });
  });
});
