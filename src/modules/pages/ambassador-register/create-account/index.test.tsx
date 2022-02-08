import React from "react";
import { render} from "@testing-library/react";
import AmbassadorCreateAccount from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTING_PATHS from "../../../../routes/paths";

describe("Ambassador Create Account Page", () => {
  it("Shoul render Ambassador Create", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTING_PATHS.AmbassadorCreateAccount}
            element={<AmbassadorCreateAccount />}
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
