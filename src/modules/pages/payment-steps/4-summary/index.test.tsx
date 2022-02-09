import React from "react";
import { render, screen } from "@testing-library/react";
import DonationSummaryStep from "./index";
import { Provider } from "react-redux";
import store from "../../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Donation Summary Step Page", () => {
  it("Should render on Donation Summary screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<DonationSummaryStep />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Resumo da doação:")).toBeInTheDocument();
  });
});
