import React from "react";
import { render, screen } from "@testing-library/react";
import ConfirmationStep from "./index";
import { Provider } from "react-redux";
import store from "../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Confirmation Step Page", () => {
  it("Should render on Confirmation Step screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<ConfirmationStep />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("OBRIGADO POR SUA DOAÇÃO")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Essa doação vai ajudar muitas pessoas, esse pequeno gesto faz uma grande diferença"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Seu pagamento foi efetuado")).toBeInTheDocument();
    //expect(screen.getByText("Baixar comprovante")).toBeInTheDocument();
  });
});
