import React from "react";
import { render } from "@testing-library/react";
import PaymentStepClosed from "./index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../../../routes/paths";

describe('Payment Step Closed', () => {
    it('Should render on Payment Step Closed screen', () => {
        render(
            <BrowserRouter>
              <Routes>
                <Route
                  path={ROUTING_PATHS.PaymentSteps}
                  element={<PaymentStepClosed />}
                />
              </Routes>
            </BrowserRouter>
          );
    })
})
