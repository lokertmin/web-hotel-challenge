import { render, screen } from "../../testUtils";
import MainPage from "./MainPage";

describe("<MainPage />", () => {
  it("should render properly", () => {
    render(<MainPage />, {
      withRouter: true,
    });

    expect(screen.getByText("First Floor")).toBeVisible();
  });
});
