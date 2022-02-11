import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Ranking from "./index";
import store from "../../../store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
describe("Ranking Page", () => {
  it("Should render on ranking screen ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ranking />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    const buttonInfluencer = getByTestId("submit-influencer");
    expect(buttonInfluencer).toBeInTheDocument();
    expect(
      screen.getByText("É SIMPLES VIRAR UM INFLUENCIADOR")
    ).toBeInTheDocument();
    expect(screen.getByText("Veja nossos influenciadores")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Uma família de, aproximadamente, 5 pessoas precisa de 1 cesta básica a cada 15 dias. O Valor arrecadado por você será transformado em cestas básicas digitais que vão ajudar essas famílias e não passar necessidade. As cestas são direcionadas para as nossas unidades que farão todo o processo de entrega para as famílias mais carentes."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("ACOMPANHE NOSSO RANKING DE ANJOS")
    ).toBeInTheDocument();
    expect(screen.getByText("Gerando Falções")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Somos um ecossistema de desenvolvimento social que atua por meio da estratégia de rede em periferias e favelas de todo o Brasil. Atráves da Falcons University, Unidades Aceleradas, Oficinas e o Redesenho de Favelas, baseamos nossas ações em análise de dados e gestão eficiente, para interromper o ciclo de pobreza e transformar a pobreza em item de museu."
      )
    ).toBeInTheDocument();
  });
});