import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AmbassadorLogin from "./index";
import ROUTING_PATHS from "../../../routes/paths/index";

describe("Ambassador Login Page", () => {
  it("Should render Ambassador Login Screen", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTING_PATHS.AmbassadorLogin}
            element={<AmbassadorLogin />}
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
