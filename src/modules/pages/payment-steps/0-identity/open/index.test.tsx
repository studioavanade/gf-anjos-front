import React from "react";
import { render, screen } from "@testing-library/react";
import IdentityStepOpen from "./index";
import { Provider } from "react-redux";
import store from "../../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Identity Step Open", () => {
  it("Should render on Identity Step Open screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<IdentityStepOpen />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Identificação")).toBeInTheDocument();
    expect(screen.getByText("Criar Conta")).toBeInTheDocument();
  });
});
