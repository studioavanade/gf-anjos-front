import React from "react";
import { render, screen } from "@testing-library/react";
import PaymentStepClosed from "./index";
import { Provider } from "react-redux";
import store from "../../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Payment Step Closed", () => {
  it("Should render on Payment Step Closed screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<PaymentStepClosed />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Pagamento")).toBeInTheDocument();
    expect(
      screen.getByText("Aguardando o preenchimento dos dados")
    ).toBeInTheDocument();
  });
});
