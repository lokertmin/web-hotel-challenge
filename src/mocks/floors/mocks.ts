import { Room } from "../../types/roomsTypes";

export const getFloorRoomsMock = (floorNumber: number): Room[] => {
  switch (floorNumber) {
    case 1:
      return [
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: false },
        { premium: false },
        { premium: false },
      ];
    case 2:
      return [
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: false },
        { premium: false },
        { premium: false },
        { premium: false },
        { premium: false },
      ];
    case 3:
      return [
        { premium: true },
        { premium: true },
        { premium: false },
        { premium: false },
        { premium: false },
        { premium: false },
        { premium: false },
        { premium: false },
        { premium: false },
      ];
    case 4:
      return [
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: false },
      ];
    default:
      return [
        { premium: true },
        { premium: true },
        { premium: true },
        { premium: false },
        { premium: false },
        { premium: false },
      ];
  }
};
