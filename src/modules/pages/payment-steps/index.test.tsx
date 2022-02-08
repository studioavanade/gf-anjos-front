import React from "react";
import { render } from "@testing-library/react";
import PaymentSteps from "./index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../routes/paths";

describe('Payment Step Page', () => {
    it('Should render on Payment Step screen', () => {
        render(
            <BrowserRouter>
              <Routes>
                <Route
                  path={ROUTING_PATHS.PaymentSteps}
                  element={<PaymentSteps />}
                />
              </Routes>
            </BrowserRouter>
          );
    })
})