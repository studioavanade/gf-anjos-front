import React from "react";
import { render } from "@testing-library/react";
import PersonalStepOpen from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTING_PATHS from "../../../../../routes/paths";

describe("Personal Step Open", () => {
  it("Should render on Personal Step Open screen", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTING_PATHS.PaymentSteps}
            element={<PersonalStepOpen />}
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
