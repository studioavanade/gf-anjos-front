import React from "react";
import { render, screen } from "@testing-library/react";
import AmbassadorCreateAccount from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../store";

describe("Ambassador Create Account Page", () => {
  it("Shoul render Ambassador Create", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<AmbassadorCreateAccount />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    const buttonSaved = getByTestId("button-continued");
    expect(buttonSaved).toBeInTheDocument();

    expect(screen.getByText("Cadastro")).toBeInTheDocument();
    expect(screen.getByText("Continuar")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });
});
