import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectClients } from "../../store/domain";
import { FloorPageProps } from "../../types/floorTypes";
import { getFloorRoomsMock } from "../../mocks/floors";
import { Room } from "../../components/Room";
import {
  calculateFloorFreeRoomsAmount,
  calculateFloorRoomsRentSum,
} from "../../utils/rentCalculations";

const FloorPage: FC<FloorPageProps> = ({ floorNumber }) => {
  const clients = useSelector(selectClients);
  const rooms = getFloorRoomsMock(floorNumber);
  const [isRoomsRented, setIsRoomsRented] = useState(false);

  const onRentRoomsClicked = () => {
    setIsRoomsRented(true);
  };

  const renderRentRoomsButton = () => (
    <button
      className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-semibold py-3 px-10 rounded"
      onClick={onRentRoomsClicked}
    >
      Rent rooms
    </button>
  );

  const renderUsageFields = () => {
    const floorRentInformation = isRoomsRented
      ? calculateFloorRoomsRentSum(clients, rooms)
      : calculateFloorFreeRoomsAmount(rooms);
    return (
      <div className="w-full md:w-1/2 flex space-x-3">
        <div className="w-1/2">
          <h2 className="text-white">
            {isRoomsRented ? "Usage" : "Free"} Premium:{" "}
            {floorRentInformation.premiumRoomsCount}
          </h2>
          <p className="text-white">
            {floorRentInformation.premiumRoomsRentSum || ""}
          </p>
        </div>
        <div className="w-1/2">
          <h2 className="text-white">
            {isRoomsRented ? "Usage" : "Free"} Economy:{" "}
            {floorRentInformation.economyRoomsCount}
          </h2>
          <p className="text-white">
            {floorRentInformation.economyRoomsRentSum || ""}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black min-h-screen">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="pb-10 text-3xl font-semibold text-white capitalize lg:text-4xl">
          Floor № {floorNumber} appartments
        </h1>
        {renderUsageFields()}
        {!isRoomsRented && renderRentRoomsButton()}
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {rooms.map((room, index) => (
            <Room
              key={`${floorNumber}${index}${room.premium}`}
              room={room}
              isRoomsRented={isRoomsRented}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPage;
