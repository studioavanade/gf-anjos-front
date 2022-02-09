import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AmbassadorLogin from "./index";
import { Provider } from "react-redux";
import store from "../../../store";

describe("Ambassador Login Page", () => {
  it("Should render Ambassador Login Screen", () => {
    const { getByTestId } = render(
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={<AmbassadorLogin />}
          />
        </Routes>
      </BrowserRouter>
      </Provider>
    );

    const buttonSaved = getByTestId("button-continued");
    expect(buttonSaved).toBeInTheDocument();

    expect(screen.getByText("LOGIN")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByText("Criar conta")).toBeInTheDocument();
  });
});
