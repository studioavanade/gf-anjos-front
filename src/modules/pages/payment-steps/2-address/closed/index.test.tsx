import React from "react";
import { render } from "@testing-library/react";
import AddressStepClosed from "./index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../../../routes/paths";

describe('Address Step Closed', () => {
    it('Should render on Address Step Closed screen', () => {
        render(
            <BrowserRouter>
              <Routes>
                <Route
                  path={ROUTING_PATHS.PaymentSteps}
                  element={<AddressStepClosed />}
                />
              </Routes>
            </BrowserRouter>
          );
    })
})
