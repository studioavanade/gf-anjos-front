import React from "react";
import { render } from "@testing-library/react";
import PersonalStepClosed from "./index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../../../routes/paths";

describe('Personal Step Closed', () => {
    it('Should render on Personal Step Closed screen', () => {
        render(
            <BrowserRouter>
              <Routes>
                <Route
                  path={ROUTING_PATHS.PaymentSteps}
                  element={<PersonalStepClosed />}
                />
              </Routes>
            </BrowserRouter>
          );
    })
})
