import React from "react";
import { render, screen } from "@testing-library/react";
import AmbassadorCreateAccount from "./index";

import { Provider } from "react-redux";
import store from "../../../../store/index";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../../routes/paths";

describe("Ambassador Create Account Page", () => {
  it("Shoul render Ambassador Create", () => {
     render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path={ROUTING_PATHS.AmbassadorCreateAccount}
              element={<AmbassadorCreateAccount />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

  });
});
