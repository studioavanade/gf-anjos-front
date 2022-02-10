import React from "react";
import { render, screen } from "@testing-library/react";
import PaymentStepOpen from "./index";
import { Provider } from "react-redux";
import store from "../../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Payment Step Open", () => {
  it("Should render on Payment Step Open screen", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<PaymentStepOpen />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    const buttonDonation = getByTestId("button-donation");
    expect(buttonDonation).toBeInTheDocument();

    expect(screen.getByText("Pagamento")).toBeInTheDocument();
    expect(screen.getByText("Cartão de Crédito")).toBeInTheDocument();
    expect(screen.getByText("Validade Mês")).toBeInTheDocument();
    expect(screen.getByText("Ano")).toBeInTheDocument();
    expect(screen.getByText("Ambiente seguro")).toBeInTheDocument();
  });
});
