import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LadingPageDonator from "./index";
import ROUTING_PATHS from "../../../../routes/paths/index";

describe("Landing Page", () => {
  it("Should render Landing Screen", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTING_PATHS.LadingPageDonator}
            element={<LadingPageDonator />}
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
