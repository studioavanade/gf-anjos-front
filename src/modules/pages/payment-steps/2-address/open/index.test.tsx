import React from "react";
import { render, screen } from "@testing-library/react";
import AddressStepOpen from "./index";
import { Provider } from "react-redux";
import store from "../../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Address Step Open", () => {
  it("Should render on Address Step Open screen", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<AddressStepOpen />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    const buttonSaved = getByTestId("button-saved");
    expect(buttonSaved).toBeInTheDocument();

    expect(screen.getByText("Dados de Endereço")).toBeInTheDocument();
    expect(screen.getByText("Salvar e continuar")).toBeInTheDocument();
    expect(screen.getByText("Não sei meu CEP")).toBeInTheDocument();
    expect(screen.getByText("País")).toBeInTheDocument();
  });
});
