import { render, screen } from "../../testUtils";
import Room from "./Room";
import { RoomComponentProps } from "../../types/roomsTypes";

const roomMockedProps: RoomComponentProps = {
  room: { premium: true },
  isRoomsRented: false,
};

describe("<Room />", () => {
  it("should render properly", () => {
    render(<Room {...roomMockedProps} />);

    expect(
      screen.getByText(
        `It is greate ${
          roomMockedProps.room.premium ? "Premium" : "Economy"
        } room`
      )
    ).toBeVisible();

    expect(
      screen.getByText(
        roomMockedProps.isRoomsRented
          ? "Room already booked"
          : "It is free room"
      )
    ).toBeVisible();
  });
});
