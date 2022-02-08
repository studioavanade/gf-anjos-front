import React from "react";
import { render, screen } from "@testing-library/react";
import ConfirmationStep from "./index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../../routes/paths";

describe('Confirmation Step Page', () => {
    it('Should render on Confirmation Step screen', () => {
        render(
            <BrowserRouter>
              <Routes>
                <Route
                  path={ROUTING_PATHS.PaymentSteps}
                  element={<ConfirmationStep />}
                />
              </Routes>
            </BrowserRouter>
          );
    })
})