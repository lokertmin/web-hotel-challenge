import { FC } from "react";
import { RoomComponentProps } from "../../types/roomsTypes";

const Room: FC<RoomComponentProps> = ({ room, isRoomsRented }) => {
  const isPremium = room.premium;
  const premiumRoomStyle =
    "bg-black shadow-md border border-gray-700 rounded-lg max-w-sm bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700";
  const economyRoomStyle =
    "bg-black shadow-md border border-gray-700 rounded-lg max-w-sm";
  const roomStyle = isPremium ? premiumRoomStyle : economyRoomStyle;

  return (
    <div className="max-w-2xl mx-auto">
      <div className={roomStyle}>
        <div className="p-5">
          <h5 className="text-white font-bold text-2xl tracking-tight mb-2">
            {`It is greate ${isPremium ? "Premium" : "Economy"} room`}
          </h5>
          <p className="font-normal text-white mb-3">
            {isRoomsRented ? "Room already booked" : "It is free room"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Room;
