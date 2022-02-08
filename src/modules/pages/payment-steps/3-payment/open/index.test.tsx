import React from "react";
import { render } from "@testing-library/react";
import PaymentStepOpen from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTING_PATHS from "../../../../../routes/paths";

describe("Payment Step Open", () => {
  it("Should render on Payment Step Open screen", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTING_PATHS.PaymentSteps}
            element={<PaymentStepOpen />}
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
