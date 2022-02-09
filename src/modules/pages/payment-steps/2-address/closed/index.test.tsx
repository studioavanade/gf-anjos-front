import React from "react";
import { render, screen } from "@testing-library/react";
import AddressStepClosed from "./index";
import { Provider } from "react-redux";
import store from "../../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Address Step Closed", () => {
  it("Should render on Address Step Closed screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<AddressStepClosed />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Dados de Endereço")).toBeInTheDocument();
    expect(
      screen.getByText("Aguardando o preenchimento dos dados")
    ).toBeInTheDocument();
  });
});
