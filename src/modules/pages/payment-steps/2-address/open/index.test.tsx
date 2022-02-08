import React from "react";
import { render } from "@testing-library/react";
import AddressStepOpen from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTING_PATHS from "../../../../../routes/paths";

describe("Address Step Open", () => {
  it("Should render on Address Step Open screen", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTING_PATHS.PaymentSteps}
            element={<AddressStepOpen />}
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
