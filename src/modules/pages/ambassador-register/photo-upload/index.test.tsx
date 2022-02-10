import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotoUpload from "./index";
import ROUTING_PATHS from "../../../../routes/paths";

describe("Photo Upload Page", () => {
  it("Should render Photo Upload Screen", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTING_PATHS.PhotoUpload}
            element={<PhotoUpload />}
          />
        </Routes>
      </BrowserRouter>
    );
  });
});
