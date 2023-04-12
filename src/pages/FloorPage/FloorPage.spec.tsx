import { render, screen } from "../../testUtils";
import FloorPage from "./FloorPage";

describe("<FloorPage />", () => {
  it("should render properly", () => {
    render(<FloorPage floorNumber={1} />);

    expect(screen.getByText("Floor № 1 appartments")).toBeVisible();
  });
});
