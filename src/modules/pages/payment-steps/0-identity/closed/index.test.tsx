import React from "react";
import { render } from "@testing-library/react";
import IdentityStepClosed from "./index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../../../routes/paths";

describe('Identity Step Closed', () => {
    it('Should render on Identity Step Closed screen', () => {
        render(
            <BrowserRouter>
              <Routes>
                <Route
                  path={ROUTING_PATHS.PaymentSteps}
                  element={<IdentityStepClosed />}
                />
              </Routes>
            </BrowserRouter>
          );
    })
})
