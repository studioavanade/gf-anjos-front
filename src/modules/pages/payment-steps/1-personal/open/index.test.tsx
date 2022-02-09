import React from "react";
import { render, screen } from "@testing-library/react";
import PersonalStepOpen from "./index";
import { Provider } from "react-redux";
import store from "../../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Personal Step Open", () => {
  it("Should render on Personal Step Open screen", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<PersonalStepOpen />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    const buttonSaved = getByTestId("button-saved");
    expect(buttonSaved).toBeInTheDocument();

    expect(screen.getByText("Dados Pessoais")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Desejo acompanhar a prestação de conta da campanha e informações sobre a Gerando Falcões"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Eu aceito receber comunicações")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Ao informar meus dados, eu concordo com a Politica de Privacidade e com os Termos de Uso"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Dados Pessoais")).toBeInTheDocument();
    expect(screen.getByText("Dados Pessoais")).toBeInTheDocument();
  });
});
