import { Client, ClientsListSumInformation } from "../types/clientsTypes";
import { Room } from "../types/roomsTypes";
import { FloorRentInformation } from "../types/floorTypes";

const getClientListAmount = (
  clientsList: Client[],
  availableRoomsCount: number,
  startIndex = 0
): ClientsListSumInformation => {
  let resultAmount = 0;
  let resultCount = 0;
  if (availableRoomsCount > 0)
    clientsList.forEach((client, index) => {
      const indexWithStep = index - startIndex;
      if (indexWithStep >= 0 && availableRoomsCount - indexWithStep > 0) {
        resultAmount += client.availableAmount;
        resultCount += 1;
      }
    });

  return {
    amount: resultAmount,
    count: resultCount,
  };
};

export const calculateFloorFreeRoomsAmount = (
  rooms: Room[]
): FloorRentInformation => {
  const premiumRoomsCount = rooms.filter((room) => {
    if (room.premium) return true;
    return false;
  }).length;
  const economyRoomsCount = rooms.length - premiumRoomsCount;

  return {
    premiumRoomsCount,
    economyRoomsCount,
    premiumRoomsRentSum: 0,
    economyRoomsRentSum: 0,
  };
};

export const calculateFloorRoomsRentSum = (
  clients: Client[],
  rooms: Room[]
): FloorRentInformation => {
  const { premiumRoomsCount, economyRoomsCount } =
    calculateFloorFreeRoomsAmount(rooms);

  const premiumAmountClients = clients
    .sort((a, b) => (a.availableAmount > b.availableAmount ? -1 : 1))
    .filter((client) => client.availableAmount >= 100);
  const economyAmountClients = clients
    .sort((a, b) => (a.availableAmount > b.availableAmount ? -1 : 1))
    .filter((client) => client.availableAmount < 100);

  const premiumClietnsPremiumRooms = getClientListAmount(
    premiumAmountClients,
    premiumRoomsCount
  );

  const economyClientsPremiumRooms =
    economyRoomsCount < economyAmountClients.length
      ? getClientListAmount(
          economyAmountClients,
          premiumRoomsCount - premiumClietnsPremiumRooms.count
        )
      : {
          amount: 0,
          count: 0,
        };

  const economyClientsEconomyRooms = getClientListAmount(
    economyAmountClients,
    economyRoomsCount,
    economyClientsPremiumRooms.count
  );

  return {
    premiumRoomsCount:
      premiumClietnsPremiumRooms.count + economyClientsPremiumRooms.count,
    economyRoomsCount: economyClientsEconomyRooms.count,
    premiumRoomsRentSum:
      premiumClietnsPremiumRooms.amount + economyClientsPremiumRooms.amount,
    economyRoomsRentSum: economyClientsEconomyRooms.amount,
  };
};
