import React from "react";
import { render, screen } from "@testing-library/react";
import PersonalInformation from "./index";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import ROUTING_PATHS from "../../../../routes/paths";

describe('Personal Information Page', () => {
    it('Should render on Personal Information screen', () => {
        render(
            <BrowserRouter>
              <Routes>
                <Route
                  path={ROUTING_PATHS.AmbassadorCreateAccount}
                  element={<PersonalInformation />}
                />
              </Routes>
            </BrowserRouter>
          );
    })
})