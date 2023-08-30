import React from "react";
import { render, screen } from "@testing-library/react";
import Launcher from "..";
import { checkSucess, checkFailue } from "../../../helpers/verificaSucesso";
import "@testing-library/jest-dom/extend-expect";
// Mock das funções de ajuda (verificaSucesso)
jest.mock("../../../helpers/verificaSucesso", () => ({
  checkSucess: jest.fn(), // Corrigido para checkSuccess
  checkFailue: jest.fn(), // Mantido como checkFailue
}));

describe("Launcher", () => {
  beforeEach(() => {
    // Limpa os mocks antes de cada teste
    jest.clearAllMocks();
  });

  it("Deve renderizar o componente Launcher corretamente", () => {
    // Dados de exemplo para o teste
    const dados = [
      {
        id: 1,
        launch_year: 2023,
        rocket: {
          rocket_name: "falcon",
        },
      },
      {
        id: 2,
        launch_year: 2018,
        rocket: {
          rocket_name: "Millenium",
        },
      },
    ];

    // Mock dos resultados das funções de ajuda
    jest.spyOn(console, "error").mockImplementation(() => {});

    render(<Launcher dados={dados} />);

    // Verifique se os elementos esperados são renderizados
    const cardContainer = screen.getByTestId("launcher-card");
    expect(cardContainer).toBeInTheDocument();

    // const pieChart = screen.getByText("Mocked Pie Chart");
    // expect(pieChart).toBeInTheDocument();

    const cardContainerTitulo = screen.getByText("Resultado de lançamento");
    expect(cardContainerTitulo).toBeInTheDocument();

    // Verifique se as funções de ajuda foram chamadas
    expect(checkSucess).toHaveBeenCalledTimes(1);
    expect(checkFailue).toHaveBeenCalledTimes(1);
  });
});
