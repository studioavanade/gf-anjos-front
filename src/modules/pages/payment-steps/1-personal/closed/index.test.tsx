import React from "react";
import { render, screen } from "@testing-library/react";
import PersonalStepClosed from "./index";
import { Provider } from "react-redux";
import store from "../../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Personal Step Closed", () => {
  it("Should render on Personal Step Closed screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<PersonalStepClosed />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Dados Pessoais")).toBeInTheDocument();
    expect(
      screen.getByText("Aguardando o preenchimento dos dados")
    ).toBeInTheDocument();
  });
});
