import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "./testUtils";
import App from "./App";

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});
