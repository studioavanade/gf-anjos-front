import React from "react";
import { render, screen } from "@testing-library/react";
import DonationSummaryStep from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTING_PATHS from "../../../../routes/paths";

describe("Donation Summary Step Page", () => {
  it("Should render on Donation Summary screen", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTING_PATHS.PaymentSteps}
            element={<DonationSummaryStep />}
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
