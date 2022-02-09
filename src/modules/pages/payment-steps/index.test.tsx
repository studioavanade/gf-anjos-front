import React from "react";
import { render} from "@testing-library/react";
import PaymentSteps from "./index";
import { Provider } from "react-redux";
import store from "../../../store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Payment Step Page", () => {
  it("Should render on Payment Step screen", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<PaymentSteps />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });
});
