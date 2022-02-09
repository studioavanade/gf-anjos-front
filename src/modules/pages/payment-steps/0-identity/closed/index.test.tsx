import React from "react";
import { render, screen } from "@testing-library/react";
import IdentityStepClosed from "./index";
import { Provider } from "react-redux";
import store from "../../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Identity Step Closed", () => {
  it("Should render on Identity Step Closed screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<IdentityStepClosed />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Identificação")).toBeInTheDocument();
  });
});
