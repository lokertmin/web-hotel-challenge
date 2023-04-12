import { render, screen, waitFor } from "../../testUtils";
import TabBar from "./TabBar";
import { TabBarProps } from "../../types/tabTypes";
import { availableTabs } from "../../constants";

const tabBarMockedProps: TabBarProps = {
  currentLocation: availableTabs[0].link,
  tabs: availableTabs,
};

describe("<TabBar />", () => {
  it("should render properly", () => {
    render(<TabBar {...tabBarMockedProps} />, { withRouter: true });

    expect(screen.getByTestId(tabBarMockedProps.currentLocation)).toBeVisible();
  });
});
