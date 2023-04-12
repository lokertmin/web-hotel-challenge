import { ReactElement } from "react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Config as UserEventSetupConfig } from "@testing-library/user-event/setup/setup";
import { Provider } from "react-redux";
import { store } from "../store/store";

type CustomRenderOptions = {
  options?: Omit<RenderOptions, "queries">;
  userEventSetupConfig?: UserEventSetupConfig;
  withRouter?: boolean;
  routerProps?: MemoryRouterProps;
};

const customRender = (
  ui: ReactElement,
  {
    options,
    userEventSetupConfig,
    withRouter = false,
    routerProps = {},
  }: CustomRenderOptions = {}
) => {
  const component = withRouter ? (
    <MemoryRouter {...routerProps}>{ui}</MemoryRouter>
  ) : (
    ui
  );

  return {
    user: userEvent.setup(userEventSetupConfig),
    ...render(<Provider store={store}>{component}</Provider>, options),
  };
};

export * from "@testing-library/react";
export { customRender as render };
