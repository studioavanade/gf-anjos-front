import React from "react";
import { render } from "@testing-library/react";
import IdentityStepOpen from "./index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../../../routes/paths";

describe('Identity Step Open', () => {
    it('Should render on Identity Step Open screen', () => {
        render(
            <BrowserRouter>
              <Routes>
                <Route
                  path={ROUTING_PATHS.PaymentSteps}
                  element={<IdentityStepOpen />}
                />
              </Routes>
            </BrowserRouter>
          );
    })
})
